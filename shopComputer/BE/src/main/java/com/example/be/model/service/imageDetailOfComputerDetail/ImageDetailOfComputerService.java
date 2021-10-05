package com.example.be.model.service.imageDetailOfComputerDetail;

import com.example.be.model.entity.ImageDetailOfComputer;
import com.example.be.model.repo.ImageOfComputerDetailRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ImageDetailOfComputerService implements IImageDetailOfComputerService {

    @Autowired
    ImageOfComputerDetailRepo imageOfComputerDetailRepo;

    @Override
    public Page<ImageDetailOfComputer> getAll(Pageable pageable) {
        return null;
    }

    @Override
    public List<ImageDetailOfComputer> findAll() {
        return imageOfComputerDetailRepo.findAll();
    }

    @Override
    public Optional<ImageDetailOfComputer> findById(Long id) {
        return Optional.empty();
    }

    @Override
    public ImageDetailOfComputer save(ImageDetailOfComputer imageDetailOfComputer) {
        return imageOfComputerDetailRepo.save(imageDetailOfComputer);
    }

    @Override
    public void delete(ImageDetailOfComputer imageDetailOfComputer) {

    }
}
