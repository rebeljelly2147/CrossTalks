import User from "../models/user.model.js";
export const getUsersForSidebar = async (req, res) => {
    try {
        const loggedInUserId = req.user._id;

        const filteredUsers = await User.find({ _id: { $ne: loggedInUserId } }).select('-password');// $ne means not equal to loggedInUserId and select is used to select only the required fields from the document

        res.status(200).json(filteredUsers); // this will send the filteredUsers as response
    } catch (error) {
        console.error("Error in getUsersForSidebar controller : ",error.message);  
        res.status(500).json({message: "Internal Server Error During Getting Users From Sidebar"});
    }
}; 