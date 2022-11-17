import React, { Component, useState } from 'react'
import '../css/Login.css'

const Login: React.FC = () => {
    let [register, setRegister] = useState(false)
    let [forgot, setForgot] = useState(false)
    return (
        <div className='login-container'>
            <form action="login" style={register || forgot ? {marginRight: "260vw", position: "absolute"} : {}} className='login-formContainer'>
            <span className="login-header">Log in</span>
                <div className='login-input-container'>
                    <label style={{marginBottom: "20px"}} htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" />
                </div>
                <div className='login-input-container'>
                    <label style={{marginBottom: "20px"}} htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" />
                </div>
                <span className="login-forgot">¿Te has olvidado la contraseña? <a onClick={() => setForgot(true)} className="auth-link">Click aqui</a></span>
                <div className='login-input-container login-center'>
                    <button className='login-button' type="submit">Login</button>
                </div>
                <span className="login-forgot login-center">¿Aún no tienes una cuenta? <a onClick={() => setRegister(true)} className="auth-link">Registrate</a></span>
            </form>
            <div className="back-button" style={register || forgot ? {marginRight: "280vw"} : {}} onClick={() => {setRegister(false); setForgot(false)}}>
            </div>
            <form className='register' style={register ? {paddingBottom: "20px", width: "450px", marginLeft: "0vw"} : {paddingBottom: "20px", width: "450px"}} action="register">
            <span className="login-header">Registrate</span>
                <div className='login-input-container'>
                    <label style={{marginBottom: "20px"}} htmlFor="reg-name">Name</label>
                    <input type="text" name="reg-name" id="reg-name" />
                </div>
                <div className='login-input-container'>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" />
                </div>
                <div className='login-input-container login-center'>
                    <button className='login-button' type="submit">Register</button>
                </div>
            </form>
            <form style={forgot ? {paddingBottom: "20px", marginLeft: "0vw"} : {paddingBottom: "20px"}} className="forgot" action="forgotPass">
            <span className="login-header">Recuperar contraseña</span>
                <div className='login-input-container login-center'>
                    <label style={{marginBottom: "20px"}} htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" />
                </div>
                <div className='login-input-container'>
                    <button className='login-button' type="submit">Recuperar</button>
                </div>
            </form>
        </div>
    )
}
export default Login