import { Request, Response, NextFunction } from 'express'

export const ErrorMiddleware = (
  error: Error,
  request: Request,
  response: Response,
  next: NextFunction
) => {
  if (error instanceof Error) {
    return response.status(400).json({
      message: error.message
    })
  }
  return response.status(500).json({
    status: 'error',
    message: `Internal server error - ${error}`
  })
}
