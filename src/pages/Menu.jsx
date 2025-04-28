import ProductCard from "../components/ProductCard";
import { useState } from "react";

function Menu () {
    const product = [
        {
            id: 1,
            name: "Espresso",
            price: 2.5,
            description: "Rich and bold espresso shot.",
            image: "espresso.jpg",
            category: "coffee"
        },
        {
            id: 2,
            name: "Cappuccino",
            price: 3.5,
            description: "Creamy cappuccino with steamed milk.",
            image: "cappuccino.jpg",
            category: "coffee"
        },
        {
            id: 3,
            name: "Latte",
            price: 4.0,
            description: "Smooth latte with a touch of sweetness.",
            image: "latte.jpg",
            category: "coffee"
        },
        {
            id: 1,
            name: "Tea 1",
            price: 2.5,
            description: "Rich and bold espresso shot.",
            image: "espresso.jpg",
            category: "tea"
        },
        {
            id: 2,
            name: "Tea 2",
            price: 3.5,
            description: "Creamy cappuccino with steamed milk.",
            image: "cappuccino.jpg",
            category: "tea"
        },
        {
            id: 3,
            name: "Tea 3",
            price: 4.0,
            description: "Smooth latte with a touch of sweetness.",
            image: "latte.jpg",
            category: "tea"
        }

    ];

    const [selectedCategory, setSelectedCategory] = useState("all"); 
    const filteredProducts = selectedCategory === "all"
        ? product
        : product.filter(product => product.category === selectedCategory);

    return (
        <>
        <div className="sortbuttons" style={{display:"flex", flexDirection:"column", position:"absolute", top: "50%", left: "0px"}}>
            <button className="sortby-all" onClick={()=>setSelectedCategory("all")}>All</button>
            <button className="sortby-coffee" onClick={()=> setSelectedCategory("coffee")}>Coffee</button>
            <button className="sortby-tea" onClick={()=> setSelectedCategory("tea")}>Tea</button>
            <button className="sortby-food" onClick={()=> setSelectedCategory("food")}>Food</button>
        </div>
        <div className="product-grid">
            {filteredProducts.map((product =>
                <ProductCard product={product} key={product.id}/>
            ))}      
        </div>
        </>
    )
}

export default Menu;