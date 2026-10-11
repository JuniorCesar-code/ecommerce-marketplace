package com.marketplace.backend.dto;

public record UserResponse(
        Long id,
        String email,
        String firstName,
        String lastName,
        String role
) {
}