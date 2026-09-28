package com.expense.tracker.expense_tracker_backend.controller;

import com.expense.tracker.expense_tracker_backend.entity.Transaction;
import com.expense.tracker.expense_tracker_backend.service.TransactionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController()
@RequestMapping("/api/transactions")
@CrossOrigin(origins = "*")
public class TransactionController {

    @Autowired
    TransactionService transactionService;

    @GetMapping("/testData")
    public List<Transaction> testData(){
        return transactionService.testData();
    }

    @GetMapping("/getAllTransactions")
    public List<Transaction> getAllTransactions(){
        return transactionService.getAllTransactions();
    }

    @GetMapping("/getTransaction")
    public Transaction getTransaction(@RequestParam Long id){
        return transactionService.getTransaction(id).get();
    }

    @PostMapping("/saveTransaction")
    public Boolean saveTransaction(@RequestBody Transaction transaction){
        return transactionService.saveTransaction(transaction);
    }

    @DeleteMapping("/removeTransaction")
    public Boolean removeTransaction(@RequestParam Long id) {
        return transactionService.removeTransaction(id);
    }
}
