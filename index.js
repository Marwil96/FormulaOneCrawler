const express = require("express");
var crawler = require("./crawler.js");
const app = express();
// var bodyParser = require("body-parser");
// var cors = require("cors");
// const port = process.env.PORT || 5000;
const port = 9000;

// app.use(cors());
// app.use(require("body-parser").text());
// app.use(bodyParser.json());
// app.use(bodyParser.json({ limit: '50mb' }))

app.use(crawler);
app.get("/api/crawl", (req, res) => res.send(`Hello World!`));

app.listen(port, () => console.log(`Listening on port ${port}`));
