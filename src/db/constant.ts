export const getAllBooksListQuery = "SELECT * FROM books";
export const createBookQuery =
  "INSERT INTO books (title, highlight,author,book_cover_image_url) VALUES ($1,$2,$3,$4) RETURNING book_id";
export const updateBookQuery =
  "UPDATE books SET title=$1, highlight=$2,author=$3,book_cover_image_url=$4 WHERE book_id=$5";
export const deleteBookQuery = "DELETE FROM books WHERE book_id=$1";
