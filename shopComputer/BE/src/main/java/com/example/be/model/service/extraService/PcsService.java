package com.example.be.model.service.extraService;

import com.example.be.model.entity.Pcs;
import com.example.be.model.repo.PcsRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class PcsService implements IPcsService{
    private final PcsRepo pcsRepo;
    @Override
    public List<Pcs> findAll() {
        return pcsRepo.findAll();
    }
}
