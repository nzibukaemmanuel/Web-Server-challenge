const http = require("http");

const PORT = process.env.PORT || 3000;
const MESSAGE = "Hello, this is my first Node.js server!";

function handleRequest(req, res) {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end(MESSAGE);
}

const server = http.createServer(handleRequest);

if (require.main === module) {
  server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
  });
}

module.exports = { server, handleRequest, MESSAGE };
