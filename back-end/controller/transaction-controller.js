const Transaction = require('../models/transaction');

const transactionController = {
  getAllTransactions: async (req, res) => {
    try {
      // Fetch transactions that are either COMPLETED, IN PROGRESS, or REJECTED
      // and sort them by date in descending order (most recent first)
      const transactions = await Transaction.find({
        status: { $in: ['COMPLETED', 'IN PROGRESS', 'REJECTED'] }
      }).sort({ date: -1 });

      res.status(200).json(transactions);
    } catch (error) {
      res.status(500).send(error.message);
    }
  },

  getTransactionById: async (req, res) => {
    const { id } = req.params;
    try {
      // Attempt to find a transaction by ID that also matches one of the specified statuses
      const transaction = await Transaction.findOne({
        _id: id,
        status: { $in: ['COMPLETED', 'IN PROGRESS', 'REJECTED'] }
      });
  
      if (!transaction) {
        return res.status(404).send(`Transaction with ID: ${id} not found or status not matching.`);
      }
  
      res.status(200).json(transaction);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
};

module.exports = transactionController;