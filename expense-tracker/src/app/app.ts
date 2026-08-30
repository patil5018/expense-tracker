import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Dashboard } from './dashboard/dashboard';
import { AddExpense } from './add-expense/add-expense';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Dashboard,AddExpense],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('expense-tracker');
}
