import { Author } from "../../domain/entities/author.entity";
import { IBookRepository } from "../../domain/repositories/book.repository.interface";
import { IBookService } from "../../domain/services/book.service.interface";
import { Isbn } from "../../domain/value-objects/isbn.vo";

export class BookService implements IBookService{
    constructor(private bookRepository: IBookRepository) {}

    async addAuthor(
      isbnNumber: string,
      authorName: string,
      authorBio: string,
      authorPicture: string
    ): Promise<void> {
      const isbn = new Isbn(isbnNumber);

      const book = await this.bookRepository.findByIsbn(isbn);

      if (!book) {
        throw new Error(`Book not found. ISBN: ${isbn.value}`);
      }

      const author = new Author(authorName, authorPicture, authorBio, [book]);

      book.addAuthor(author);

      this.bookRepository.save(book);
    }
}