package com.ai_search.demo.repository;

import com.ai_search.demo.Model.Product;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface ProductRepository extends MongoRepository<Product,String> {
    List<Product> findByCategoryIgnoreCase(String Category);
    List<Product> findByNameContainingIgnoreCase(String name);
    List<Product> findByPriceBetween(double min, double max);
}
