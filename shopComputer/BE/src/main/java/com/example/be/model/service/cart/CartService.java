package com.example.be.model.service.cart;

import com.example.be.model.entity.Cart;
import com.example.be.model.entity.OrderMain;
import com.example.be.model.entity.ProductInOrder;
import com.example.be.model.entity.User;
import com.example.be.model.repo.CartRepo;
import com.example.be.model.repo.OrderMainRepo;
import com.example.be.model.repo.ProductInOrderRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Collection;
import java.util.Optional;
import java.util.Set;

@Service
public class CartService implements ICartService {
    @Autowired
    CartRepo cartRepo;
    @Autowired
    ProductInOrderRepo productInOrderRepo;
    @Autowired
    OrderMainRepo orderMainRepo;
    @Override
    public Cart getCart(User user){
        return user.getCart();
    }

    @Override
    @Transactional
    public void mergeLocalCart(Collection<ProductInOrder> productInOrders, User user) {
        Cart cart=user.getCart();
        productInOrders.forEach(productInOrder -> {
            Set<ProductInOrder>set=cart.getProductInOrders();
            Optional<ProductInOrder> old=set.stream()
                    .filter(e->e.getProductId().equals(productInOrder.getProductId()))
                    .findFirst();
            ProductInOrder pro;
            if (old.isPresent()){
                pro=old.get();
                pro.setCount(productInOrder.getCount()+pro.getCount());
            }else {
                pro=productInOrder;
                pro.setCart(cart);
                cart.getProductInOrders().add(pro);
            }
            productInOrderRepo.save(pro);
        });
        cartRepo.save(cart);
    }

    @Override
    public void delete(String itemId, User user) {
        Optional<ProductInOrder> productInOrder=user.getCart().getProductInOrders().stream()
                .filter(e->itemId.equals(e.getProductId()))
                .findFirst();
        if (productInOrder.isPresent()){
            productInOrder.get().setCart(null);
            productInOrderRepo.deleteById(productInOrder.get().getProductId());
        }
    }

    @Override
    public void checkout(User user) {
        OrderMain order=new OrderMain(user);
        orderMainRepo.save(order);
        user.getCart().getProductInOrders().forEach(productInOrder -> {
            productInOrder.setCart(null);
            productInOrder.setOrderMain(order);
            productInOrderRepo.save(productInOrder);
        });
    }
}
