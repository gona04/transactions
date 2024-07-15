const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const transactionSchema = new Schema({
    id: {
        type: String,
        required: true
    },
    date: {
        type: Number, // Changed from Date to Number to store timestamps
        required: true
    },
    sender: {
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        accountNumber: {
            type: String,
            required: true
        },
        bank: {
            type: String,
            required: true
        }
    },
    recipient: {
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        accountNumber: {
            type: String,
            required: true
        },
        bank: {
            type: String,
            required: true
        }
    },
    amount: {
        type: Number, // Changed from Int32 as Mongoose uses Number
        required: true
    },
    currencyCd: {
        type: String,
        required: true
    },
    comments: {
        type: String,
        required: false // Assuming comments might not be required
    },
    status: {
        type: String,
        required: true
    }
});

const Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction;