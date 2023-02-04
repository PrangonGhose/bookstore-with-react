export const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/Ze0tRMOWnvW25f5ddSv1/books/';

export const getBooks = async () => {
  const response = await fetch(url);
  let data = await response.json();
  data = Object.entries(data);
  const allBooks = [];
  for (let i = 0; i < data.length; i += 1) {
    const bookId = data[i][0];
    const newBook = {
      bookId,
      bookName: data[i][1][0].title,
      bookAuthor: data[i][1][0].author,
      bookGenre: data[i][1][0].category,
    };
    allBooks.push(newBook);
  }
  return allBooks;
};

export const postBooks = (book) => {
  const bookData = {
    item_id: book.bookId,
    title: book.bookName,
    author: book.bookAuthor,
    category: book.bookGenre,
  };

  const params = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(bookData),
  };

  fetch(url, params)
    .then((response) => response.text())
    .then((data) => data);
};

export const deleteBook = (bookId) => {
  const urlToDelete = `${url}${bookId}`;
  const params = {
    method: 'DELETE',
    header: {
      'Content-Type': 'application/json',
    },
  };
  fetch(urlToDelete, params)
    .then((response) => response.text())
    .then((data) => data);
};
