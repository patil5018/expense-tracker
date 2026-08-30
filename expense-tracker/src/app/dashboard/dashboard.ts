import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  balance = 42000;
  income = 65000;
  expenses = 23000;

  recentTransactions= [
      {
        name: 'Salary',
        amount: 65000,
        type: 'income'
        },
        {
          name: 'Groceries',
          amount: 2500,
          type: 'expense'
        },
        {
          name: 'Electricity',
          amount: 2000,
          type: 'expense'
        },
        {
          name: 'Internet',
          amount: 1000,
          type: 'expense'
        },
    ]

  }
