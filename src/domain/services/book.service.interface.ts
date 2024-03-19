export interface IBookService {
  addAuthor(
    isbnNumber: string,
    authorName: string,
    authorBio: string,
    authorPicture: string
  ): Promise<void>;
}