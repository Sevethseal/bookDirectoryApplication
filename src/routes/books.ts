import { Router } from "express";
import bookController from "../controllers/book_controllers";
import { commonValidator } from "../middleware/common-request";
import bookValidations from "../middleware/book";

const bookRoutes = {
  getBooks: "/books",
};

const bookRouter = Router();
bookRouter.get(bookRoutes.getBooks, bookController.getBooks);
bookRouter.post(
  bookRoutes.getBooks,
  bookValidations.validateCreateBookRequest(),
  commonValidator(),
  bookController.createBook
);

export default bookRouter;
