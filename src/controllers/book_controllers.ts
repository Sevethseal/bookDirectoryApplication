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
};
