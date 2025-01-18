import jwt from 'jsonwebtoken';
// JWT is used to generate token which is used for authentication and authorization 
const generateTokenAndSetCookie = (userId, res) => {
    const token = jwt.sign({userId}, process.env.JWT_SECRET, {
        expiresIn : "15d" // token will expire in 15 days
    });  
    res.cookie("jwt", token, {
        maxAge: 15 * 24 * 60 * 60 * 1000, // 15 days in milliseconds
        httpOnly: true, // cookie cannot be accessed or modified by the browser and cross-site scripting attacks are prevented
        secure: process.env.NODE_ENV !== "development", // cookie will be set only on https in production
        sameSite: "strict", // cookie is sent only to the same site as the one that originated the request
    });
};

export default generateTokenAndSetCookie; 