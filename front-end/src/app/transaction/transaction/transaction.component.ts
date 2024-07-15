import { Component, EventEmitter, Output } from '@angular/core';
import { Transaction } from '../model/transaction';
import { TransactionService } from '../services/services.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrl: './transaction.component.scss'
})
export class TransactionComponent {
  @Output() viewDetailsEvent = new EventEmitter<any>();
  transactions: Transaction[] = [];

  constructor(private transactionService: TransactionService) { }

  ngOnInit(): void {
   this.callGetTransactions();
  }

  callGetTransactions() {
    this.transactionService.getTransactions().subscribe((data: any) => {
      this.transactions = data;
    }, error => {
      console.error('Error fetching transactions:', error);
    });
  }
  viewDetails(transaction: any) {
    this.viewDetailsEvent.emit(transaction);
  }
}
