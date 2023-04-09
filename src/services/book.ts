import {
  createBook,
  deleteBook,
  getAllBookList,
  updateBook,
} from "../db/dao/book";
import { BookDetail, CreateBookRequestBody } from "../types/book";

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
  updateBook: async (bookDetailObject: BookDetail) => {
    const temp = await updateBook(bookDetailObject);
    console.log(temp);
  },
  deleteBook: async (bookId: string) => {
    const temp = await deleteBook(bookId);
    console.log(temp);
  },
};
