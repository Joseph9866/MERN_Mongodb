// queries.js

// Find all books in a specific genre
db.books.find({ genre: "Technology" })

// Find books published after a certain year
db.books.find({ published_year: { $gt: 2010 } })

// Find books by a specific author
db.books.find({ author: "George Orwell" })

// Update the price of a specific book
db.books.updateOne({ title: "1984" }, { $set: { price: 21.99 } })

// Delete a book by its title
db.books.deleteOne({ title: "Clean Code" })

// Advanced: In stock & published after 2010
db.books.find({ in_stock: true, published_year: { $gt: 2010 } })

// Projection: return title, author, price
db.books.find({}, { title: 1, author: 1, price: 1, _id: 0 })

// Sort by price ascending
db.books.find().sort({ price: 1 })

// Sort by price descending
db.books.find().sort({ price: -1 })

// Pagination: skip + limit
db.books.find().skip(0).limit(5) // Page 1
db.books.find().skip(5).limit(5) // Page 2

// Aggregation: average price by genre
db.books.aggregate([
  { $group: { _id: "$genre", avgPrice: { $avg: "$price" } } }
])

// Aggregation: author with most books
db.books.aggregate([
  { $group: { _id: "$author", count: { $sum: 1 } } },
  { $sort: { count: -1 } },
  { $limit: 1 }
])

// Aggregation: group by decade
db.books.aggregate([
  {
    $group: {
      _id: { $subtract: ["$published_year", { $mod: ["$published_year", 10] }] },
      count: { $sum: 1 }
    }
  }
])

// Indexing
db.books.createIndex({ title: 1 })
db.books.createIndex({ author: 1, published_year: 1 })

// Explain index use
db.books.find({ title: "1984" }).explain("executionStats")
