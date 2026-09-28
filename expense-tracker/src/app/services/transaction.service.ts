import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Transaction } from '../transaction';

@Injectable({
  providedIn: 'root',
})
export class TransactionService {

    private apiUrl='http://localhost:8080/api/transactions';

    constructor(private httpClient: HttpClient) {}

    getAllTransactions(): Observable<Transaction[]> {
        return this.httpClient.get<Transaction[]>(
            `${this.apiUrl}/getAllTransactions`
            );
          }

    getTransactionById(id: number): Observable<Transaction> {
        return this.httpClient.get<Transaction>(
            `${this.apiUrl}/getTransaction?id=${id}`
            );
          }

    removeTransactionById(id: number): Observable<boolean> {
        return this.httpClient.delete<boolean>(
            `${this.apiUrl}/removeTransaction?id=${id}`
            );
          }

    saveTransaction(transaction: any): Observable<boolean> {
        return this.httpClient.post<boolean>(
            `${this.apiUrl}/saveTransaction`,
            transaction
            );
          }
}
