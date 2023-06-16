const express = require("express");
const app = express();
const calcRouter = require("./routes/calc");
const primeNumber = require("./routes/prime");
const biggerNumber = require("./routes/biggerNumber");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const port = 3000;

app.use("/v1/", calcRouter);
app.use("/v1/", primeNumber);
app.use("/v1/", biggerNumber);
app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
