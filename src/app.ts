import mongoose from 'mongoose'

import express, { Application } from 'express'
import morgan from 'morgan'
import router from './routes'
import { ErrorMiddleware } from './middleware'
import { CreateUserService } from './services/createUserService'

const app: Application = express()

const uri = `mongodb+srv://${process.env.UTILISATEUR}:${process.env.PASSWORD}@cluster0.vvrfh99.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority&appName=Cluster0`

mongoose
  .connect(uri)
  .then(() => console.log('connexion is ok '))
  .catch(error => {
    console.log(error)
  })

app.use(express.json())
app.use(morgan('dev'))
app.use(router)

app.use(ErrorMiddleware)

export default app
