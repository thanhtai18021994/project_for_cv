package com.example.be.model.service.productInOrderService;

import com.example.be.model.entity.ProductInOrder;
import com.example.be.model.entity.User;
import com.example.be.model.repo.ProductInOrderRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Optional;

@Service
public class ProductInOrderService implements IProductInOrderService{
    @Autowired
    ProductInOrderRepo productInOrderRepo;
    @Override
    @Transactional
    public void update(String itemId, Integer quantity, User user) {
        Optional<ProductInOrder> productInOrder=
                user.getCart().getProductInOrders().stream()
                        .filter(e->itemId.equals(e.getProductId())).findFirst();
        if (productInOrder.isPresent()){
            productInOrder.get().setCount(quantity);
            productInOrderRepo.save(productInOrder.get());
        }
    }

    @Override
    public ProductInOrder findOne(String itemId, User user) {
        Optional<ProductInOrder> productInOrder=
                user.getCart().getProductInOrders().stream()
                        .filter(e->itemId.equals(e.getProductId())).findFirst();
        return productInOrder.get();
    }
}
