import { Component, OnInit, ChangeDetectionStrategy , ChangeDetectorRef } from '@angular/core';
import { Expense } from '../expense';
import { Transaction } from '../transaction';
import { Router,RouterLink } from '@angular/router';
import { TransactionService } from '../services/transaction.service';

@Component({
  selector: 'app-dashboard',
  imports: [RouterLink],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
  changeDetection: ChangeDetectionStrategy.Default
})
export class Dashboard implements OnInit{

  constructor(
      private expenseService: Expense,
      private router: Router,
      private transactionService: TransactionService,
      private cdr: ChangeDetectorRef
      ) {
    }

  ngOnInit(): void {    this.transactionService.getAllTransactions()
      .subscribe(transactions => {
        console.log('Backend transactions: ',transactions);
        this.expenseService.transactions = [...transactions];

        this.cdr.detectChanges();
      });
  }

  getTotalIncome() {
    return this.expenseService.transactions
      .filter(transaction => transaction.transactionType === 'income')
      .reduce((total, transaction) => total + transaction.amount, 0);
  }

  getTotalExpenses() {
    return this.expenseService.transactions
      .filter(transaction => transaction.transactionType === 'expense')
      .reduce((total, transaction) => total + transaction.amount, 0);
  }

  getBalance() {
    return this.getTotalIncome() - this.getTotalExpenses();
  }

  getTransactions() {
    return this.expenseService.transactions;
  }

  deleteTransaction(transaction: Transaction) {
      this.expenseService.removeTransactionById(transaction);
  }

  editTransaction(transaction: Transaction) {
            this.expenseService.editingTransaction=transaction;
            this.router.navigate(['/add-expense']);
  }

  navigateToAddExpense(){
      this.expenseService.editingTransaction=null;
      this.router.navigate(['/add-expense']);
  }
}
