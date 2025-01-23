import Conversation from "../models/conversation.model.js"; // .js is mandatory for proper working of ES6 modules
import Message from "../models/message.model.js"; // Add this line

export const sendMessage = async (req, res) => {
    // res.send('Send Message Route');
    // console.log('Message sent by userId', req.params.id);
    try {
        const {message} = req.body;
        const {id: recieverId} = req.params;
        const senderId = req.user._id; // because we used protectRoute middleware in the route
        // console.log('Message sent by userId', senderId);

        let conversation = await Conversation.findOne({
            participants: {$all: [senderId, recieverId]} // participants array contains senderId and recieverId $all is used to check if both are present
        }); // this will find the conversation between sender and reciever

        if(!conversation) {
            conversation = await Conversation.create({
                participants: [senderId, recieverId]
            });
        }; // this will create a new conversation if it does not exist

        const newMessage = new Message({
                senderId, //: senderId,
                recieverId, //: recieverId,
                message
            }// this will create a new message    
        );

        
        if(newMessage){
            conversation.messages.push(newMessage._id);
        }// this will push the new message to the conversation messages array
        
        await Promise.all([newMessage.save(), conversation.save()]); // Save operations in parallel

        res.status(201).json({newMessage, conversation}); // this will send the new message and the conversation as response

    } catch (error) {
        console.log("Error in sendMessages controller : ",error.message);
        res.status(500).json({message: "Internal Server Error During Sending Message"});  
    }
};

export const getMessages = async (req, res) => {
    try {
        const {id: userToChatId} = req.params;
        const senderId = req.user._id; // because we used protectRoute middleware in the route
        const conversation = await Conversation.findOne({
            participants: {$all: [senderId, userToChatId]}
        }).populate("messages"); // this will find the conversation between sender and reciever and populate the messages array

        if(!conversation) {
            return res.status(404).json({message: "No Messages Found"});
        } // if no conversation is found then it will send a 404 status code with message

        res.status(200).json(conversation.messages); // this will send the messages array as response

    } catch (error) {
        console.log("Error in getMessages controller : ",error.message);
        res.status(500).json({message: "Internal Server Error During Getting Messages"});  
        
    }
};