package com.example.be.model.service.cart;


import com.example.be.model.entity.Cart;
import com.example.be.model.entity.ProductInOrder;
import com.example.be.model.entity.User;

import java.util.Collection;

public interface ICartService {
    public Cart getCart(User user);
    public void mergeLocalCart(Collection<ProductInOrder> productInOrders, User user);
    public void delete(String itemId,User user);
    public void checkout(User user);
}
