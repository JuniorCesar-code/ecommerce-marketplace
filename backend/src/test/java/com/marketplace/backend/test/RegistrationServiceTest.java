package com.marketplace.backend.test;

import com.marketplace.backend.repository.UserRepository;
import com.marketplace.backend.service.RegistrationService;
import org.junit.jupiter.api.BeforeEach;
import org.mockito.Mockito;
import org.springframework.security.crypto.password.PasswordEncoder;

import com.marketplace.backend.dto.RegisterRequest;
import com.marketplace.backend.dto.RegisterResponse;
import com.marketplace.backend.entity.User;
import com.marketplace.backend.exception.EmailAlreadyExistsException;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

class RegistrationServiceTest {

    private UserRepository userRepository;
    private PasswordEncoder passwordEncoder;
    private RegistrationService registrationService;

    @BeforeEach
    void setUp() {
        //“Give me a fake UserRepository and Password that I can control during this test
        userRepository = Mockito.mock(UserRepository.class);
        passwordEncoder = Mockito.mock(PasswordEncoder.class);

        registrationService = new RegistrationService(
                userRepository,
                passwordEncoder
        );
    }
    @Test
    void shouldRegisterUserSuccessfully() {

        // 1. Arrange
        RegisterRequest request = new RegisterRequest(
                "test@example.com",
                "Password123!",
                "Test",
                "User"
        );

        when(userRepository.existsByEmail("test@example.com"))
                .thenReturn(false);

        when(passwordEncoder.encode("Password123!"))
                .thenReturn("hashed-password");

        User savedUser = new User(
                "test@example.com",
                "hashed-password",
                "Test",
                "User",
                "CUSTOMER"
        );

        when(userRepository.save(any(User.class)))
                .thenReturn(savedUser);

        // 2. Act
        RegisterResponse response = registrationService.register(request);

        // 3. Assert
        assertEquals("test@example.com", response.email());
        assertEquals("Test", response.firstName());
        assertEquals("User", response.lastName());
        assertEquals("CUSTOMER", response.role());

        verify(passwordEncoder).encode("Password123!");
        verify(userRepository).save(any(User.class));
    }
    @Test
    void shouldRejectRegistrationWhenEmailAlreadyExists() {

        // Arrange
        RegisterRequest request = new RegisterRequest(
                "test@example.com",
                "Password123!",
                "Test",
                "User"
        );

        when(userRepository.existsByEmail("test@example.com"))
                .thenReturn(true);

        // Act + Assert
        EmailAlreadyExistsException exception = assertThrows(
                EmailAlreadyExistsException.class,
                () -> registrationService.register(request)
        );

        assertEquals(
                "Email is already registered",
                exception.getMessage()
        );

        verify(userRepository, never()).save(any(User.class));
        verify(passwordEncoder, never()).encode(anyString());
    }
}