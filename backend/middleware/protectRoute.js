import jwt from 'jsonwebtoken';
import User from '../models/user.model.js';
import dotenv from 'dotenv';

dotenv.config();

const protectRoute = async(req, res, next) => {
    try {
        const token = req.cookies.jwt;
        if(!token) {
            return res.status(401).json({message: "Unauthorized - No Token Provided"});
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        
        if(!decoded) {
            return res.status(401).json({message: "Unauthorized - Invalid Token Provided"});
        }
        console.log("Decoded token:", decoded); // Debugging line

        const user = await User.findById(decoded.userId).select('-password');// -password is used to not send password in response and select is used to select only the required fields
        if(!user) {
            console.log("User not found with ID:", decoded.userId); // Debugging line
            return res.status(401).json({message: "Unauthorized - User Not Found"});
        }
        console.log("Authenticated user:", user); // Debugging line

        req.user = user;

        next(); // This will call the next middleware or controller which is sendMessage in this case

    } catch (error) {
        console.log("Error in protectRoute middleware : ",error.message);
        res.status(500).json({message: "Internal Server Error During Protecting Route"});    
    }
};

export default protectRoute;
