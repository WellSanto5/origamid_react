import { useState, useEffect } from 'react';

export function Products() {
    const urlProducts = "https://fakestoreapi.com/products"

    const [ products, setProducts ] = useState([])
    
    useEffect(() => {  
        fetch(urlProducts)
        .then(response => response.json())
        .then(data => setProducts(data))
    }, [])

    return(
        <div className="products">
            {
                products.map((product) => (
                    <>
                        <div className="product">
                            <h1>{product.title}</h1>
                            <p>{product.description}</p>
                            <img src={product.image}></img>
                        </div>
                    </>
                ))
            }
        </div>
    )
}