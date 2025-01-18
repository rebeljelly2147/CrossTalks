import jwt from 'jsonwebtoken';
import User from '../models/user.model.js';

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

        const user = await User.findById(decoded.id).select('-password');

        if(!user) {
            return res.status(401).json({message: "Unauthorized - User Not Found"});
        }

        req.user = user;

        next(); // This will call the next middleware or controller which is sendMessage in this case

    } catch (error) {
        console.log("Error in protectRoute middleware : ",error.message);
        res.status(500).json({message: "Internal Server Error During Protecting Route"});    
    }
};

export default protectRoute;
