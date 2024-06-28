import { Request, Response, NextFunction } from 'express'

export const AdminMiddleware = (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  next()
}
