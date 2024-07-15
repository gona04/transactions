import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Transaction } from '../model/transaction';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  private apiUrl = 'http://localhost:3000/api/transactions';

  constructor(private http: HttpClient) { }

  getTransactions(): Observable<Transaction[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      map(transactions => transactions.filter(transaction => 
        transaction.status !== 'COMPLETED' && 
        transaction.status !== 'REJECTED' && 
        transaction.status !== 'IN PROGRESS'
      )),
      map(transactions => transactions.map(transaction => {
        // Assuming `transaction.date` is the field storing the date as a number
        if (transaction.date) {
          transaction.date = new Date(transaction.date);
        }
        return transaction;
      }))
    );
  }

  updateTransaction(id: string, transactionData: any) {
    return this.http.patch(`${this.apiUrl}/${id}`, transactionData);
  }
}