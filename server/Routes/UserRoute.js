import express from 'express'

import { getUser, updateUser, getAllUsers } from '../Controllers/UserController.js'
import authMiddleWare from '../middleware/AuthMiddleware.js';

const router = express.Router()

// Get for get something
router.get('/:id', getUser)

router.get('/', getAllUsers)

// Put for update
router.put('/:id', updateUser)

// router.delete('/:id', deleteUser)

// For checking the connection
// router.get('/', async(req, res) => {
//     res.send('user route')
// })

export default router