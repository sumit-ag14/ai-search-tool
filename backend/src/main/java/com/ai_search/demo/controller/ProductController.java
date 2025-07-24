package com.ai_search.demo.controller;

import com.ai_search.demo.Model.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.ai_search.demo.service.ProductService;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/products")
public class ProductController {

    @Autowired
    private ProductService productService;

    @GetMapping
    public ResponseEntity<?> getAllProducts(){

        List<Product> allProducts = productService.getAllProducts();
        if(allProducts.isEmpty()) return new ResponseEntity<>("No Products Found!", HttpStatus.NOT_FOUND);
        return new ResponseEntity<>(allProducts,HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public Product getProductById(@PathVariable String id){
        return productService.getProductById(id);
    }

    @PostMapping
    public  Product CreateProduct(@RequestBody Product product){
        return productService.createProduct(product);
    }

    @PutMapping("/{id}")
    public Product UpdateProduct(@PathVariable String id, @RequestBody Product product){
        return productService.updateProduct(id,product);
    }

    @DeleteMapping("/{id}")
    public void deleteProduct(@PathVariable String id) {
        productService.deleteProduct(id);
    }

    @GetMapping("/search")
    public ResponseEntity<?> searchProducts(@RequestParam String name) {
//        System.out.println("in seacch");
        List<Product> allProducts = productService.searchProductsByName(name);
        if(allProducts.isEmpty()) return new ResponseEntity<>("No Products Found!", HttpStatus.NOT_FOUND);
        System.out.println(allProducts.get(0).getName());
        return new ResponseEntity<>(allProducts,HttpStatus.FOUND);
    }
    @GetMapping("/category")
    public ResponseEntity<?> getProductsByCategory(@RequestParam String category) {
        List<Product> allProducts = productService.getProductsByCategory(category);
        if(allProducts.isEmpty()) return new ResponseEntity<>("No Products Found!", HttpStatus.NOT_FOUND);
        System.out.println(allProducts.get(0).getName());
        return new ResponseEntity<>(allProducts,HttpStatus.FOUND);
    }
    @GetMapping("/filter")
    public ResponseEntity<?> filterProductsByPrice(@RequestParam double min, @RequestParam double max) {
        List<Product> allProducts = productService.filterProductsByPrice(min, max);
        if(allProducts.isEmpty()) return new ResponseEntity<>("No Products Found!", HttpStatus.NOT_FOUND);
        System.out.println(allProducts.get(0).getName());
        return new ResponseEntity<>(allProducts,HttpStatus.FOUND);
    }
}
