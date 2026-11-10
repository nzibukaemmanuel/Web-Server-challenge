# My First Node.js Server

A basic backend service built with Node's native `http` module. It replies to every
request with HTTP 200 and `Hello, this is my first Node.js server!`.

## Requirements
Node.js 18+ (`node -v`).

## Run
```bash
npm start
```
Then open http://localhost:3000. Set `PORT` to use a different port.

## Test
```bash
npm test
```

## Files
- `server.js` – the server (handler exported for testing)
- `server.test.js` – test using `node:test`
