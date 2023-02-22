import mongoose from "mongoose";

const UserSchema = mongoose.Schema(
    {
        username: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        // role: {
        //     type: String,
        //     required: true
        // },
        password: {
            type: String,
            required: true
        },
        role: String,
        role2: String,
        role3: String,
        role4: String,
        role5: String,
        role6: String,
        role7: String,
        profilePicture: String,
    },
    { timestamps: true }
)

const UserModel = mongoose.model("Users", UserSchema)
export default UserModel