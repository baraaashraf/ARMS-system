import express from "express";

const port = process.env.PORT || 5000;

const app = express();

app.get("/", (req, res, next) => {
  res.json("server is ready");
});

app.listen(port, () => {
  console.log(`Server is listening to port ${port}`);
});
