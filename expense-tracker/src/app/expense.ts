import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Expense {
    transactions: any[] = [];
    addTransaction(transaction: any) {
      this.transactions.push(transaction);
    }
}
