package com.expense.tracker.expense_tracker_backend.repository;

import com.expense.tracker.expense_tracker_backend.entity.Transaction;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface TransactionRepository extends JpaRepository<Transaction, Long> {
    Optional<Transaction> findAllById(Long id);
}
