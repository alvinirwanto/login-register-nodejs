import UserModel from "../Models/userModel.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

//Get all users
export const getAllUsers = async (req, res) => {
    try {
        let users = await UserModel.find()

        users = users.map((user) => {
            const { password, ...otherDetails } = user._doc
            return otherDetails
        })
        res.status(200).json(users)
    } catch (error) {
        res.status(500).json(error)
    }
}

// Get a user
export const getUser = async (req, res) => {
    // Fetch the id from the request
    const id = req.params.id

    try {
        //Check the user in the database
        const user = await UserModel.findById(id)

        if (user) {

            // This is for sending the data EXCEPT the password
            const { password, ...otherDetails } = user._doc
            res.status(200).json(otherDetails)
        } else {
            res.status(404).json("No such user exist")
        }

    } catch (error) {
        // res.status(500).json(error)
        res.status(500).json("No such user exist")
    }

}


// Update a user
export const updateUser = async (req, res) => {
    const id = req.params.id

    const { _id, password } = req.body

    if (id === _id) {
        try {
            if (password) {
                const salt = await bcrypt.genSalt(10)
                req.body.password = await bcrypt.hash(password, salt)
            }

            const user = await UserModel.findByIdAndUpdate(id, req.body, { new: true })

            const token = jwt.sign(
                { email: user.email, id: user._id },
                process.env.JWT_KEY, { expiresIn: '1h' }
            )

            res.status(200).json({ user, token })
        } catch (error) {
            res.status(500).json(error)
        }
    }
    else {
        res.status(403).json("Access Denied! You can only update your own profile")
    }
}

// Delete user
// export const deleteUser = async (req, res) => {
//     const id = req.params.id
//     const { currentUserId, currentUserAdminStatus } = req.body

//     if (currentUserId === id || currentUserAdminStatus) {
//         try {
//             await UserModel.findByIdAndDelete(id)
//             res.status(200).json("User deleted successfully")
//         } catch (error) {
//             res.status(500).json(error)
//         }
//     }
//     else {
//         res.status(403).json("Access Denied! You can only delete your own profile")
//     }
// }