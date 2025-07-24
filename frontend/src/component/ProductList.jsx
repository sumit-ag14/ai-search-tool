import React from "react";
import ProductCard from "./ProducCard";

function ProductList({products}){
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {
                    products.length>0?(
                    products.map(product => 
                            {                       
                            return <ProductCard key={product.id} product={product}/>
                            }
                        )
                    )
                    : (<div>No product found</div> )
                }
        </div>
    )
}
export default ProductList;