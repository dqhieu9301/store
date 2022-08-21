import React, { useEffect, useState } from "react";
import './sign_in.scss'
import { useNavigate } from 'react-router-dom'
const Sign_in = () => {
    const [state, setState] = useState({
        user: "",
        password: ""
    })
    let navigate = useNavigate();
    const handleOnclick = async () => {
        const results = await fetch('http://localhost:8000/api/customers', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user: state.user,
                password: state.password
            })
        })
        if (results.status === 200) {
            navigate('/')
            return
        }
        else {
            const incorrect = document.querySelector('.Incorrect')
            incorrect.classList.remove('hiden_intro')
        }
    }
    return (
        <div className="sign_in">
            <div className="login-container">
                <div className="form_submit">
                    <div className="username">
                        <i class="fa-solid fa-user"></i>
                        <input type='text' placeholder="UserName" value={state.user} onChange={(e) => {
                            setState({ ...state, user: e.target.value })
                            const incorrect = document.querySelector('.Incorrect')
                            incorrect.classList.add('hiden_intro')
                        }}></input>
                    </div>
                    <div className="password">
                        <i class="fa-solid fa-lock"></i>
                        <input type='password' placeholder="Password" value={state.password} onChange={(e) => {
                            setState({ ...state, password: e.target.value })
                            const incorrect = document.querySelector('.Incorrect')
                            incorrect.classList.add('hiden_intro')
                        }}></input>
                    </div>
                    <p className="Incorrect hiden_intro">Incorrect account or password information !</p>
                    <div className="summit">
                        <button onClick={handleOnclick}>SIGN IN</button>
                    </div>
                    <span>Not a member?<a href="/sign_up">Sign up now <i class="fa-solid fa-arrow-right"></i></a></span>
                </div>
            </div>
        </div>
    )
}

export default Sign_in