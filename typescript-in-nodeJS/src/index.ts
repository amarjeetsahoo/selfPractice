import express from 'express';
const app = express();

app.get('/', (req, res) => {
    res.send("<h1>Hello I'm TypeScript!</h1>").status(200);
});

app.listen(5000, () => {
    console.log("HelloWorld!");
});