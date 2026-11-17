package com.marketplace.backend.repository;

import com.marketplace.backend.entity.Category;
import org.springframework.data.jpa.repository.JpaRepository;

// Talks to the "categories" table; Spring/JPA writes the SQL for us
public interface CategoryRepository extends JpaRepository<Category, Long> {
}