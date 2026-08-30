import { Component } from '@angular/core';
import { Expense } from '../expense';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {

  constructor(private expenseService: Expense) {
    console.log(this.expenseService.transactions);
    }

  getTotalIncome() {
    return this.expenseService.transactions
      .filter(transaction => transaction.type === 'income')
      .reduce((total, transaction) => total + transaction.amount, 0);
  }

  getTotalExpenses() {
    return this.expenseService.transactions
      .filter(transaction => transaction.type === 'expense')
      .reduce((total, transaction) => total + transaction.amount, 0);
  }

  getBalance() {
    return this.getTotalIncome() - this.getTotalExpenses();
  }

  getTransactions() {
    return this.expenseService.transactions;
  }

}
