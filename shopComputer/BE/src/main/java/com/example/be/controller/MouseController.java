package com.example.be.controller;

import com.example.be.model.dto.MonitorDto;
import com.example.be.model.dto.MouseDto;
import com.example.be.model.entity.Monitor;
import com.example.be.model.entity.Mouse;
import com.example.be.model.service.mouse.IMouseService;
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
@RequestMapping("/api/mouse")
@RequiredArgsConstructor
public class MouseController {
    private final IMouseService mouseService;
    @GetMapping("/")
    public ResponseEntity<List<Mouse>> findAll(){
        return new ResponseEntity<>(mouseService.findAll(), HttpStatus.OK);
    }
    @GetMapping("/find/{id}")
    public ResponseEntity<Mouse> findById(@PathVariable Long id){
        Optional<Mouse> mouse=mouseService.findById(id);
        if (!mouse.isPresent()){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(mouse.get(),HttpStatus.OK);
    }
    @PostMapping("/create")
    public ResponseEntity<List<FieldError>> create(@Valid @RequestBody MouseDto mouseDto, BindingResult bindingResult){
        if (bindingResult.hasErrors()){
            return new ResponseEntity<>(bindingResult.getFieldErrors(),HttpStatus.NOT_ACCEPTABLE);
        }
        Mouse mouse=new Mouse();
        BeanUtils.copyProperties(mouseDto,mouse);
        mouseService.save(mouse);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }
    @PutMapping("/update/{id}")
    public ResponseEntity<List<FieldError>> update(@Valid @RequestBody MouseDto mouseDto,
                                                   BindingResult bindingResult,@PathVariable Long id){
        Optional<Mouse> mouse=mouseService.findById(id);
        if (!mouse.isPresent()){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        if (bindingResult.hasErrors()){
            return new ResponseEntity<>(bindingResult.getFieldErrors(),HttpStatus.NOT_ACCEPTABLE);
        }
        Mouse mouse1=new Mouse();
        BeanUtils.copyProperties(mouseDto,mouse1);
        mouse1.setMouseId(id);
        mouseService.save(mouse1);
        return  new ResponseEntity<>(HttpStatus.CREATED);
    }
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id){
        Optional<Mouse> mouse=mouseService.findById(id);
        if (!mouse.isPresent()){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        mouseService.delete(mouse.get());
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
