const express = require('express');
const app = express();
const port = 3000;
const transactionRoutes = require('./routes/transaction-routes');
const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://admin:testing123@cluster0.3gjfa.mongodb.net/transactions"
  )
  .then((data) => {
    // console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

// Built-in middleware for parsing JSON. This replaces body-parser for Express 4.16.0 and higher.
app.use(express.json());

// CORS Middleware
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PATCH, DELETE, OPTIONS'
  );
  next();
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/api', transactionRoutes);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});