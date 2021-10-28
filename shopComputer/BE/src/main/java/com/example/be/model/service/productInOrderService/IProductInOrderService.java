package com.example.be.model.service.productInOrderService;

import com.example.be.model.entity.ProductInOrder;
import com.example.be.model.entity.User;

public interface IProductInOrderService {
    void update(String itemId, Integer quantity, User user);
    ProductInOrder findOne(String itemId, User user);
}
