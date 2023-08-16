import { useState, useEffect } from "react"

export const ProductLists = () => {
    const [Products, setProducts] = useState([]);
    console.log(Products);
    useEffect(() => {
        console.log('mounted');
        fetch("http://localhost:8000/products").
            then(response => response.json()).
            then(data => setProducts(data));
    }, [])

    return (
        <section>
            {Products.map((product) => (
                <div className="card" key={product.id}>
                    <p className="id">{product.id}</p>
                    <p className="name">{product.name}</p>
                    <p className="info">
                        <span> ${product.price}  </span>
                        <span className={product.in_stock ? "instock" : "unavailable"}>{product.in_stock ? "In Stcock" : "Not In Stock"}</span>
                    </p>
                </div>

            ))}
        </section>
    )
}
