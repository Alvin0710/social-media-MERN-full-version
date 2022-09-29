import express from 'express'
import { deleteUser, followUser, unfollowUser, getUser, updateUser } from '../Controllers/UserController.js'

const router = express.Router()

// Get for get something
router.get('/:id', getUser)

// Put for update
router.put('/:id', updateUser)

router.delete('/:id', deleteUser)

router.put('/:id/follow', followUser)

router.put('/:id/unfollow', unfollowUser)

// For checking the connection
// router.get('/', async(req, res) => {
//     res.send('user route')
// })

export default router