import { Request, Response, NextFunction } from 'express'
import { verify } from 'jsonwebtoken'

interface Ipayload {
  id: string
  iat: number
  exp: number
}

export const verifyToken = (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  /*
    check if have token 
    check if token is valide
  */

  const token = request.header('auth-token')
  if (!token) {
    throw new Error('Token no provide')
  }
  const payload = verify(
    token,
    process.env.JWT_SECRET || 'token_secret'
  ) as Ipayload

  request.userId = payload.id

  next()
}
