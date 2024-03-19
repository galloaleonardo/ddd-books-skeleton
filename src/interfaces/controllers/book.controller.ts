import { Request, Response } from "express";
import { BookService } from "../../app/services/book.service";

export class BookController {
  constructor(private bookService: BookService) {}

  async addAuthor(req: Request, res: Response): Promise<void> {
    const { isbnNumber, authorName, authorBio, authorPicture } = req.body;

    try {
      await this.bookService.addAuthor(
        isbnNumber,
        authorName,
        authorBio,
        authorPicture
      );

      res.status(201).send();
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  }
}