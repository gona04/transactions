//Create routes for transaction
const express = require('express');
const router = express.Router();
const transactionController = require('../controller/transaction-controller');

// GET route for fetching all transactions
router.get('/transactions', transactionController.getAllTransactions);

// GET route for fetching a single transaction by ID
router.post('/transactions/:id', transactionController.updateTransaction);

module.exports = router;