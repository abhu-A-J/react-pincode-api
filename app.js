const express = require("express");
const app = express();
const fs = require("fs");

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.get('/api/data', (req, res) => {

    fs.readFile(__dirname + '/api/data' + ".json", 'utf8', function (err, data) {
        res.send(data);
        res.end(data);
    });

});

app.listen(process.env.PORT || 5000, () => {
    console.log("Server started");
});