const Transaction = require('../models/transaction');

const transactionController = {
  getAllTransactions: async (req, res) => {
    try {
      // Fetch all transactions and sort them by date in descending order (most recent first)
      const transactions = await Transaction.find({}).sort({ date: -1 });

      res.status(200).json(transactions);
    } catch (error) {
      res.status(500).send(error.message);
    }
  },

  getTransactionById: async (req, res) => {
    const { id } = req.params;
    try {
      // Attempt to find a transaction by ID without filtering by status
      const transaction = await Transaction.findById(id);
  
      if (!transaction) {
        return res.status(404).send(`Transaction with ID: ${id} not found.`);
      }
  
      res.status(200).json(transaction);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
};

module.exports = transactionController;