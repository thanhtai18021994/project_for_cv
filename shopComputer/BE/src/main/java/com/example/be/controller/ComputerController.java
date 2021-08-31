package com.example.be.controller;

import com.example.be.model.dto.ComputerDto;
import com.example.be.model.entity.Computer;
import com.example.be.model.service.computer.IComputerService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.BeanUtils;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin("http://localhost:4200")
@RequestMapping("/api/computer")
@RequiredArgsConstructor
public class ComputerController {
    private final IComputerService computerService;

    @GetMapping("/")
    public ResponseEntity<List<Computer>> findAll(){
        return new ResponseEntity<>(computerService.findAll(), HttpStatus.OK);
    }
    @GetMapping("/find/{id}")
    public ResponseEntity<Computer> findById(@PathVariable Long id){
        Optional<Computer> computer=computerService.findById(id);
        if (!computer.isPresent()){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(computer.get(),HttpStatus.OK);
    }

    @PostMapping("/create")
    public ResponseEntity<List<FieldError>> createComputer(@Valid @RequestBody ComputerDto computerDto, BindingResult bindingResult){
        if (bindingResult.hasErrors()){
            return new ResponseEntity<>(bindingResult.getFieldErrors(),HttpStatus.NO_CONTENT);
        }
        Computer computer=new Computer();
        BeanUtils.copyProperties(computerDto,computer);
        Computer computer1=computerService.save(computer);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }
    @PutMapping("/update/{id}")
    public ResponseEntity<List<FieldError>> updateComputer(@Valid @RequestBody ComputerDto computerDto,
                                                           BindingResult bindingResult,@PathVariable Long id){
        Optional<Computer> computer=computerService.findById(id);
        if (!computer.isPresent()){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        if (bindingResult.hasErrors()){
            return new ResponseEntity<>(bindingResult.getFieldErrors(),HttpStatus.NO_CONTENT);
        }
        Computer computer1=new Computer();
        BeanUtils.copyProperties(computerDto,computer1);
        computer1.setComputerId(id);
        computerService.save(computer1);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteComputer(@PathVariable Long id){
        Optional<Computer> computer=computerService.findById(id);
        if (!computer.isPresent()){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        computerService.delete(computer.get());
        return new ResponseEntity<>(HttpStatus.OK);
    }
}