function SortByCategory() {
    const [selectedCategory, setSelectedCategory] = useState("All"); 
    const filteredProducts = selectedCategory === ("All")
        ? product
        : product.filter(product => product.category === selectedCategory);

    return (
    <div className="sortbuttons" value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
        <button className="sortby-coffee" value="Coffee">Coffee</button>
        <button className="sortby-coffee" value="Tea">Tea</button>
        <button className="sortby-coffee" value="Food">Food</button>
    </div>
)
}

export default SortByCategory;