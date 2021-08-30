package com.c0220g1.furama.controllers;

import com.c0220g1.furama.model.entity.CustomerType;
import com.c0220g1.furama.service.customerType.ICustomerTypeService;
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
@RequestMapping("/api")
public class CustomerTypeController {
    @Autowired
    ICustomerTypeService customerTypeService;

    @GetMapping("/customerType")
    public ResponseEntity<List<CustomerType>> getAll(){
        return new ResponseEntity<>(customerTypeService.findAll(), HttpStatus.OK);
    }
}
