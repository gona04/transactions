import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-transaction-details',
  templateUrl: './transaction-details.component.html',
  styleUrl: './transaction-details.component.scss'
})
export class TransactionDetailsComponent {
  @Input() transaction: any;
  commentsControl: FormControl = new FormControl();

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.commentsControl = new FormControl(this.transaction.comments, [Validators.required, Validators.pattern('^[a-zA-Z0-9 ]*$')]);

    // Update the transaction object whenever the comments control value changes
    this.commentsControl.valueChanges.subscribe(value => {
      this.transaction.comments = value;
    });
  }

}
