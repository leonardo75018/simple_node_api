import express from 'express'
import { UserController } from '../controllers/index'
import { AdminMiddleware } from '../middleware'
import { verifyToken } from '../middleware/verifyToken'

const UserRoutes = express.Router()

const userController = new UserController()

UserRoutes.get('/', AdminMiddleware, userController.getUsers)
UserRoutes.get('/profil', verifyToken, userController.profil)

UserRoutes.post('/', AdminMiddleware, userController.createUser)

export default UserRoutes
