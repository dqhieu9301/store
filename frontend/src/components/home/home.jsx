import React from "react";
import Slider from "react-slick";
import './home.scss'
import slide1 from '../../img/ms_banner_img1.webp'
import slide2 from '../../img/ms_banner_img2.webp'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
const Home = () => {
    return (
        <div className="home">
            <div className="slider">
                <Slide>
                    <div className="slide-item">
                        <img src={slide1}></img>
                        <div className="slide-item_content">
                            <h1>ĐẲNG CẤP CÙNG TÚI XÁCH MEEGO</h1>
                            <p>Bằng tất cả tâm huyết, năng lực vượt trội và quy mô không ngừng phát triển, Meego cam kết nỗ lực hết mình nhằm cung cấp sản phẩm và dịch vụ đúng với những giá trị mà khách hàng mong đợi.</p>
                            <button>XEM NGAY</button>
                        </div>
                    </div>
                    <div className="slide-item">
                        <img src={slide2}></img>
                        <div className="slide-item_content">
                            <h1>NỮ TÍNH CÙNG TÚI XÁCH MEEGO</h1>
                            <p>Bằng tất cả tâm huyết, năng lực vượt trội và quy mô không ngừng phát triển, Meego cam kết nỗ lực hết mình nhằm cung cấp sản phẩm và dịch vụ đúng với những giá trị mà khách hàng mong đợi.</p>
                            <button>XEM NGAY</button>
                        </div>
                    </div>
                </Slide>
            </div>
        </div>
    )
}

export default Home