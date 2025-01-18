export const sendMessage = async (req, res) => {
    // res.send('Send Message Route');
    // console.log('Message sent by userId', req.params.id);
    try {
        const {id: recieverId} = req.params;
        const {message} = req.body;
        const senderId = req.user._id;
    } catch (error) {
        console.log("Error in sendMessages controller : ",error.message);
        res.status(500).json({message: "Internal Server Error During Sending Message"});  
    }
}