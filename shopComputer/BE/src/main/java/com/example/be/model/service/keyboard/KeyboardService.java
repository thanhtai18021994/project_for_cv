package com.example.be.model.service.keyboard;

import com.example.be.model.entity.Keyboard;
import com.example.be.model.repo.KeyboardRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class KeyboardService implements IKeyboardService{
    private final KeyboardRepo keyboardRepo;
    @Override
    public Page<Keyboard> getAll(Pageable pageable) {
        return keyboardRepo.findAll(pageable);
    }

    @Override
    public List<Keyboard> findAll() {
        return keyboardRepo.findAll();
    }

    @Override
    public Optional<Keyboard> findById(Long id) {
        return keyboardRepo.findById(id);
    }

    @Override
    public Keyboard save(Keyboard keyboard) {
        return keyboardRepo.save(keyboard);
    }

    @Override
    public void delete(Keyboard keyboard) {
        keyboardRepo.delete(keyboard);
    }
}
