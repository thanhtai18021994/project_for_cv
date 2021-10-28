package com.example.be.model.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.*;
import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class OrderMain {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long orderId;
    private String buyerEmail;
    private String buyerName;
    private String buyerPhone;
    private String buyerAddress;
    @ColumnDefault("0")
    private Integer orderStatus;
    @CreationTimestamp
    private LocalDateTime createTime;
    @UpdateTimestamp
    private LocalDateTime updateTime;
    private BigDecimal orderAmount;
    @OneToMany(cascade = CascadeType.ALL,
            fetch = FetchType.LAZY,
            mappedBy = "orderMain")
    private Set<ProductInOrder> products = new HashSet<>();
    public OrderMain(User user){
        this.buyerEmail=user.getEmail();
        this.buyerName=user.getFullName();
        this.buyerAddress=user.getAddress();
        this.buyerPhone=user.getNumberPhone();
        this.buyerAddress=user.getAddress();
        this.orderStatus=0;
        this.orderAmount=user.getCart().getProductInOrders().stream()
                .map(item->item.getProductPrice().multiply(new BigDecimal(item.getCount())))
                .reduce(BigDecimal::add)
                .orElse(new BigDecimal(0));
    }
}
