import { Component } from '@angular/core';
import { Transaction } from '../transaction';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrl: './transaction.component.scss'
})
export class TransactionComponent {
  transactions: Transaction[] = [];
  constructor() {
    this.transactions.push(new Transaction(1, new Date(), 'Comments 1', 'View'));
  }

  viewDetails(transaction: Transaction) {
    console.log(transaction);
  }
}
