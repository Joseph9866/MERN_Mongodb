// insert_books.js

db.books.insertMany([
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    genre: "Technology",
    published_year: 1999,
    price: 45.99,
    in_stock: true,
    pages: 352,
    publisher: "Addison-Wesley"
  },
  {
    title: "Clean Code",
    author: "Robert C. Martin",
    genre: "Technology",
    published_year: 2008,
    price: 39.99,
    in_stock: true,
    pages: 464,
    publisher: "Prentice Hall"
  },
  {
    title: "1984",
    author: "George Orwell",
    genre: "Fiction",
    published_year: 1949,
    price: 19.99,
    in_stock: false,
    pages: 328,
    publisher: "Secker & Warburg"
  },
  // Add 7 more book objects with diverse data...
])
