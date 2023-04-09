import { BookDetail, CreateBookRequestBody } from "../../types/book";
import {
  createBookQuery,
  getAllBooksListQuery,
  updateBookQuery,
  deleteBookQuery,
} from "../constant";
import queryHandler from "../queries";

export const getAllBookList = async () => {
  return (await queryHandler(getAllBooksListQuery)).rows;
};

export const createBook = async (bookDetailObject: CreateBookRequestBody) => {
  const { title, highlight, author, bookCoverImageUrl } = bookDetailObject;
  return (
    await queryHandler(createBookQuery, [
      title,
      highlight,
      author,
      bookCoverImageUrl,
    ])
  ).rows;
};
export const updateBook = async (bookDetailObject: BookDetail) => {
  const { title, highlight, author, bookCoverImageUrl, bookId } =
    bookDetailObject;
  return (
    await queryHandler(updateBookQuery, [
      title,
      highlight,
      author,
      bookCoverImageUrl,
      bookId,
    ])
  ).rows;
};

export const deleteBook = async (bookId: string) => {
  return (await queryHandler(deleteBookQuery, [bookId])).rows;
};
