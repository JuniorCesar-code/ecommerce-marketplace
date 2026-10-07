package com.marketplace.backend.repository;

import com.marketplace.backend.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

//reponsible of accessing user in PostgresSQL by generating an SQL request

public interface UserRepository extends JpaRepository<User, Long> {

    Optional<User> findByEmail(String email);

    boolean existsByEmail(String email);
}