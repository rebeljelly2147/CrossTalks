import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
    senderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    recieverId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    message: { 
        type: String,
        required: true,
    },
},{timestamps: true}); // createdAt and updatedAt fields will be added automatically

const Message = mongoose.model("Message", messageSchema);

export default Message;