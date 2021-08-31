package com.example.be.controller;

import com.example.be.model.dto.KeyboardDto;
import com.example.be.model.entity.Keyboard;
import com.example.be.model.service.keyboard.IKeyboardService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.BeanUtils;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.security.Key;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin("http://localhost:4200")
@RequestMapping("/api/keyboard")
@RequiredArgsConstructor
public class KeyboardController {
    private final IKeyboardService keyboardService;
    @GetMapping("/")
    public ResponseEntity<List<Keyboard>> findAll(){
        return new ResponseEntity<>(keyboardService.findAll(), HttpStatus.OK);
    }
    @GetMapping("/find/{id}")
    public ResponseEntity<Keyboard> findById(@PathVariable Long id){
        Optional<Keyboard> keyboard=keyboardService.findById(id);
        if (!keyboard.isPresent()){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(keyboard.get(),HttpStatus.OK);
    }
    @PostMapping("/create")
    public ResponseEntity<List<FieldError>>create(@Valid @RequestBody KeyboardDto keyboardDto, BindingResult bindingResult){
        if (bindingResult.hasErrors()){
            return new ResponseEntity<>(bindingResult.getFieldErrors(),HttpStatus.NOT_ACCEPTABLE);
        }
        Keyboard keyboard=new Keyboard();
        BeanUtils.copyProperties(keyboardDto,keyboard);
        keyboardService.save(keyboard);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }
    @PutMapping("/update/{id}")
    public ResponseEntity<List<FieldError>>update(@Valid @RequestBody KeyboardDto keyboardDto,
                                                  BindingResult bindingResult,@PathVariable Long id){
        Optional<Keyboard> keyboard=keyboardService.findById(id);
        if (!keyboard.isPresent()){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        if (bindingResult.hasErrors()){
            return new ResponseEntity<>(bindingResult.getFieldErrors(),HttpStatus.NOT_ACCEPTABLE);
        }
        Keyboard keyboard1=new Keyboard();
        BeanUtils.copyProperties(keyboardDto,keyboard1);
        keyboard1.setKeyboardId(id);
        keyboardService.save(keyboard1);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id){
        Optional<Keyboard>  keyboard=keyboardService.findById(id);
        if (!keyboard.isPresent()){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        keyboardService.delete(keyboard.get());
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
