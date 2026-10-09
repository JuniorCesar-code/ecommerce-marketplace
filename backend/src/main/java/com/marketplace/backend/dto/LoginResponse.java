package com.marketplace.backend.dto;

// Antwort nach erfolgreichem Login: Token + Basis-Infos (nie das Passwort)
public record LoginResponse(
        String token,
        Long id,
        String email,
        String firstName,
        String lastName,
        String role
) {
}