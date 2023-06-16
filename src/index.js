const express = require("express");
const app = express();
const calcRouter = require('./routes/calc')
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const port = 3000;

app.use('/v1/', calcRouter);
app.get('/',(req, res) => {res.send('Hello world!')})

app.listen(port,()=>{
    console.log(`listening on port ${port}`);
})