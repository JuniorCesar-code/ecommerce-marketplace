package com.marketplace.backend.dto;


//it use to repond to the frontend , bcs it never return the password and the password hash.
public record RegisterResponse(
        Long id,
        String email,
        String firstName,
        String lastName,
        String role
) {
}