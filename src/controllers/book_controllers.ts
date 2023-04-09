import { Response, Request } from "express";
import book from "../services/book";
import { CreateBookRequest } from "../types/book";
import { setResponse } from "../utils/responseHandler";
export default {
  getBooks: async (req: Request, res: Response) => {
    const bookList = await book.getBooksList();
    setResponse(200, res, bookList);
  },
  createBook: async (req: CreateBookRequest, res: Response) => {
    const { body } = req;
    console.log(req);
    const bookId = await book.createBook(body);
    res.send(bookId);
  },
  updateBook: async (req: CreateBookRequest, res: Response) => {
    const { path, body } = req;
    const bookId = path.split("/").pop();
    const updateBookObject = {
      bookId,
      ...body,
    };
    await book.updateBook(updateBookObject);
    setResponse(200, res, {});
  },
  deleteBook: async (req: Request, res: Response) => {
    const { path } = req;
    const bookId = path.split("/").pop() as string;
    await book.deleteBook(bookId);
    setResponse(202, res, {});
  },
};
