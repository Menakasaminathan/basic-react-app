import React, { useState } from 'react'
import './LoginSignup.css'

import user_icon from '../Assets/User.png'
import email_icon from '../Assets/Email.png'
import password_icon from '../Assets/Password.png'


const LoginSignup = () =>{
    const [action, setAction] = useState("Login");

    return (
        <div className='container'>
            <div className="header">
                <div className="text">{action}</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                {action==="Login"? <div></div>:<div className="input">
                    <img src={user_icon} alt="" height="20px" width="20px" />
                    <input type="text" placeholder="Name" />
                </div>}

                <div className="input">
                    <img src={email_icon} alt="" height="20px" width="20px" />
                    <input type="email" placeholder="Email Id" />
                </div>
                <div className="input">
                    <img src={password_icon} alt="" height="20px" width="20px" />
                    <input type="password" placeholder="Password" />
                </div>
                {action==="Sign Up"?<div></div>:<div className="forgot-password">Recover Password <span>Click..!</span></div> }                   
                    <div className="submit-container">
                    <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
                    <div className={action==="Sign up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>

                </div>
                </div>
        </div>
    )
}
export default LoginSignup;