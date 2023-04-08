import { createBook, getAllBookList } from "../db/dao/book";
import { CreateBookRequestBody } from "../types/book";

export default {
  getBooksList: async () => {
    const bookList = await getAllBookList();
    console.log(bookList);
    return bookList;
  },
  createBook: async (bookDetailObject: CreateBookRequestBody) => {
    const bookId = await createBook(bookDetailObject);
    console.log(bookId);
    return bookId;
  },
};
