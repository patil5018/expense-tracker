import { Injectable } from '@angular/core';
import { Transaction } from './transaction';

@Injectable({
  providedIn: 'root',
})
export class Expense {
    transactions: Transaction[] = [];

    addTransaction(transaction: Transaction) {
      this.transactions.push(transaction);
    }

  deleteTransaction(transaction: Transaction) {
      const index= this.transactions.indexOf(transaction);

      if(index!==-1) {
        this.transactions.splice(index,1);
      }
  }
}
