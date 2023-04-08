export const getAllBooksListQuery = "SELECT * FROM books";
export const createBookQuery =
  "INSERT INTO books (title, highlight,author,book_cover_image_url) VALUES ($1,$2,$3,$4) RETURNING book_id";
