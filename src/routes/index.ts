import express from 'express'
import BookRoutes from './BookRoutes'
import UserRoutes from './UserRoutes'
import { UserController } from '../controllers/UserController'

const userController = new UserController()
const router = express.Router()

router.post('/login', userController.login)
router.use('/users', UserRoutes)
router.use('/books', BookRoutes)

export default router
