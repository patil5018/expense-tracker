package com.expense.tracker.expense_tracker_backend.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@Entity
@NoArgsConstructor
public class Transaction {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String description;
    private Long amount;
    private String transactionType;

    public Transaction(Long amount, String description, String transactionType) {
        this.amount = amount;
        this.description = description;
        this.transactionType = transactionType;
    }

    public Long getId() {
        return id;
    }

    public String getDescription() {
        return description;
    }

    public Long getAmount() {
        return amount;
    }

    public String getTransactionType() {
        return transactionType;
    }
}
