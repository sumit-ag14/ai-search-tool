package com.ai_search.demo.service;

import com.ai_search.demo.Model.Product;

import java.util.List;

public interface ProductService {
    List<Product> getAllProducts();

    Product getProductById(String id);

    Product createProduct(Product product);

    Product updateProduct(String id, Product product);

    void deleteProduct(String id);

    List<Product> getProductsByCategory(String category);

    List<Product> searchProductsByName(String name);

    List<Product> filterProductsByPrice(double minPrice, double maxPrice);
}
