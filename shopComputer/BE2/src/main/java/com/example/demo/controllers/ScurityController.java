package com.example.demo.controllers;

import com.example.demo.service.security.RoleService;
import com.example.demo.service.security.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ScurityController {

    @Autowired
    UserService userService;

    @Autowired
    RoleService roleService;

}
