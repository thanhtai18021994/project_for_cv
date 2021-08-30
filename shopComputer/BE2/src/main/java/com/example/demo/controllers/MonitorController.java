package com.example.demo.controllers;

import com.example.demo.model.Monitor;
import com.example.demo.service.monitor.IMonitorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:4200")
public class MonitorController {

    @Autowired
    IMonitorService monitorService;

    @GetMapping
    public ResponseEntity<Iterable<Monitor>> showAll(Model model){
        List<Monitor> monitorList= monitorService.findAll();
        return new ResponseEntity<>(monitorList, HttpStatus.OK);
    }
    @PostMapping("/create")
    public ResponseEntity<Void> create(@RequestBody Monitor monitor, BindingResult bindingResult){
        if (bindingResult.hasErrors()){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(HttpStatus.CREATED);
    }
}
