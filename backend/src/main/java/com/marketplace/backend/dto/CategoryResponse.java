package com.marketplace.backend.dto;

// What we send to the frontend for one category (only what it needs)
public record CategoryResponse(
        Long id,
        String name,
        String description
) {
}