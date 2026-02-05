import http from 'node:http';
import fs from 'node:fs';

const server = http.createServer();

function servePage(url, response) {
    response.writeHead(200, { 'Content-Type': 'text/html' });
    fs.readFile(url, 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    response.end(data);
    });
}

server.on('request', (request, res) => {
    if (request.url === "/") {
        servePage("./index.html", res);
    } else if (request.url === "/about") {
        servePage("./about.html", res);
    } else if (request.url === "/contact-me") {
        servePage("./contact-me.html", res);
    } else {
        servePage("./404.html", res);
    }
});

server.listen("8080", 'localhost');

