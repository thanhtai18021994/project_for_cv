package com.example.be.model.service;



import com.example.be.model.entity.Role;
import com.example.be.model.entity.User;

import java.util.List;
import java.util.Optional;

/**
 * @author Get Arrays (https://www.getarrays.io/)
 * @version 1.0
 * @since 7/10/2021
 */
public interface UserService {
    User saveUser(User user);
    Role saveRole(Role role);
    void addRoleToUser(String username, String roleName);
    User getUser(String username);
    List<User>getUsers();
    Optional<User> findById(Integer id);
}
