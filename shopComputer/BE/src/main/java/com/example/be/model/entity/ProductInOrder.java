package com.example.be.model.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.math.BigDecimal;
import java.util.Objects;

@Entity
@Table
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class ProductInOrder {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long productInOrderId;
    private Long productId;
    private String productName;
    private String productCode;
    private BigDecimal productPrice;
    private String productImage;
    private Integer count;
    @ManyToOne
    private Cart cart;
    @ManyToOne
    private OrderMain orderMain;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        ProductInOrder that = (ProductInOrder) o;
        return Objects.equals(productId, that.productId)
                && Objects.equals(productName, that.productName)
                && Objects.equals(productCode, that.productCode)
                && Objects.equals(productPrice, that.productPrice)
                && Objects.equals(productImage, that.productImage);
    }

    @Override
    public int hashCode() {
        return Objects.hash(productId, productName, productCode, productPrice, productImage);
    }
}
