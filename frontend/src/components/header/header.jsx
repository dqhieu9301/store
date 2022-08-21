import React from "react";
import './header.scss'
import logo_shop from '../../img/shop-icon.png'
import '../../img/fontawesome-free-6.1.0-web/css/all.css'
const Header = () => {
    return (
        <header>
            <div className="toolbar">
                <div className="search_bar">
                    <input placeholder="Search" />
                    <i class="fa-solid fa-magnifying-glass">
                    </i>
                </div>
                <div className="trademark">
                    <img src={logo_shop}></img>
                    <h2>BestBags</h2>
                </div>
                <div className="form_users">
                    <ul>
                        <li><i class="fa-solid fa-cart-arrow-down"><div className="number_product">0</div></i></li>
                        <li><a href="/sign_up">Sign Up</a></li>
                        <li><a href="/sign_in">Sign In</a></li>
                    </ul>
                </div>
            </div>
            <div className="nav_bar">
                <ul>
                    <li><a href="">All</a></li>
                    <li><a href="">Backpacks</a></li>
                    <li><a href="">Briefcases</a></li>
                    <li><a href="">Large Handbags</a></li>
                    <li><a href="">Mini Bags</a></li>
                    <li><a href="">Purses</a></li>
                    <li><a href="">Totes</a></li>
                    <li><a href="">Travel</a></li>
                </ul>
            </div>
        </header>
    )
}

export default Header