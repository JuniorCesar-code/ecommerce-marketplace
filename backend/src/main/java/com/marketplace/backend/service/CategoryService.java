package com.marketplace.backend.service;

import com.marketplace.backend.dto.CategoryResponse;
import com.marketplace.backend.repository.CategoryRepository;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;

// Business logic for categories: gets them from the repository and prepares them for the API
@Service
public class CategoryService {

    private final CategoryRepository categoryRepository;

    // Spring gives us the repository automatically (dependency injection)
    public CategoryService(CategoryRepository categoryRepository) {
        this.categoryRepository = categoryRepository;
    }

    // Returns all categories, sorted A-Z by name, as DTOs
    public List<CategoryResponse> getAllCategories() {
        return categoryRepository.findAll(Sort.by("name"))
                .stream()
                .map(category -> new CategoryResponse(
                        category.getId(),
                        category.getName(),
                        category.getDescription()
                ))
                .toList();
    }
}