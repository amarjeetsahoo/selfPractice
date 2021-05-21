const http = require("http");
const url = require("url");

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    var search = url.parse(req.url, true).query;
    var txt = search.year + " " + search.name;
    res.end(txt);
}).listen(8000);

// http://localhost:8000/?year=2017&name=Amarjeet - - as input