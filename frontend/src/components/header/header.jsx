import React, { useState } from "react";
import './header.scss'
import logo from '../../img/logo_menu.webp'
import '../../img/fontawesome-free-6.1.0-web/css/all.css'
import { useCookies } from 'react-cookie';
import jwt_decode from "jwt-decode";
const Header = () => {
    const [form_login, setform_login] = useState(false)
    const [cookies, setCookie, removeCookie] = useCookies(['token']);
    return (
        <header>
            <div className="header_contact">
                <div className="header_contact_container">
                    <span>
                        <i class="fa-solid fa-mobile-screen"></i>
                        <a href="">0961 035 394</a>
                    </span>
                    <span>
                        <i class="fa-solid fa-envelope"></i>
                        <a href="">dinhhieu9301@gmail.com</a>
                    </span>
                    <span>
                        <i class="fa-solid fa-location-dot"></i>
                        <a href="">Hệ thống cửa hàng</a>
                    </span>
                </div>
            </div>
            <div className="nav_bar">
                <div className="nav_bar_container">
                    <a href="/"><img src={logo}></img></a>
                    <ul>
                        <li><a href="">Trang trủ</a></li>
                        <li className="parent_class"><a href="">Sản phẩm<i class="fa-solid fa-caret-down"></i></a>
                            <ul className="children_nav">
                                <li><a href="">Hàng Mới Về</a></li>
                                <li><a href="">Túi Xách</a></li>
                                <li><a href="">Sản Phẩm Bán Chạy</a></li>
                                <li><a href="">Sản Phẩm Khuyến Mãi</a></li>
                            </ul>
                        </li>
                        <li><a href="">Blog</a></li>
                        <li><a href="">Liên Hệ</a></li>
                        <li><a href="">Giới thiệu</a></li>
                    </ul>
                    <div className="toolsbar">
                        <i class="fa-solid fa-cart-plus">
                            <span className="number_product">0</span>
                        </i>
                        <i class="fa-solid fa-user" onClick={() => { setform_login(!form_login) }}>
                            <ul style={{ display: form_login ? "inherit" : "none" }}>
                                {cookies.token ?
                                    <>
                                        <li><a href="">{jwt_decode(cookies.token).name}</a></li>
                                        <li onClick={() => {
                                            removeCookie("token", { path: '/' })
                                        }}>Đăng xuất</li>
                                    </>
                                    :
                                    <>
                                        <li><a href="/sign_in">Đăng Nhập</a></li>
                                        <li><a href="/sign_up">Đăng Ký</a></li>
                                    </>}
                            </ul>
                        </i>
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header