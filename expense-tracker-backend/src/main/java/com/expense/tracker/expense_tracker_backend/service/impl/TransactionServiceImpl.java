package com.expense.tracker.expense_tracker_backend.service.impl;

import com.expense.tracker.expense_tracker_backend.entity.Transaction;
import com.expense.tracker.expense_tracker_backend.repository.TransactionRepository;
import com.expense.tracker.expense_tracker_backend.service.TransactionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class TransactionServiceImpl implements TransactionService {

    List<Transaction> transactionList = new ArrayList<>();

    @Autowired
    TransactionRepository transactionRepository;

    @Override
    public List<Transaction> getAllTransactions() {
        return transactionRepository.findAll();
    }

    @Override
    public Optional<Transaction> getTransaction(Long id) {
        return transactionRepository.findAllById(id);
    }

    @Override
    public List<Transaction> testData() {
        transactionList.add(new Transaction(50000L,"Salary","income"));
        transactionList.add(new Transaction(15000L,"Rent","expense"));
        transactionRepository.saveAll(transactionList);
        return Optional.of(transactionRepository.findAll()).get();
    }

    @Override
    public Boolean saveTransaction(Transaction transaction){
        try {
            transactionRepository.save(transaction);
            return true;
        } catch (Exception e){
            return false;
        }
    }
}
