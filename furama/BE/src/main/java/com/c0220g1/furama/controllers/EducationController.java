package com.c0220g1.furama.controllers;

import com.c0220g1.furama.model.entity.EducationDegree;
import com.c0220g1.furama.service.education.IEducationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:4200")
@RequestMapping("/api/education")
public class EducationController {
    @Autowired
    IEducationService educationService;

    @GetMapping
    public ResponseEntity<List<EducationDegree>> getAll(){
        return new ResponseEntity<>(educationService.findAll(),HttpStatus.OK);
    }
}
