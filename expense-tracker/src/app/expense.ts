import { Injectable } from '@angular/core';
import { Transaction } from './transaction';
import { TransactionService } from './services/transaction.service';

@Injectable({
  providedIn: 'root',
})
export class Expense {

    transactions: Transaction[] = [];

    constructor(
        private transactionService: TransactionService
        ) {
      }

    editingTransaction: Transaction | null=null;

    addTransaction(transaction: Transaction) {
      const trans= {
        'description': transaction.description,
        'amount': transaction.amount,
        'transactionType': transaction.transactionType
        };
      this.transactionService.saveTransaction(trans).subscribe();
    }

  removeTransactionById(transaction: Transaction) {
      this.transactionService.removeTransactionById(transaction.id)
        .subscribe();

        const index= this.transactions.indexOf(transaction);

        if(index!==-1) {
          this.transactions.splice(index,1);
        }
  }

  updateTransaction(updatedTransaction: Transaction){
      this.transactionService.saveTransaction(updatedTransaction).subscribe();
  }
}
