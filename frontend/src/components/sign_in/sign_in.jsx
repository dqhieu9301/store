import React, { useEffect, useState } from "react";
import './sign_in.scss'
import { useNavigate } from 'react-router-dom'
import 'antd/dist/antd.css';
import { Space, Spin } from 'antd';
import { useCookies } from 'react-cookie';
const Sign_in = () => {
    const [state, setState] = useState({
        user: "",
        password: ""
    })
    const [loading, setLoading] = useState(false)
    const [cookies, setCookie] = useCookies(['token']);
    let navigate = useNavigate();
    const handleOnclick = async () => {
        let bool_check = false
        if (state.user === "" || state.password === "") {
            const missing = document.querySelector('.missing')
            missing.classList.remove('hiden_intro')
            bool_check = true
        }
        if (!bool_check) {
            setLoading(prve => true)
            const results = await fetch('http://localhost:8000/api/customers', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "user": state.user,
                    "password": state.password
                })
            })
            let data = await results.json()
            if (data.message === "OK") {
                setCookie("token", data.token, { path: '/' })
                navigate('/')
                return
            }
            else {
                if (data.error === "incorrect") {
                    setLoading(prve => false)
                    console.log("error")
                    const incorrect = document.querySelector('.Incorrect')
                    incorrect.classList.remove('hiden_intro')
                }
            }
        }
    }
    return (
        <div className="sign_in">
            <div className="sign_in_container">
                <div className="come_back">
                    <a href="/">Trang trủ </a>
                    <t><i class="fa-solid fa-caret-right"></i>Tài khoản</t>
                </div>
                <div className="form_submit">
                    <div className="form_submit_container">
                        <h1>ĐĂNG NHẬP</h1>
                        <div className="username">
                            <input type='text' placeholder="Tài khoản" value={state.user} onChange={(e) => {
                                setState({ ...state, user: e.target.value })
                                const incorrect = document.querySelector('.Incorrect')
                                incorrect.classList.add('hiden_intro')
                            }} onClick={() => {
                                const missing = document.querySelector('.missing')
                                missing.classList.add('hiden_intro')
                            }} ></input>
                        </div>
                        <div className="password">
                            <input type='password' placeholder="Mật khẩu" value={state.password} onChange={(e) => {
                                setState({ ...state, password: e.target.value })
                                const incorrect = document.querySelector('.Incorrect')
                                incorrect.classList.add('hiden_intro')
                            }} onClick={() => {
                                const missing = document.querySelector('.missing')
                                missing.classList.add('hiden_intro')
                            }} ></input>
                        </div>
                        <p className="missing hiden_intro">Vui lòng nhập đủ cả tài khoản và mật khẩu !</p>
                        <p className="Incorrect hiden_intro">Thông tin tài khoản hoặc mật khẩu không đúng !</p>
                        <div className="summit">
                            {
                                loading ? <button className="btn_loading"><Space size="middle"><Spin size="large" /></Space></button> : <button className="login_submit" onClick={() => { handleOnclick() }}>Đăng nhập</button>
                            }
                        </div>
                        <a href="/sign_up">Đăng ký</a>
                        <a href="">Quên mật khẩu ?</a>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sign_in