import React from "react";
// const Category =['All', 'Clothing', 'Shoes', 'Accessories'];
// const prices = ['< ₹1000', '₹1000–₹5000', '> ₹5000'];

const priceRanges = [
  { label: "All", min: 0, max: Infinity },
  { label: "Under ₹500", min: 0, max: 500 },
  { label: "₹500–₹1000", min: 500, max: 1000 },
  { label: "Above ₹1000", min: 1000, max: Infinity },
];

function FilterBar({Category,onCategoryChange,onPriceChange,onSortChange,onClearFilters}){
return (
<div className="bg-white p-4 shadow rounded mb-6">
    <div className="mb-4">
        <h2 className="font-semibold mb-2 text-gray-700">Category</h2>
        <div className="flex flex-wrap gap-2">
            {
            Category.map(cat=> 
            (
                <button key={cat} onClick={()=>onCategoryChange(cat)}
                className="px-3 py-1 bg-blue-100 text-blue-700 rounded hover:bg-blue-200">
                    {cat}
                </button>
            )
            )
            }
        </div>
    </div>
    <div>
        <h2 className="font-semibold mb-2 text-gray-700">Price</h2>
        <div className="flex flex-wrap gap-2">
            {
            priceRanges.map(price=> 
            (
                <button key={price.label} onClick={()=>onPriceChange(price.min,price.max)}
                className="px-3 py-1 bg-blue-100 text-blue-700 rounded hover:bg-blue-200">
                    {price.label} 
                </button>
            )
            )
            }
        </div>
    </div>
    <select onChange={(e)=> onSortChange(e.target.value)} className="px-3 py-1 border rounded">
        <option value="">Sort By</option>
        <option value="lowToHigh">Price: Low to High</option>
        <option value="highToLow">Price: High to Low</option>
    </select>
    <button
    onClick={onClearFilters}
    className="px-3 py-1 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
    >
    Clear Filters
</button>
</div>
)
}
export default FilterBar;