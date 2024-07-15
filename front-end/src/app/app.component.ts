import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  selectedTransaction: any;

handleViewDetails(transaction: any) {
  this.selectedTransaction = transaction;
}
}
