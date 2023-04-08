import { Request } from "express";
export interface CreateBookRequestBody {
  title: string;
  highlight: string[];
  author: string;
  bookCoverImageUrl: string;
}

export interface CreateBookRequest extends Request {
  body: CreateBookRequestBody;
}
