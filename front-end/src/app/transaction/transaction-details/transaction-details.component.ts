import { Component, Input, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { TransactionService } from '../services/services.service';

@Component({
  selector: 'app-transaction-details',
  templateUrl: './transaction-details.component.html',
  styleUrls: ['./transaction-details.component.scss']
})
export class TransactionDetailsComponent implements OnInit {
  @Input() transaction: any;
  commentsControl: FormControl = new FormControl();

  constructor(private transactionService: TransactionService) { }

  ngOnInit(): void {
    // Initialize the FormControl with the current transaction comments and validators
    this.commentsControl = new FormControl(this.transaction?.comments, [Validators.required, Validators.pattern('^[a-zA-Z0-9 ]*$')]);

    // Subscribe to changes and update the transaction object
    this.commentsControl.valueChanges.subscribe(value => {
      this.transaction.comments = value;
    });
  }

  onSubmit() {
    // Only proceed if the form control is valid
    if (this.commentsControl.valid) {
      this.transactionService.updateTransaction(this.transaction.id, { comments: this.commentsControl.value }).subscribe({
        next: (updatedTransaction) => {
          console.log('Transaction updated:', updatedTransaction);
          // Handle successful update, e.g., show a success message
        },
        error: (error) => {
          console.error('Error updating transaction:', error);
          // Handle error, e.g., show an error message
        }
      });
    }
  }
}