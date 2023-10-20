package com.example.restrailway.service;

import com.example.restrailway.domain.model.User;


public interface UserService {
    User findById(Long id);

    User create(User userToCreate);
}
