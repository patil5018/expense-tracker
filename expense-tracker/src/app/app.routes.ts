import { Routes } from '@angular/router';
import { Dashboard } from './dashboard/dashboard';
import { AddExpense } from './add-expense/add-expense';

export const routes: Routes = [
    {
      path: '',
      component: Dashboard
    },
    {
      path: 'add-expense',
      component: AddExpense
    }
  ];
