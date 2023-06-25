const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(fs.readFileSync("./index.html"));
    res.end();
  } else if (req.url === "/about") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(fs.readFileSync("./about.html"));
    res.end();
  } else if (req.url === "/contact-me") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(fs.readFileSync("./contact-me.html"));
    res.end();
  } else {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(fs.readFileSync("./404.html"));
    res.end();
  }
});

server.listen(4000);
