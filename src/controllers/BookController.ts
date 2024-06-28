import { Request, Response } from 'express'

export class BookController {
  getBooks(req: Request, res: Response) {
    res.send('books routes')
  }
}
