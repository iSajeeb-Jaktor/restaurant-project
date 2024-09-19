import React, { useContext, useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import loginImg from '../../assets/others/authentication2.png'
import { Link } from 'react-router-dom';
import { AuthContest } from '../../Providers/AuthProvider';



const Login = () => {

    const captchaRef = useRef(null)
    const [disabled, setDisabled] = useState(true)

    const {signIn} = useContext(AuthContest)

    useEffect ( () =>{
        loadCaptchaEnginge(6); 
    }, [])

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
        })

    }

    const handleValidateCaptcha = () => {
        const user_captcha_value = captchaRef.current.value;
        if(validateCaptcha(user_captcha_value)){
            setDisabled(false);
        }
        else{
            setDisabled(true);
        }
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center md:w-1/2 lg:text-left">
                    <img src={loginImg} alt="" />
                </div>
                <div className="card md:w-1/2 bg-base-100  max-w-sm  shadow-2xl">
                <h3 className='text-center text-3xl font-bold text-black'>Login</h3>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="Type here" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="Enter your password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <LoadCanvasTemplate />
                            </label>
                            <input type="text" ref={captchaRef} name='captcha' placeholder="type the captcha above" className="input input-bordered" required />
                            <button onClick={handleValidateCaptcha} className="btn btn-outline hover:bg-yellow-600 btn-xs mt-2">Validate</button>
                        </div>
                        <div className="form-control mt-6">
                            <input disabled={disabled} className="btn text-black bg-white hover:bg-yellow-600 hover:text-white " type="submit" value="Login" />
                            <Link to='/signUp'><p className='text-xs mt-5 text-center text-yellow-600 font-medium'>New here? Create a New Account</p></Link>
                            <p className='text-xs mt-3 text-center'>Or sign in with</p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login; <h2>Please login</h2>