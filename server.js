const http = require("http");

const PORT = process.env.PORT || 3000;
const MESSAGE = "Hello, this is my first Node.js server!";

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end(MESSAGE);
});

server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
