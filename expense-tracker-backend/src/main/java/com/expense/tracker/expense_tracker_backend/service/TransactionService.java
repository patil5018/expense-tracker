package com.expense.tracker.expense_tracker_backend.service;

import com.expense.tracker.expense_tracker_backend.entity.Transaction;

import java.util.List;
import java.util.Optional;

public interface TransactionService {

    List<Transaction> testData();

    List<Transaction> getAllTransactions();

    Optional<Transaction> getTransaction(Long id);

    Boolean saveTransaction(Transaction transaction);
}
