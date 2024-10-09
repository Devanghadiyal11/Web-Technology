const express = require("express");
const fs = require("fs");
const app = express();
const hostname = "127.0.0.1";
const port = 3000;

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.get("/home", (req, res) => {
  res.send("home page");
});
app.get("/help", (req, res) => {
  res.send("help page");
});

app.get("/contact", (req, res) => {
  res.send(" contact page");
});

app.get("/like", (req, res) => {
  res.send("like page");
});

app.get("/about", (req, res) => {
  res.send("about page");
});

app.get("/home.txt", (req, res) => {
  const data = fs.readFileSync("home.txt");
  res.end(data.toString());
});

app.get("/about.txt", (req, res) => {
  const data = fs.readFileSync("about.txt");
  res.end(data.toString());
});
app.get("/help.txt", (req, res) => {
  const data = fs.readFileSync("help.txt");
  res.end(data.toString());
});
app.get("/contact.txt", (req, res) => {
  const data = fs.readFileSync("contact.txt");
  res.end(data.toString());
});
app.get("/like.txt", (req, res) => {
  const data = fs.readFileSync("like.txt");
  res.end(data.toString());
});

app.listen(port, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
