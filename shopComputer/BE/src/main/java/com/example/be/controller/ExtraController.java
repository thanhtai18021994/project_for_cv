package com.example.be.controller;

import com.example.be.model.entity.Manufacture;
import com.example.be.model.entity.Pcs;
import com.example.be.model.entity.TypeComputer;
import com.example.be.model.service.extraService.IManufactureService;
import com.example.be.model.service.extraService.IPcsService;
import com.example.be.model.service.extraService.ITypeComputerService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:4200")
@RequiredArgsConstructor
public class ExtraController {
    private final IPcsService pcsService;
    private final IManufactureService manufactureService;
    private final ITypeComputerService typeComputerService;
    @GetMapping("/api/pcs")
    public ResponseEntity<List<Pcs>> findAllPcs(){
        return new ResponseEntity<>(pcsService.findAll(), HttpStatus.OK);
    }
    @GetMapping("/api/manufacture")
    public ResponseEntity<List<Manufacture>> findAllManufacture(){
        return new ResponseEntity<>(manufactureService.findAll(),HttpStatus.OK);
    }
    @GetMapping("/api/typeComputer")
    public ResponseEntity<List<TypeComputer>> findAllTypeComputer(){
        return new ResponseEntity<>(typeComputerService.findAll(),HttpStatus.OK);
    }
}
