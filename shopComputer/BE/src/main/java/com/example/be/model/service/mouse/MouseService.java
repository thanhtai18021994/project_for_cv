package com.example.be.model.service.mouse;

import com.example.be.model.entity.Mouse;
import com.example.be.model.repo.MouseRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class MouseService implements IMouseService{
    private final MouseRepo mouseRepo;
    @Override
    public Page<Mouse> getAll(Pageable pageable) {
        return mouseRepo.findAll(pageable);
    }

    @Override
    public List<Mouse> findAll() {
        return mouseRepo.findAll();
    }

    @Override
    public Optional<Mouse> findById(Long id) {
        return mouseRepo.findById(id);
    }

    @Override
    public Mouse save(Mouse mouse) {
        return mouseRepo.save(mouse);
    }

    @Override
    public void delete(Mouse mouse) {
        mouseRepo.delete(mouse);
    }
}
