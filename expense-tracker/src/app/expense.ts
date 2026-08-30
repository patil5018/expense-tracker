import { Injectable } from '@angular/core';
import { Transaction } from './transaction';

@Injectable({
  providedIn: 'root',
})
export class Expense {
    transactions: Transaction[] = [];
    addTransaction(transaction: any) {
      this.transactions.push(transaction);
    }
}
