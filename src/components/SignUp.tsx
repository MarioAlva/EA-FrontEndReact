import React, { Component, useState, ChangeEvent, FormEvent, } from 'react'
import '../css/Login.css'
import * as userService from '../services/UserServices'
import { User } from "../models/User";
import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form";


const SignUp: React.FC = () => {

    const { register, handleSubmit , formState: {errors}, getValues} = useForm<User>({});
    let navigate = useNavigate();
    let [registerView, setRegister] = useState(true);
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
            <div className="back-button" onClick={() => navigate('/login')}>
            </div>
            <form className='register' style={registerView ? {paddingBottom: "20px", width: "450px", marginLeft: "0vw"} : {paddingBottom: "20px", width: "450px"}} action="register" onSubmit={handleReg}>
            <span className="login-header">Registrate</span>
                <div className='login-input-container'>
                    <label style={{marginBottom: "20px"}} htmlFor="regName">Name</label>
                    <input {...register("name", {required: "Please Enter Your Name!"})} type="text" name="name"/>
              <p className="error-message">{errors.name?.message}</p>
                </div>
				<div style={{display: "inline-flex", justifyContent: "center", width: "80%"}}>
					<div style={{marginRight: "2%"}} className='login-input-container'>
                	    <label style={{marginBottom: "20px"}} htmlFor="regUsername">Username</label>
                	    <input style={{width: "95%"}} type="text" id="username" {...register("username", {required: "Please Enter Your Username!"})}/>
                        <p className="error-message">{errors.username?.message}</p>
                	</div>
					<div style={{marginRight: "-2.6%", marginLeft: "2%"}} className='login-input-container'>
                	    <label style={{marginBottom: "20px"}} htmlFor="regUsername">Birth date</label>
                	    <input style={{width: "95%"}} type="date" id="birthdate" {...register("birthdate", {required: "Please Enter Your Birthdate!"})}/>
                	    <p className="error-message">{errors.birthdate?.message}</p>
                    </div>
				</div>
                <div className='login-input-container'>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" {...register("password", {
                    required: "Please Enter Your Password",
                    minLength: {value: 8, message: "Password must be at least 8 characters long!"}})}/>
                    <p className="error-message">{errors.password?.message}</p> 
                </div>
				<div className='login-input-container'>
                    <label htmlFor="repPassword">Repeat password</label>
                    <input {...register("confirmPassword", {
        validate: (match) => {
            const password = getValues("password")
            return match === password || "Passwords should match!"
        }
    })} type="password" id="confirmPassword" />
                <p className="error-message">{errors.confirmPassword?.message}</p>
                </div>
				<div className='login-input-container'>
                    <label htmlFor="registerEmail">Email</label>
                    <input {...register("email", {required: "Please Enter Your Email!",
        pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, 
            message: "Please Enter A Valid Email!"
        }})} type="email" id="email" />
        <p className="error-message">{errors.email?.message}</p>
                </div>
                <div className='login-input-container login-center'>
                    <button className='login-button' type="submit">Register</button>
                </div>
            </form>
            <form style={forgot ? {paddingBottom: "20px", marginLeft: "0vw"} : {paddingBottom: "20px"}} className="forgot" action="forgotPass">
            <span className="login-header">Recuperar contraseña</span>
                <div className='login-input-container login-center'>
                    <label style={{marginBottom: "48px", width: "0vw"}} htmlFor="forgot-email">Email</label>
                    <input type="email" name="forgot-email" id="forgot-email" />
                </div>
                <div className='login-input-container login-center'>
                    <button className='login-button' type="submit">Recuperar</button>
                </div>
            </form>
        </div>
    )
}
export default SignUp