import { Component,OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Expense } from '../expense';
import { Transaction,TransactionType } from '../transaction';
import { Router,ActivatedRoute  } from '@angular/router';

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
  transactionType: TransactionType='expense';

  descriptionError: string='';
  amountError: string='';

  constructor(
      private expenseService: Expense,
      private router: Router,
      private route: ActivatedRoute
    ) {}

  ngOnInit() {
        const id = this.route.snapshot.paramMap.get('id');
        console.log('Transaction ID:', id);
        if(id) {
          const transaction = this.expenseService.transactions.find(transaction=> transaction.id === Number(id));
          console.log('Transaction=> ',transaction)
            if(transaction){
              this.description=transaction.description;
              this.amount=transaction.amount;
              this.transactionType=transaction.transactionType;
              this.isEditing=true;
              this.expenseService.editingTransaction=transaction;
            }
        }
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
    const transaction: Transaction = {
      id: this.isEditing? this.expenseService.editingTransaction!.id:0,
      description: this.description,
      amount: this.amount,
      transactionType: this.transactionType
    };

    if (this.isEditing) {
      this.expenseService.updateTransaction(transaction);
    } else {
      this.expenseService.addTransaction(transaction);
    }

    this.description='';
    this.amount=0;
    this.transactionType='expense';

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
      this.transactionType=transaction.transactionType;
      this.isEditing=true;
      }
    }
}
