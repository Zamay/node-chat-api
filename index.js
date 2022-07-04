const express = require('express');
const mongoose = require('mongoose');
const authRouter = require("./routes/auth-routes")
const msgRouter = require("./routes/message-routes")
require('dotenv').config();

const app = express();

mongoose
  .connect(process.env.MONGO_URL, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => console.log('Connected to DB'))
  .catch((error) => console.log(error));

app.listen(process.env.PORT, (error) => {
  error ? console.log(error) : console.log(`listening port ${process.env.PORT}`);
});

app.use(express.urlencoded({extended: false}));

app.use('/api/users', authRouter);
app.use('/api/msg', msgRouter);
