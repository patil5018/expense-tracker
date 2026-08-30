import { Injectable } from '@angular/core';
import { Transaction } from './transaction';

@Injectable({
  providedIn: 'root',
})
export class Expense {
    transactions: Transaction[] = [];

    editingTransaction: Transaction | null=null;

    addTransaction(transaction: Transaction) {
      transaction.id= Date.now();
      this.transactions.push(transaction);
    }

  deleteTransaction(transaction: Transaction) {
      const index= this.transactions.indexOf(transaction);

      if(index!==-1) {
        this.transactions.splice(index,1);
      }
  }

  updateTransaction(updatedTransaction: Transaction){
    const index= this.transactions.findIndex(transaction=> transaction.id=== updatedTransaction.id);
    if(index!==-1) {
      this.transactions[index]=updatedTransaction;
    }
  }
}
