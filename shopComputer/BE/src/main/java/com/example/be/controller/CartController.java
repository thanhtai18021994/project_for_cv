package com.example.be.controller;

import com.example.be.model.entity.*;
import com.example.be.model.service.UserService;
import com.example.be.model.service.cart.ICartService;
import com.example.be.model.service.computer.IComputerService;
import com.example.be.model.service.productInOrderService.IProductInOrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.Collection;
import java.util.Collections;

@CrossOrigin
@RestController
@RequestMapping("/cart")
public class CartController {
    @Autowired
    ICartService cartService;
    @Autowired
    UserService userService;
    @Autowired
    IComputerService computerService;
    @Autowired
    IProductInOrderService productInOrderService;

    @PostMapping("")
    public ResponseEntity<Cart> mergeCart(@RequestBody Collection<ProductInOrder> productInOrders, Principal principal) {
        User user = userService.getUser(principal.getName());
        try {
            cartService.mergeLocalCart(productInOrders, user);
        } catch (Exception e) {
            ResponseEntity.badRequest().body("Merge Cart Failed");
        }
        return ResponseEntity.ok(cartService.getCart(user));
    }
    @GetMapping("")
    public Cart getCart(Principal principal) {
        User user = userService.getUser(principal.getName());
        return cartService.getCart(user);
    }

    @PostMapping("/add")
    public boolean addToCart(@RequestBody ItemForm form, Principal principal) {
        Computer computer = computerService.findById(form.getProductId()).get();
        ProductInOrder productInOrder=new ProductInOrder();
        productInOrder.setProductCode(computer.getComputerCode());
        productInOrder.setProductPrice(computer.getComputerSalePrice());
        productInOrder.setProductName(computer.getComputerName());
        productInOrder.setProductImage(computer.getMainImage());
        productInOrder.setCount(form.getQuantity());
        try {
            mergeCart(Collections.singleton(productInOrder), principal);
        } catch (Exception e) {
            return false;
        }
        return true;
    }

    @PutMapping("/{itemId}")
    public ProductInOrder modifyItem(@PathVariable("itemId") String itemId, @RequestBody Integer quantity, Principal principal) {
        User user = userService.getUser(principal.getName());
        productInOrderService.update(itemId, quantity, user);
        return productInOrderService.findOne(itemId, user);
    }

    @DeleteMapping("/{itemId}")
    public void deleteItem(@PathVariable("itemId") String itemId, Principal principal) {
        User user = userService.getUser(principal.getName());
        cartService.delete(itemId, user);
    }

    @PostMapping("/checkout")
    public ResponseEntity checkout(Principal principal) {
        User user = userService.getUser(principal.getName());
        cartService.checkout(user);
        return ResponseEntity.ok(null);
    }
}
