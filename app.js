// let http = require("http");
// let ourApp = http.createServer(function (req, res) {
//   if (req.url == "/") {
//     res.end("Home page");
//   }
//   if (req.url == "/about") {
//     res.end("About page");
//   }
// });
// ourApp.listen(3000);

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
