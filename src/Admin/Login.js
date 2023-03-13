import React, { useState, useEffect } from 'react';
import './Login.css';
import { useNavigate } from "react-router-dom";

import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from "jwt-decode";

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const styles = {
        mainContainer: {
            backgroundImage: `url(${"front-desk-management/public/Image/backgroundImage.png"})`
        }
    };

    const EmailHandler = (event) => {
        setEmail(event.target.value);
    };
    const PasswordHandler = (event) => {
        setPassword(event.target.value);
    };
    useEffect(() => {
        if (isLoggedIn) {
            navigate("/visitors");
        }
    }, [isLoggedIn, navigate]);

    const SubmitHandler = async (event) => {
        event.preventDefault();
        setEmail('');
        setPassword('');
        try {
            var response = {
                email,
                password
            }
            // var result = await adminActions.postAdminLogin(response);
            axios.post('https://localhost:7194/api/Admin/adminLogin',response)

                .then((result) => {
                    if (result === true) {
                        setIsLoggedIn(true);
                    }
                    else {
                        setError("*Invalid email or password");
                    }
                })

            // if (result === true) {
            //     setIsLoggedIn(true);
            // }
            // else {
            //     setError("*Invalid email or password");
            // }
        } catch (error) {
            console.error(error);
        }

    };

    return (

        <div>
            <form onSubmit={SubmitHandler}>
                <div className="wrapper" style={styles.mainContainer} >
                    <div className="container main">
                        <div className="row login-row">
                            <div className="col-md-6 side-image">
                                <div className="main">
                                    <img src="/Image/desk.png" alt="desk" className='img2' />
                                </div>
                            </div>
                            <div className="col-md-6 right">
                                <div className="input-box">
                                    <header>
                                        <div className="logo">
                                            <img src="/Image/swagatLogo3.png" alt="logo" className="img1" />
                                        </div>
                                    </header>
                                    <div className="input-field">
                                        <input type="text" className="input" id="email" required value={email} onChange={EmailHandler} />
                                        <label htmlFor="email">Email</label>
                                    </div>
                                    <div className="input-field">
                                        <input type="password" className="input" id="password" required value={password} onChange={PasswordHandler} />
                                        <label htmlFor="password">Password</label>
                                    </div>


                                    <div className="input-field">
                                        <input type="submit" className="submit" value="Login" />
                                        {error && <p className='error'>{error}</p>}
                                    </div>
                                    <div class="Separator">

                                        <span>Or</span>


                                    </div>
                                    <div GoogleSSO>
                                        <GoogleLogin
                                            onSuccess={credentialResponse => {
                                                console.log(credentialResponse.credential);
                                                var decoded = jwt_decode(credentialResponse.credential);
                                                console.log(decoded);
                                            }}
                                            onError={() => {
                                                console.log('Login Failed');
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>

    )
}

export default Login;
