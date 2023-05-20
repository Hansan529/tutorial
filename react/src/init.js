import express from "express";

const app = express();

const PORT = 6000;

app.set("views", process.cwd() + "/src/views");
app.get("/", (req, res) => {
  res.sendFile(process.cwd() + "/src/views/index.html");
});

app.listen(`${PORT}`, () => {
  console.log("https://react-movie.hxan.net");
});
