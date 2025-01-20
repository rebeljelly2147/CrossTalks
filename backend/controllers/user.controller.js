export const getUsersFromSidebar = async (req, res) => {
    try {
        const loggedInUserId = req.user._id;
    } catch (error) {
        console.error("Error in getUsersFromSidebar controller : ",error.message);  
        res.status(500).json({message: "Internal Server Error During Getting Users From Sidebar"});
    }
};