package com.example.be.controller;

import com.example.be.model.dto.MonitorDto;
import com.example.be.model.entity.Monitor;
import com.example.be.model.service.monitor.IMonitorService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.BeanUtils;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.*;

import javax.management.openmbean.OpenDataException;
import javax.swing.text.html.Option;
import javax.validation.Valid;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin("http://localhost:4200")
@RequestMapping("/api/monitor")
@RequiredArgsConstructor
public class MonitorController {
    private final IMonitorService monitorService;
    @GetMapping("/")
    public ResponseEntity<List<Monitor>> findAll(){
        return new ResponseEntity<>(monitorService.findAll(), HttpStatus.OK);
    }
    @GetMapping("/find/{id}")
    public ResponseEntity<Monitor> findById(@PathVariable Long id){
        Optional<Monitor> monitor=monitorService.findById(id);
        if (!monitor.isPresent()){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(monitor.get(),HttpStatus.OK);
    }
    @PostMapping("/create")
    public ResponseEntity<List<FieldError>> create(@Valid @RequestBody MonitorDto monitorDto, BindingResult bindingResult){
        if (bindingResult.hasErrors()){
            return new ResponseEntity<>(bindingResult.getFieldErrors(),HttpStatus.NOT_ACCEPTABLE);
        }
        Monitor monitor=new Monitor();
        BeanUtils.copyProperties(monitorDto,monitor);
        monitorService.save(monitor);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }
    @PutMapping("/update/{id}")
    public ResponseEntity<List<FieldError>> update(@Valid @RequestBody MonitorDto monitorDto,
                                                   BindingResult bindingResult,@PathVariable Long id){
        Optional<Monitor> monitor=monitorService.findById(id);
        if (!monitor.isPresent()){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        if (bindingResult.hasErrors()){
            return new ResponseEntity<>(bindingResult.getFieldErrors(),HttpStatus.NOT_ACCEPTABLE);
        }
        Monitor monitor1=new Monitor();
        BeanUtils.copyProperties(monitorDto,monitor1);
        monitor1.setMonitorId(id);
        monitorService.save(monitor1);
        return  new ResponseEntity<>(HttpStatus.CREATED);
    }
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id){
        Optional<Monitor> monitor=monitorService.findById(id);
        if (!monitor.isPresent()){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        monitorService.delete(monitor.get());
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
