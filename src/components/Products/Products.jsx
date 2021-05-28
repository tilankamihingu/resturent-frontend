import React, { useContext } from 'react';
import { DataContext } from '../DataProvider';
import './Products.css';
import {Link} from 'react-router-dom';

function Products() {
    const value = useContext(DataContext)
    const [products] = value.products
    return (
        <>
            <div className="navbar">
                   <div className="logo">
                       <Link to="/">Bojuna</Link>
                   </div>
                   <nav>
                       <ul id="MenuItems">
                           <li><Link to="/">Home</Link></li>
                           <li><Link to="/products">Products</Link></li>
                           <li><Link to="/">Contacts</Link></li>
                       </ul>
                   </nav>
            </div>
        <div className="container-product">
            <h1>Products</h1>
            <div className="container-product-details">
            {
                products.map(product => (
                        <div className="product-card" key={product._id}>
                                <img src={product.images} alt="" />
                            <h2>{product.title}</h2>
                            <p>{product.description}</p>
                            <h2>Rs.{product.price}</h2>
                        </div>
                ))
            }
            </div>
        </div>
        </>
    )
}

export default Products
