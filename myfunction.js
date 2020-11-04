const http = require("http");
const dt = require("./myDateFunction");

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-type': 'text/html' });
    res.write("<h1>The Current Date is: </h1>" + dt.myDateFuntion());
    res.end();
}).listen(8000);