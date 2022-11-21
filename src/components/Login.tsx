import React, { Component, useState, ChangeEvent, FormEvent, } from 'react'
import '../css/Login.css'
import * as userService from '../services/UserServices'
import { User } from "../models/User";
import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form";


const Login: React.FC = () => {

    const { register, handleSubmit , formState: {errors}, getValues} = useForm<User>({});
    let navigate = useNavigate();
    let [registerView, setRegister] = useState(false);
    let [forgot, setForgot] = useState(false);

    const handleLog = handleSubmit(async (values) => {
        const res = await userService.LoginUser(values);
        console.log(res);
        navigate('/');
    });

    const handleReg = handleSubmit(async (values) => {
        const res = await userService.RegisterUser(values);
        console.log(res);
        navigate('/');
    });

    return (
        <div className='login-container'>
            <form action="login" className='login-formContainer' onSubmit={handleLog}>
            <span className="login-header">Log in</span>
                <div className='login-input-container'>
                    <label style={{marginBottom: "20px"}} htmlFor="registerEmail">Email</label>
                    <input {...register("email", {required: "Please Enter Your Email!",
        pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, 
            message: "Please Enter A Valid Email!"
        }})} type="email" id="email" />
        <p className="error-message">{errors.email?.message}</p>
                    <p className="error-message">{errors.email?.message}</p>
                </div>
                <div className='login-input-container'>
                    <label style={{marginBottom: "20px"}} htmlFor="password">Password</label>
                    <input type="password" id="password" {...register("password", {
                        required: "Please Enter Your Password",
                        minLength: {value: 8, message: "Password must be at least 8 characters long!"}
                        })}/>
                    <p className="error-message">{errors.password?.message}</p>
                </div>
                <span className="login-forgot">¿Te has olvidado la contraseña? <a onClick={() => setForgot(true)} className="auth-link">Click aqui</a></span>
                <div className='login-input-container login-center'>
                    <button className='login-button' type="submit">Login</button>
                </div>
                <span className="login-forgot login-center">¿Aún no tienes una cuenta? <a onClick={() => navigate('/signup')} className="auth-link">Registrate</a></span>
            </form>
          
        </div>
    )
}
export default Login