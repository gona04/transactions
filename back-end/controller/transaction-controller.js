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

  updateTransaction: async (req, res) => {
    const { id } = req.params;
    const updateData = req.body;
  
    try {
      // Find the transaction by ID and update it with the data provided in the request body
      // { new: true } option returns the document after update was applied
      const updatedTransaction = await Transaction.findByIdAndUpdate(id, updateData, { new: true });
  
      if (!updatedTransaction) {
        return res.status(404).send(`Transaction with ID: ${id} not found.`);
      }
  
      res.status(200).json(updatedTransaction);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
};

module.exports = transactionController;