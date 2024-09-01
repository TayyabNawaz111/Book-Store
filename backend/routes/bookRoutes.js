import express from "express";
import { addBook, deleteBook, getBook, getBooks, updateBook } from "../controllers/bookControllers.js";
 const router = express.Router()
 
 
 //ROUTE for new book
 router.post("/", addBook);
 //ROUTE to get all books
 router.get("/", getBooks);
 //ROUTE to get single book
 router.get("/:id",getBook)
 //ROUTE to update a book
 router.put("/:id",updateBook)
 //ROUTE to delete a book
 router.delete("/:id",deleteBook)
export default router;