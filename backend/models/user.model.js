import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        minlenght: 6,
    },
    // confirmPassword: we don't need this field in the database
    gender: {
        type: String,
        required: true,
        enum: ["male", "female"], // enum is used to restrict the values that can be stored in the field
    },
    profilePic: {
        type: String,
        default: "",// default value is an empty string
    }
},{timestamps: true}); // timestamps are used to store the time when the document was created and updated      
// also used for "member since" field in the frontend
const User = mongoose.model("User", userSchema);
export default User; 
