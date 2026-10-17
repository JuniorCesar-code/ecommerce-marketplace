package com.marketplace.backend.entity;

import jakarta.persistence.*;

import java.time.OffsetDateTime;

// Java version of one row in the "categories" table
@Entity
@Table(name = "categories")
public class Category {

    // Primary key, the database gives the number automatically
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // Category name, required and unique (e.g. "Electronics")
    @Column(nullable = false, unique = true)
    private String name;

    // Optional longer text
    private String description;

    @Column(name = "created_at", nullable = false)
    private OffsetDateTime createdAt;

    @Column(name = "updated_at", nullable = false)
    private OffsetDateTime updatedAt;

    // Empty constructor that JPA needs to build objects from the database
    protected Category() {
    }

    // Constructor we use ourselves to create a new category
    public Category(String name, String description) {
        this.name = name;
        this.description = description;
    }

    // Getters: let other classes read the values
    public Long getId() { return id; }
    public String getName() { return name; }
    public String getDescription() { return description; }
    public OffsetDateTime getCreatedAt() { return createdAt; }
    public OffsetDateTime getUpdatedAt() { return updatedAt; }

    // Fill the timestamps automatically before saving / updating
    @PrePersist
    void onCreate() {
        OffsetDateTime now = OffsetDateTime.now();
        createdAt = now;
        updatedAt = now;
    }

    @PreUpdate
    void onUpdate() {
        updatedAt = OffsetDateTime.now();
    }
}