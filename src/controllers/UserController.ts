import { Request, Response } from 'express'
import { User } from '../model/User'
import jwt from 'jsonwebtoken'
import { hash, compare } from 'bcryptjs'

export class UserController {
  async getUsers(req: Request, res: Response) {
    const users = await User.find()
    res.send(users)
  }

  async createUser(req: Request, res: Response) {
    const { email, password } = req.body

    const passwordHashed = await hash(password, 10)

    const user = await User.create({
      email: email,
      password: passwordHashed
    })

    const token: string = jwt.sign(
      {
        id: user._id
      },
      process.env.JWT_SECRET || 'tokentest'
    )

    res.header('auth-token', token).json((user.password = undefined))
  }

  async login(req: Request, res: Response) {
    const { email, password } = req.body
    const user = await User.findOne({
      email: email
    })

    if (!user) {
      throw new Error('Icorrect password ou email')
    }

    const correctPassword = await compare(password, user?.password as string)
    if (!correctPassword) {
      throw new Error("Icorrect password ou email'")
    }

    const token = jwt.sign(
      { id: user.id },
      process.env.JWT_SECRET || 'token_jwt',
      {
        expiresIn: 60 * 60 * 24
      }
    )

    res.header('auth-token', token).json(user)
  }

  async profil(req: Request, res: Response) {
    const user = await User.findById(req.userId)

    if (!user) {
      throw new Error('User not found')
    }

    res.status(200).send(user)
  }
}
