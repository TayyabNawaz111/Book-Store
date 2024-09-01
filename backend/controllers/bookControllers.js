import { Book } from "../models/bookModel.js";
//Add new book

export const addBook = async (req, res) => {
  try {
    console.log(req.body);
    if (!req.body.title || !req.body.author || !req.body.publishYear) {
      return res.status(400).send({ message: "Send all required fields" });
    }

    const newBook = {
      title: req.body.title,
      author: req.body.author,
      publishYear: req.body.publishYear,
    };

    const book = await new Book(newBook);
    const savedBook = await book.save(); // Save the book to the database
    return res.status(201).send(savedBook);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
};

//Get all books

export const getBooks = async (req, res) => {
  try {
    const books = await Book.find({}); // Retrieve all books
    console.log(books);
    return res.status(200).send({
      count: books.length,
      data: books,
    });
  } catch (error) {
    console.log("Error: ", error.message);
    res.status(500).send({ message: error.message });
  }
};

//Get a single book by id

export const getBook = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findById(id); // Retrieve single book
    console.log(book);
    if (!book) return res.status(404).send({ message: "Book not found" });
    return res.status(200).send(book);
  } catch (error) {
    console.log("Error: ", error.message);
    res.status(500).send({ message: error.message });
  }
};

//Update a book

export const updateBook = async (req, res) => {
  try {
    if (!req.body.title || !req.body.author || !req.body.publishYear) {
      return res.status(400).send({ message: "Send all required fields" });
    }
    const { id } = req.params;
    const result = await Book.findByIdAndUpdate(id, req.body);
    if (!result) {
      return res.status(404).send({ message: "Book not found" });
    }
    return res.status(200).send({ message: "Book updated successfully" });
  } catch (error) {
    console.log("Error: ", error.message);
    res.status(500).send(error.message);
  }
};

//Delete a book
export const deleteBook = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Book.findByIdAndDelete(id);

    if (!result) {
      return res.status(404).send({ message: "Book not found" });
    }
    return res.status(200).send({ message: "Book deleted successfully" });
  } catch (error) {
    console.log("Error: ", error.message);
    res.status(500).send(error.message);
  }
};
