
function ProductCard({product}) {
    
    function addToCart() {
        alert('added to cart');
    }

    return (
        <div className="productCard">
        <div className="product-img">
            <img src={product.img} alt={product.name} />
        </div>
        <div className="product-info">
            <h3 className="product-title">{product.name}</h3>
            <p className="product-description">{product.description}</p>
            <p className="product-price">{product.price}</p>
        </div>
        <div className="product-overlay">
            <button onClick={addToCart}></button>
        </div>
    </div>
)
}

export default ProductCard;