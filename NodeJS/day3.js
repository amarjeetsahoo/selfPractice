const { write } = require("fs");
const http = require("http");

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end("Server Created "+req.url);
}).listen(8000);