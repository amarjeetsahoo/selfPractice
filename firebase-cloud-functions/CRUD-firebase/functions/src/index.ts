import * as functions from "firebase-functions";
import * as express from "express";
import { addEntry, deleteEntry, getAllEntries, getEntryById, updateEntry } from "./controllers/entries";

const app = express();

app.get('/', (req, res) => {
    res.send('Hello!').status(200);
});

app.post('/entries', addEntry);
app.get('/entries', getAllEntries);
app.get('/entries/:entryId', getEntryById);
app.patch('/entries/:entryId', updateEntry);
app.delete('/entries/:entryId', deleteEntry);


exports.app = functions.https.onRequest(app);
