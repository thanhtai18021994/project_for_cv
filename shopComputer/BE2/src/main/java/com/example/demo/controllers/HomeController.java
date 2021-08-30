package com.example.demo.controllers;

import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin("http://localhost:4200")
public class HomeController {
    @RequestMapping()
    public String getIndex(ModelMap modelMap){
        return "/home";
    }
}
