import React, { useEffect, useState } from "react";
import './sign_up.scss'
import { useNavigate } from 'react-router-dom'
import 'antd/dist/antd.css';
import { Space, Spin } from 'antd';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Sign_up = () => {
    const [state, setState] = useState({
        user: "",
        password: "",
        againPassword: "",
        name: "",
        address: ""
    })
    const [loading, setLoading] = useState(false)
    let navigate = useNavigate();
    const handleOnclick = async () => {
        let bool_emptyString = false
        for (const key in state) {
            if (state[key] === "") {
                const error_fields = document.querySelector('.error_fields')
                const error_input = document.querySelector(`input[name=${key}]`)
                error_input.classList.add('color_placeholder')
                error_fields.classList.remove('hiden_intro')
                bool_emptyString = true
            }
        }
        if (state['password'] !== state['againPassword']) {
            bool_emptyString = true
            const error_password = document.querySelector('.re_wrongPassword')
            error_password.classList.remove('hiden_intro')
        }
        if (!bool_emptyString) {
            setLoading(true)
            const results = await fetch('http://localhost:8000/api/customers/create', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    user: state.user,
                    password: state.password,
                    name: state.name,
                    address: state.address
                })
            })
            if (results.status === 201) {
                setLoading(prev => false)
                toast.success("Success")
                setTimeout(() => {
                    navigate('/')
                }, 1200)
                return
            }
            else {
                const incorrect = document.querySelector('.Incorrect')
                incorrect.classList.remove('hiden_intro')
            }
        }
    }
    return (
        <div className="sign_up">
            <div className="login-container">
                <div className="form_submit">
                    <div className="username">
                        <i class="fa-solid fa-user"></i>
                        <input type='text' placeholder="Enter UserName" value={state.user} name="user" onChange={(e) => {
                            setState({ ...state, user: e.target.value })
                            const incorrect = document.querySelector('.Incorrect')
                            incorrect.classList.add('hiden_intro')
                        }}></input>
                    </div>
                    <div className="password">
                        <i class="fa-solid fa-lock"></i>
                        <input type='password' placeholder="Enter Password" value={state.password} name="password" onChange={(e) => {
                            setState({ ...state, password: e.target.value })
                            const incorrect = document.querySelector('.Incorrect')
                            incorrect.classList.add('hiden_intro')
                        }}></input>
                    </div>
                    <div className="again_password">
                        <i class="fa-solid fa-lock"></i>
                        <input type='password' placeholder="Enter Again Password" value={state.againPassword} name="againPassword" onChange={(e) => {
                            setState({ ...state, againPassword: e.target.value })
                            const incorrect = document.querySelector('.Incorrect')
                            incorrect.classList.add('hiden_intro')
                        }}></input>
                    </div>
                    <span className="re_wrongPassword hiden_intro">Re-enter wrong password !</span>
                    <div className="name">
                        <i class="fa-solid fa-file-signature"></i>
                        <input type='text' placeholder="Enter Name" value={state.name} name="name" onChange={(e) => {
                            setState({ ...state, name: e.target.value })
                            const incorrect = document.querySelector('.Incorrect')
                            incorrect.classList.add('hiden_intro')
                        }}></input>
                    </div>
                    <div className="address">
                        <i class="fa-solid fa-location-dot"></i>
                        <input type='text' placeholder="Enter Address" value={state.address} name="address" onChange={(e) => {
                            setState({ ...state, address: e.target.value })
                            const incorrect = document.querySelector('.Incorrect')
                            incorrect.classList.add('hiden_intro')
                        }}></input>
                    </div>
                    <span className="error_fields hiden_intro">Please enter all fields completely !</span>
                    <div className="summit">
                        {

                            loading ? <button><Space size="middle"><Spin size="large" /></Space></button> : <button onClick={() => { handleOnclick() }}>SIGN</button>
                        }
                    </div>
                    {/* <span>Not a member?<a href="/sign_up">Sign up now <i class="fa-solid fa-arrow-right"></i></a></span> */}
                </div>
            </div>
        </div>
    )
}

export default Sign_up