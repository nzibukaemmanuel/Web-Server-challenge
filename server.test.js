const test = require("node:test");
const assert = require("node:assert");
const http = require("http");
const { server, MESSAGE } = require("./server");

test("responds with 200 and the greeting", async () => {
  await new Promise((r) => server.listen(0, r));
  const { port } = server.address();
  const { status, body } = await new Promise((resolve, reject) => {
    http.get({ port }, (res) => {
      let data = "";
      res.on("data", (c) => (data += c));
      res.on("end", () => resolve({ status: res.statusCode, body: data }));
    }).on("error", reject);
  });
  server.close();
  assert.strictEqual(status, 200);
  assert.strictEqual(body, MESSAGE);
});
