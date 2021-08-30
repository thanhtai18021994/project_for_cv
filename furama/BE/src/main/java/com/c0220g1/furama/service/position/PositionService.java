package com.c0220g1.furama.service.position;

import com.c0220g1.furama.model.entity.Position;
import com.c0220g1.furama.repository.PositionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PositionService implements IPositionService{

    @Autowired
    PositionRepository positionRepository;

    @Override
    public List<Position> findAll() {
        return positionRepository.findAll();
    }

    @Override
    public Page<Position> findAll(Pageable pageable) {
        return null;
    }

    @Override
    public Position save(Position position) {
        return null;
    }

    @Override
    public void delete(Position position) {

    }

    @Override
    public Optional<Position> findById(Long id) {
        return Optional.empty();
    }

    @Override
    public List<Position> searchName(String name) {
        return null;
    }
}
