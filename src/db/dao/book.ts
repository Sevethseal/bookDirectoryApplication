import { CreateBookRequestBody } from "../../types/book";
import { createBookQuery, getAllBooksListQuery } from "../constant";
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
