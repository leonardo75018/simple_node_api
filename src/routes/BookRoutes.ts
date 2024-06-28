import express from 'express'
import { BookController } from '../controllers/index'

const BookRoutes = express.Router()

const bookController = new BookController()

BookRoutes.get('/', bookController.getBooks)

export default BookRoutes
