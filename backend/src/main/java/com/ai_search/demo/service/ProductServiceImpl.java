package com.ai_search.demo.service;

import com.ai_search.demo.Model.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.ai_search.demo.repository.ProductRepository;

import java.util.List;
import java.util.Optional;

@Service
public class ProductServiceImpl implements ProductService{
    @Autowired
    private ProductRepository productRepository;

    @Override
    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    @Override
    public Product getProductById(String id) {
        return productRepository.findById(id).orElse(null);
    }

    @Override
    public Product createProduct(Product product) {
        return productRepository.save(product);
    }

    @Override
    public Product updateProduct(String id, Product product) {
        Optional<Product> existing = productRepository.findById(id);
        if(existing.isPresent()){
            Product updated = existing.get();
            updated.setName(product.getName());
            updated.setCategory(product.getCategory());
            updated.setDescription(product.getDescription());
            updated.setImage(product.getImage());
            updated.setPrice(product.getPrice());
            return productRepository.save(updated);
        }
        return null;
    }

    @Override
    public void deleteProduct(String id) {
        productRepository.deleteById(id);
    }

    @Override
    public List<Product> getProductsByCategory(String category) {
        return productRepository.findByCategoryIgnoreCase(category);
    }

    @Override
    public List<Product> searchProductsByName(String name) {
        return productRepository.findByNameContainingIgnoreCase(name);
    }

    @Override
    public List<Product> filterProductsByPrice(double minPrice, double maxPrice) {
        return productRepository.findByPriceBetween(minPrice, maxPrice);
    }
}
