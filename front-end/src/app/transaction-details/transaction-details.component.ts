import { Component } from '@angular/core';
import { Transaction } from '../transaction/transaction';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-transaction-details',
  templateUrl: './transaction-details.component.html',
  styleUrl: './transaction-details.component.scss'
})
export class TransactionDetailsComponent {
  transaction: Transaction = new Transaction();

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap?.get('id') || 0;
    this.fetchTransaction(id);
  }

  fetchTransaction(id: any) {
      this.transaction = new Transaction(Number(id), new Date(), 'Sample Comments', 'Sample Action');
    }
}
