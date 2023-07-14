const express = require("express");
const app = express();
const calcRouter = require("./routes/calc");
const primeNumber = require("./routes/prime");
const biggerNumber = require("./routes/biggerNumber");
const stringRouter = require("./routes/string");
const numberRouter = require("./routes/number");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const port = 3000;

app.use("/v1/", calcRouter);
app.use("/v1/", primeNumber);
app.use("/v1/", biggerNumber);
app.use("/v1/", stringRouter);
app.use("/v1/", numberRouter);
app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
