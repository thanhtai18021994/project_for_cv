package com.example.be.model.service.order;

import com.example.be.enums.OrderStatusEnum;
import com.example.be.enums.ResultEnum;
import com.example.be.exception.MyException;
import com.example.be.model.entity.Computer;
import com.example.be.model.entity.OrderMain;
import com.example.be.model.entity.ProductInOrder;
import com.example.be.model.repo.ComputerRepo;
import com.example.be.model.repo.OrderMainRepo;
import com.example.be.model.service.computer.IComputerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class OrderService implements IOrderService{
    @Autowired
    OrderMainRepo orderMainRepo;
    @Autowired
    IComputerService computerService;
    @Override
    public Page<OrderMain> findAll(Pageable pageable) {
        return orderMainRepo.findAllByOrderByOrderStatusAscCreateTimeDesc(pageable);
    }

    @Override
    public Page<OrderMain> findByStatus(Integer status, Pageable pageable) {
        return orderMainRepo.findAllByOrderStatusOrderByCreateTimeDesc(status, pageable);
    }

    @Override
    public Page<OrderMain> findByBuyerEmail(String email, Pageable pageable) {
        return orderMainRepo.findAllByBuyerEmailOrderByOrderStatusAscCreateTimeDesc(email, pageable);
    }

    @Override
    public Page<OrderMain> findByBuyerPhone(String phone, Pageable pageable) {
        return orderMainRepo.findAllByBuyerPhoneOrderByOrderStatusAscCreateTimeDesc(phone, pageable);
    }

    @Override
    public OrderMain findOne(Long orderId) {
        OrderMain orderMain = orderMainRepo.findByOrderId(orderId);
        if(orderMain == null) {
            throw new MyException(ResultEnum.ORDER_NOT_FOUND);
        }
        return orderMain;
    }

    @Override
    public OrderMain finish(Long orderId) {
        OrderMain orderMain = findOne(orderId);
        if(!orderMain.getOrderStatus().equals(OrderStatusEnum.NEW.getCode())) {
            throw new MyException(ResultEnum.ORDER_STATUS_ERROR);
        }

        orderMain.setOrderStatus(OrderStatusEnum.FINISHED.getCode());
        orderMainRepo.save(orderMain);
        return orderMainRepo.findByOrderId(orderId);
    }

    @Override
    public OrderMain cancel(Long orderId) {
         OrderMain orderMain = findOne(orderId);
        if(!orderMain.getOrderStatus().equals(OrderStatusEnum.NEW.getCode())) {
            throw new MyException(ResultEnum.ORDER_STATUS_ERROR);
        }

        orderMain.setOrderStatus(OrderStatusEnum.CANCELED.getCode());
        orderMainRepo.save(orderMain);

        Iterable<ProductInOrder> products = orderMain.getProducts();
        for(ProductInOrder productInOrder : products) {
            Computer productInfo = computerService.findById(productInOrder.getProductId()).orElse(null);
            if(productInfo != null) {
                computerService.increaseStock(productInOrder.getProductId(), productInOrder.getCount());
            }
        }
        return orderMainRepo.findByOrderId(orderId);

    }
}
