import Header from './component/Header';
import SearchBar from './component/SearchBar';
import FilterBar from './component/FilterBar';
import ProductList from './component/ProductList';
// import products from './data/product';
import {React,useState,useEffect} from "react";

function App() {
  const [products,setProducts]= useState([]);
  const [filteredProducts,setFilteredProducts]= useState([]);
  const [Category,setCategory]=useState([])
  const [resetSignal, setResetSignal] = useState(0);
  const [priceFilter, setPriceFilter] = useState({ min: 0, max: Infinity });
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOption, setSortOption] = useState(null); 
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    fetch('http://localhost:8080/api/products')
    .then(res => res.json())
    .then(data=> {
      setProducts(data);
      setFilteredProducts(data);

      const uniqueCategories=['All',...new Set(data.map(p=> p.category))]
      setCategory(uniqueCategories);
    });
    return () => {
      
    };
  }, []);
  const onSearch=(query)=>{
    setSearchQuery(query);
  }
  const onCategoryChange=(category)=>{
    setSelectedCategory(category)
  }
  const onPriceChange=(priceMin,priceMax)=>{  
     setPriceFilter({min: priceMin,max: priceMax});
  }
   const onClearFilters=()=>{  
      // setCategory([]);
      setPriceFilter({ min: 0, max: Infinity });
      setSearchQuery('');
      setSortOption(null);
      setResetSignal(1);
      setFilteredProducts(products);
      setSelectedCategory('All');
  }
  const onSortChange=(sortOrder)=>{  
    setSortOption(sortOrder)
  }

  const applyFilters = () => {
  let filtered = products;

  if (selectedCategory && selectedCategory !== "All") {
    filtered = filtered.filter(p => p.category === selectedCategory);
  }

  if (priceFilter) {
    filtered = filtered.filter(
      p => p.price >= priceFilter.min && p.price <= priceFilter.max
    );
  }

  if (searchQuery) {
    filtered = filtered.filter(p =>
      p.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  if (sortOption === "lowToHigh") {
    filtered = filtered.sort((a, b) => a.price - b.price);
  } else if (sortOption === "highToLow") {
    filtered = filtered.sort((a, b) => b.price - a.price);
  }

  setFilteredProducts(filtered);
};


  useEffect(() => {
      applyFilters();
    }, [selectedCategory, priceFilter, searchQuery, sortOption]);
  return (
    <div className="min-h-screen bg-gray-100 px-4">
      <Header />
      <SearchBar resetSignal={resetSignal} onSearch={onSearch}/>
      <FilterBar Category={Category} onCategoryChange={onCategoryChange}
       onPriceChange={onPriceChange} onSortChange={onSortChange}
       onClearFilters={onClearFilters}
       />
      <ProductList products={filteredProducts}/>
    </div>
  );
}
export default  App;