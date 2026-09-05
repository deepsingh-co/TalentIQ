import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        profileImage: {
            type: String,
            default: "",
        },
        clearkId: {
            type: String,
            required: true,
        },
    },
    { timestamps: true } // createdAt and updatedAt fields will be automatically added to the schema
);

const User = mongoose.model("User", userSchema);

export default User;