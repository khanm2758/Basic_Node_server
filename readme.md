# Simple Node.js Web Server

> A minimalist web server created using the core `http` module in Node.js. This project demonstrates how to handle basic HTTP requests and route them to different responses based on the URL, without using any external frameworks.

The server listens on **port 3000** and handles two primary routes:

- `/` ➡️ Responds with "Home page".
- `/about` ➡️ Responds with "About page".

## 🚀 How to Run

### Prerequisites

You must have **Node.js** installed on your system. You can verify this by running `node -v` in your terminal.

### Instructions

1.  **Save the Code:** Save the code below into a file named `server.js`.
2.  **Start the Server:** Open your terminal, navigate to the file's location, and run the command:

    ```
    node server.js

    ```

    You should see the message: `Server is running on http://localhost:3000`

3.  **Access in Browser:** Open your web browser and visit `http://localhost:3000`.

## 💻 The Code

Here is the complete, commented source code for the server.

```
// Import the built-in http module
const http = require("http");

// Create the server and define the request listener
const server = http.createServer(function (req, res) {
  // Handle routing based on the request URL
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Home page");
  } else if (req.url === "/about") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("About page");
  } else {
    // Handle any other routes with a 404 Not Found error
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404 Page Not Found");
  }
});

// Define the port the server will listen on
const PORT = 3000;

// Start listening for requests and log a confirmation message
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

```
