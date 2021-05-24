import React, { useContext } from 'react';
import { DataContext } from '../DataProvider';

function Products() {
    const value = useContext(DataContext)
    const [products] = value.products
    return (
        <div className="container-6">
            <h1>Products</h1>
            <div className="container-6-details">
            {
                products.map(product => (
                        <div className="container-6-card">
                            <img src={product.images} alt="" />
                            <h2>{product.title}</h2>
                            <p>{product.description}</p>
                            <h2>Rs.{product.price}</h2>
                        </div>
                ))
            }
            </div>
        </div>
    )
}

export default Products
