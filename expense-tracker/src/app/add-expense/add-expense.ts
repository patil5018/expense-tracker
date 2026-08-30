import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Expense } from '../expense';
import { Transaction } from '../transaction';

@Component({
  selector: 'app-add-expense',
  imports: [FormsModule,NgFor],
  templateUrl: './add-expense.html',
  styleUrl: './add-expense.css',
})
export class AddExpense {

  description: string = '';
  amount: number = 0;
  type: 'income' | 'expense' = 'expense';

  constructor(private expenseService: Expense) {}

  addTransaction() {
    if(!this.description.trim() || this.amount<=0){
      return;
    }
      console.log("Expense added!!!! --- > " + this.description)
      console.log("Expense added!!!! --- > " + this.amount)
      console.log("Expense added!!!! --- > " + this.type)

      const transaction: Transaction = {
        description: this.description,
        amount: this.amount,
        type: this.type
      };
      this.expenseService.addTransaction(transaction);
      console.log(this.expenseService.transactions);

      this.description='';
      this.amount=0;
      this.type='expense';
    }

/*   getTotalIncome() {
    return this.transactions
      .filter(transaction => transaction.type === 'income')
      .reduce((total, transaction) => total + transaction.amount, 0);
  }

  getTotalExpenses() {
    return this.transactions
      .filter(transaction => transaction.type === 'expense')
      .reduce((total, transaction) => total + transaction.amount, 0);
  }

  getBalance() {
    return this.getTotalIncome() - this.getTotalExpenses();
  } */
}
