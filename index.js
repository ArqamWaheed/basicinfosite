import fs from 'node:fs';
import express from 'express';

const app = express();
const PORT = 8080;

function servePage(url, response) {
    fs.readFile(url, 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    response.send(data);
    });
}

app.get("/", (req, res) => servePage("./index.html", res));
app.get("/about", (req, res) => servePage("./about.html", res));
app.get("/contact-me", (req, res) => servePage("./contact-me.html", res));
app.use((req, res, next) => {
    res.status(404);
    servePage("./404.html", res)
});

app.listen(PORT, (error) => {
    if (error) throw error;
    console.log("Server started on PORT: ", PORT);
})

