import mongoose from 'mongoose'

const Schema = mongoose.Schema

const userSchema = new Schema({
  email: {
    type: String,
    require: true
  },
  password: {
    type: String,
    require: true
  }
})

//Create model
export const User = mongoose.model('User', userSchema)
