import { Router } from "express";
import bookController from "../controllers/book_controllers";
import { commonValidator } from "../middleware/common-request";
import bookValidations from "../middleware/book";
import { catchErrors } from "../handlers/error_handler";

const bookRoutes = {
  getBooks: "/books",
  createBook: "/book",
  updateBook: "/book/:bookId",
  deleteBook: "/book/:bookId",
};

const bookRouter = Router();

bookRouter.get(bookRoutes.getBooks, bookController.getBooks);

bookRouter.post(
  bookRoutes.createBook,
  bookValidations.validateCreateBookRequest(),
  commonValidator(),
  catchErrors(bookController.createBook)
);

bookRouter.put(
  bookRoutes.updateBook,
  bookValidations.validateCreateBookRequest(),
  commonValidator(),
  catchErrors(bookController.updateBook)
);

bookRouter.delete(
  bookRoutes.deleteBook,
  catchErrors(bookController.deleteBook)
);

export default bookRouter;
