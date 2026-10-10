package com.marketplace.backend.controller;

import com.marketplace.backend.dto.UserResponse;
import com.marketplace.backend.entity.User;
import com.marketplace.backend.exception.InvalidCredentialsException;
import com.marketplace.backend.repository.UserRepository;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/users")
public class UserController {

    private final UserRepository userRepository;

    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @GetMapping("/me")
    public UserResponse getCurrentUser(@AuthenticationPrincipal String email) {
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new InvalidCredentialsException("User not found"));

        return new UserResponse(
                user.getId(),
                user.getEmail(),
                user.getFirstName(),
                user.getLastName(),
                user.getRole()
        );
    }
}