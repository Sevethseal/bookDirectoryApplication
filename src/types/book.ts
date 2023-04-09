import { Request } from "express";

export interface BookDetail {
  bookId?: string;
  title: string;
  highlight: string[];
  author: string;
  bookCoverImageUrl: string;
}
export type CreateBookRequestBody = Omit<BookDetail, "bookId">;

export interface CreateBookRequest extends Request {
  body: CreateBookRequestBody;
}
