import { Component,OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Expense } from '../expense';
import { Transaction,TransactionType } from '../transaction';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-expense',
  imports: [FormsModule,NgFor],
  templateUrl: './add-expense.html',
  styleUrl: './add-expense.css',
})
export class AddExpense implements OnInit {

  isEditing: boolean= false;

  description: string = '';
  amount: number = 0;
  type: TransactionType='expense';

  descriptionError: string='';
  amountError: string='';

  constructor(private expenseService: Expense,  private router: Router) {}

  ngOnInit() {
    this.loadTransactionForEdit();
  }

  addTransaction() {
    console.log('1. addTransaction called');
      this.descriptionError = '';
      this.amountError = '';
    if(!this.description.trim()){
      this.descriptionError='⚠ Description is required';
    }
    if(this.amount<=0) {
      this.amountError='⚠ Amount is required';
    }

    if(this.descriptionError || this.amountError){
      return
    }
      console.log("Expense added!!!! --- > " + this.description)
      console.log("Expense added!!!! --- > " + this.amount)
      console.log("Expense added!!!! --- > " + this.type)

      const transaction: Transaction = {
        id: this.isEditing? this.expenseService.editingTransaction!.id:0,
        description: this.description,
        amount: this.amount,
        type: this.type
      };

      if (this.isEditing) {
        this.expenseService.updateTransaction(transaction);
      } else {
        this.expenseService.addTransaction(transaction);
      }

      this.description='';
      this.amount=0;
      this.type='expense';

      this.router.navigate(['/']);
    }

  validateDescription() {
    if(!this.description.trim()){
        this.descriptionError='Description is required';
      } else {
        this.descriptionError=''
      }
    }

  validateAmount(){
        if(!this.amount){
            this.amountError='Description is required';
          } else {
            this.amountError=''
          }
        }

  loadTransactionForEdit(){
    const transaction = this.expenseService.editingTransaction;
    console.log("LoadTransaction -> ",transaction);
    if(transaction){
      this.description=transaction.description;
      this.amount=transaction.amount;
      this.type=transaction.type;
      this.isEditing=true;
      }
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
