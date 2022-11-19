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
                    <label style={{marginBottom: "20px"}} htmlFor="regName">Name</label>
                    <input type="text" name="regName" id="regName" />
                </div>
				<div style={{display: "inline-flex", justifyContent: "center", width: "80%"}}>
					<div style={{marginRight: "2%"}} className='login-input-container'>
                	    <label style={{marginBottom: "20px"}} htmlFor="regUsername">Username</label>
                	    <input style={{width: "95%"}} type="text" name="regUsername" id="regUsername" />
                	</div>
					<div style={{marginRight: "-2.6%", marginLeft: "2%"}} className='login-input-container'>
                	    <label style={{marginBottom: "20px"}} htmlFor="regUsername">Birth date</label>
                	    <input style={{width: "95%"}} type="date" name="regUsername" id="regUsername" />
                	</div>
				</div>
                <div className='login-input-container'>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" />
                </div>
				<div className='login-input-container'>
                    <label htmlFor="repPassword">Repeat password</label>
                    <input type="password" name="repPassword" id="repPassword" />
                </div>
				<div className='login-input-container'>
                    <label htmlFor="registerEmail">Email</label>
                    <input type="email" name="registerEmail" id="registerEmail" />
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
export default Login