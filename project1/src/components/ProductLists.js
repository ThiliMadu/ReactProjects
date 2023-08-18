import { useState, useEffect, useCallback } from "react"
import { useFetch } from "../hooks/useFetch";

export const ProductLists = () => {
    // const [Products, setProducts] = useState([]);
    const [url, setUrl] = useState('http://localhost:8000/products');
   const {data : Products,loading,error} = useFetch(url,{content:'ABC'});

    // const fetchProducts = useCallback( async () => {
    //     const response = await fetch(url);
    //     const data = await response.json();
    //     setProducts(data);
    // },[url])
   

    // useEffect(() => {
    //     // fetch(url).
    //     //     then(response => response.json()).
    //     //     then(data => setProducts(data));
    //     fetchProducts();
    //     console.log('-.....');

    // }, [fetchProducts])


    return (
        <section>
            <div className="filter">
                <button onClick={() => setUrl('http://localhost:8000/products')}>All</button>
                <button onClick={() => setUrl('http://localhost:8000/products?in_stock=true')}>In Stock</button>
                {/* <button onClick={()=>setCounter(counter+1)}>{counter}</button> */}
                {loading && <p>Loading in progress...</p>}
                {/* {loading && <p className="loading"><img src={loading} alt=""></img></p>} */}
                {error && <p>{error}</p>}

            </div>
            {Products && Products.map((product) => (
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
