import React, { useContext } from 'react';
import Menu from '../images/menu.png';
import Banner from '../images/banner.png';
import Card1 from '../images/card1.png';
import Card2 from '../images/card2.png';
import Leaf from '../images/leaf.png';
import Take from '../images/take.png';
import Room from '../images/room.png';
import Meeting from '../images/meeting.png';
import Coca from '../images/coca.png';
import Nestle from '../images/nestle.png';
import Elephant from '../images/elephant.png';
import Ceylon from '../images/ceylon.png';
import './Home.css';
import { DataContext } from '../DataProvider';
import {Link} from 'react-router-dom';

const Home = () => {
    const value = useContext(DataContext);
    const [products] =value.products
    return (
        <>
        <div className="header">
           <div className="container">
               <div className="navbar">
                   <div className="logo">
                       <Link to="/">Bojuna</Link>
                   </div>
                   <nav>
                       <ul id="MenuItems">
                           <li><Link to="/">Home</Link></li>
                           <li><Link to="/products">Products</Link></li>
                           <li><Link to="/">Home</Link></li>
                       </ul>
                   </nav>
                   <img src={Menu} className="menu-icon" alt="" />
               </div>
               <div className="side"></div>
               <div className="row">
                   <div className="col-2">
                       <h1>Food</h1>
                       <h2>choose your Items</h2>
                       <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi aspernatur rem repellat, asperiores inventore dolores.</p>
                       <input type="text" placeholder="search items"/>
                       <Link to="/products" className="btn">View Foods</Link>
                   </div>
                   <div className="col-2">
                       <img src={Banner} alt="" />
                   </div>
               </div>
           </div>
        </div>
        <div className="container-2">
            <div className="row-details">
                <h3><span></span>Some Top Resturent For Dining in Or Take Away</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Corporis excepturi iusto quaerat dolorem tenetur accusantium repellat deleniti rerum, praesentium officia voluptates exercitationem nobis at fugiat veritatis aperiam totam soluta quam!</p>
            </div>
        </div>
        <div className="container-3">
            <div className="card-details">
                <div className="card">
                    <img src={Card1} alt="" />
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum enim nihil, mollitia ea laudantium excepturi.</p>
                </div>
                <div className="card">
                    <img src={Card2} alt="" />
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum enim nihil, mollitia ea laudantium excepturi.</p>
                </div>
            </div>
        </div>
        <div className="container-4">
            <div className="container-inner">
                <img src={Leaf} alt="" />
                <div className="inner-details">
                    <h1>advance booking</h1>
                    <input type="text" />
                   <div className="days">
                       <select>
                           <option>Date</option>
                           <option>Date</option>
                       </select>
                       <select>
                           <option>Time</option>
                           <option>Date</option>
                       </select>
                       <select>
                           <option>Guests</option>
                           <option>Date</option>
                       </select>
                   </div>
                </div>
            </div>
        </div>
        <div className="container-5">
            <div className="container-5-details">
                <h3><span></span>Our Servvices</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Corporis excepturi iusto quaerat dolorem tenetur accusantium repellat deleniti rerum, praesentium officia voluptates exercitationem nobis at fugiat veritatis aperiam totam soluta quam!</p>
            </div>
            <div className="take">
                <p>take away or dining</p>
                <img src={Take} alt="" />
            </div>
            <div className="room">
                <p>room services</p>
                <img src={Room} alt="" />
            </div>
            <div className="meeting">
                <p>Conferences</p>
                <img src={Meeting} alt="" />
            </div>
        </div>
        <div className="container-6">
            <h1>Trending Items</h1>
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
        <div className="logos">
            <img src={Coca} alt="" />
            <img src={Ceylon} alt="" />
            <img src={Elephant} alt="" />
            <img src={Nestle} alt="" />
        </div>

        <div className="short-footer">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo eaque, praesentium voluptate accusantium eos provident ullam quis ducimus odio perspiciatis ex doloribus sed sint error ab explicabo similique recusandae velit!</p>
        </div>

        <div className="footer">
            <div className="footer-container">
                <div className="one-container">
                    <h1>Bojuna</h1>
                    <p>Lorem ipsum dolor sit amet<br></br> consectetur adipisicing elit.</p>
                </div>
                <div className="second-container">
                    <ul>
                        <li>About</li>
                        <li>Career</li>
                        <li>Team</li>
                        <li>Owner Profile</li>
                        <li>Services</li>
                        <li>Blog</li>
                    </ul>
                </div>
                <div className="third-container">
                    <h2>Adress</h2>
                    <p>17/8, dharmapala road, main street, galle</p>
                    <h2>Phone</h2>
                    <p>507-476-6004</p>
                    <h2>Email</h2>
                    <p>tilankamihingu@gmail.com</p>
                </div>
            </div>
        </div>
    </> 
    )
}

export default Home
