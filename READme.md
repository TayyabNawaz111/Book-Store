# Book Store MERN Backend

This is the backend service for a Book Store application, built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. This service handles the backend operations such as managing books, and connects to a MongoDB Atlas database.

## Table of Contents

- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)

## Installation

1. Clone the repository:
   ```bash
git clone https://github.com/yourusername/book-store-mern-backend.git
   ```
   Navigate to the project directory:

```bash
cd book-store-mern-backend
```

Install the required dependencies:

```bash
npm install
```

## Environment Variables

To run this project, you need to set up the following environment variables in a .env file in the root of the project:

MONGODB_URL=your-mongodb-atlas-connection-string
PORT=your-desired-port
MONGODB_URL: The connection string for your MongoDB Atlas cluster.
PORT: The port number on which your server will run.

## Usage

To start the server, use the following command:

```bash
npm run dev
```

If you are using nodemon for development, you can start the server with:

```bash
npx nodemon
```

The server will run on the port specified in the .env file.

## API Endpoints

Get All Books
Endpoint: /books
Method: GET
Description: Retrieves a list of all books in the database.
Response:

```json
[
  {
    "_id": "id",
    "title": "Book Title",
    "author": "Author Name",
    "publishYear": 2020,
    "createdAt": "2024-09-01T00:00:00.000Z",
    "updatedAt": "2024-09-01T00:00:00.000Z"
  }
]
```

Add a New Book
Endpoint: /books
Method: POST
Description: Adds a new book to the database.
Request Body:

```json
{
  "title": "Book Title",
  "author": "Author Name",
  "publishYear": 2020
}
```

Response:

```json
{
  "_id": "id",
  "title": "Book Title",
  "author": "Author Name",
  "publishYear": 2020,
  "createdAt": "2024-09-01T00:00:00.000Z",
  "updatedAt": "2024-09-01T00:00:00.000Z"
}
```

Error Handling
The application uses standard HTTP status codes for error handling:

400 Bad Request: Missing required fields in the request body.
500 Internal Server Error: A server error occurred, check the console for more details.
Contributing
Contributions are welcome! Please fork this repository and submit a pull request for any changes you'd like to make.

## Contact:
m.tayyab33600@gmail.com
