import User from '../models/user.model.js';
import bcrypt from 'bcryptjs';
import generateTokenAndSetCookie from '../utils/generateToken.js';

export const signup = async(req, res) => {
    // res.send('Signup Route');
    // console.log('Signup Route');
    try {
        const {fullname, username, password, confirmPassword, gender } = req.body;
        // if(!fullname || !username || !password || !confirmPassword || !gender) {
        //     return res.status(400).json({message: "All fields are required"});
        // }

        if(password !== confirmPassword) {
            return res.status(400).json({message: "Password and Confirm Password do not match"});
        }

        const user = await User.findOne({username});

        if(user) {
            return res.status(400).json({error: "User already exists"});
        }

        // Hashed password here
        const salt = await bcrypt.genSalt(12); // 12 is the salt round, higher the number more secure the password but it will take more time to hash the password
        const hasedPassword = await bcrypt.hash(password,salt);

        // Profile Picture
        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?name=${username}`;
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?name=${username}`;

        const newUser = new User({
            fullname,
            username,
            password: hasedPassword, //now hashed password is stored in the database
            gender,
            profilePic: gender === "male" ? boyProfilePic : girlProfilePic // ternary operator is used to set the profilePic field based on the gender
        });

        if(newUser){
            // Generate JWT token
            await generateTokenAndSetCookie(newUser._id, res);
            await newUser.save();            
            res.status(201).json({
                message: "User created successfully",
                user: {
                    _id : newUser._id,
                    fullname: newUser.fullname,
                    username: newUser.username,
                    gender: newUser.gender,
                    profilePic: newUser.profilePic
                }
            });
        }
        else {
            res.status(400).json({message: "Invalid user data"});
        }
    }
    catch (error) {
        console.log("Error in signup controller : ",error.message);
        res.status(500).json({message: "Internal Server Error During Signup"});
    }
}
export const login = async(req, res) => {
    // res.send('Login Route');
    // console.log('Login Route');
    try {
        const {username, password} = req.body; //destructuring username and password from req.body
        const user = await User.findOne({username}); //find user by username
        const isPasswordCorrect = await bcrypt.compare(password, user?.password || ""); // check if password is correct and if user is null then password is set to empty string and user?.password is used to avoid error

        if(!user || !isPasswordCorrect) { // if user is null or password is incorrect
            return res.status(400).json({message: "Invalid username or password"});
        }
        if(!username || !password) { // if username or password is empty
            return res.status(400).json({message: "All fields are required"});
        }
        
        // Now we will Generate JWT token and set cooki e
        await generateTokenAndSetCookie(user._id, res);
        res.status(200).json({
            message: "User logged in successfully",
            user: {
                _id : user._id,
                fullname: user.fullname,
                username: user.username,
                gender: user.gender,
                profilePic: user.profilePic
            }
        });
    } catch (error) {
        console.log("Error in login controller : ",error.message);
        res.status(500).json({message: "Internal Server Error During Login"});   
    } 
}
export const logout = (req, res) => {
    // res.send('Logout Route');
    // console.log('Logout Route');
    try {
        res.cookie("jwt", "", {maxAge: 1}); // set the jwt cookie to empty string and maxAge to 1 millisecond
        res.status(200).json({message: "User logged out successfully"});   
    } catch (error) {
        console.log("Error in logout controller : ",error.message);
        res.status(500).json({message: "Internal Server Error During Logout"}); 
    }
} 