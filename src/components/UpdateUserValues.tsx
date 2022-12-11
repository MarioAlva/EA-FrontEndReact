import React from 'react'

import { useNavigate } from "react-router-dom"
import * as userService from '../services/UserServices'
import { useEffect, useState } from 'react'
import { User } from '../models/User'
import Moment from 'react-moment'
import '../css/UpdateUser.css'
import '../css/Login.css'
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useForm } from "react-hook-form";
import { ImportsNotUsedAsValues } from 'typescript'

type UserForm = {
    name?: String;
    username?: String;
    email?: String;
    birthdate?:Date;
    password: String;
    //acceptTerms: boolean;
};

const UpdateUserValues: React.FC = () => {
    // let series : any[] = [];
    let clickCreateEvent = true
    const [user, setUser] = useState<User>();
    let navigate = useNavigate();
    const handleClick = () => navigate('/updateUser');
    let [registerView, setRegister] = useState(false);

    const sendCreateEvent = () => {
        clickCreateEvent = !clickCreateEvent
        console.log(clickCreateEvent)
    }
    const validationUpdate = Yup.object().shape({
        //Si activamos esto los parametros no pueden ser nulos
        /*
        username: Yup.string()
          .min(6, 'Username must be at least 6 characters')
          .max(20, 'Username must not exceed 20 characters'),
        birthdate: Yup.date()
          .max(new Date(), "You can't be born in the future!"),
          //.min(new Date().getFullYear() - new Date().setFullYear(13), "You must be 13!"),
        email: Yup.string()
          .email('Email is invalid'),*/

      });
      const {register, handleSubmit, formState: { errors }} = useForm<UserForm>({resolver: yupResolver(validationUpdate)});

     

        //return this.http.put(`${this.API_URI}/`, user);
      
        const handleReg = handleSubmit(async (values) => {
            console.log(values);
            if (!values.birthdate){
               values.birthdate = user?.birthdate;
            }
            if (!values.username){
                values.username = user?.username;
            }
            if (!values.name){
                values.name = user?.name;
            }
            if (!values.email){
                values.email = user?.email;
            }
            const res = await userService.updateUser(values);
            console.log(res);
            navigate('/updateUser');
        });
        const loadUser = async () => {
            const user = await userService.getProfile();
            const getUser = user.data as User;
            setUser(getUser);
          }
        useEffect(() => {
            loadUser()
          }, [])
    return (
        <div className="update-values-container">
    		{/* <form className="update-user" style={registerView ? {marginLeft: "0vw", paddingBottom: "20px"} : {paddingBottom: "20px", width: "450px"}} action="register" onSubmit={handleReg}  > */}
            <form className='update-user' style={registerView ? {paddingBottom: "20px", width: "450px", marginLeft: "0vw"} : {paddingBottom: "20px", width: "450px"}} action="register">

            <span className="update-user-header">Profile</span>
            {/* <form className='register' style={registerView ? {paddingBottom: "20px", width: "450px", marginLeft: "0vw"} : {paddingBottom: "20px", width: "450px"}} action="register" onSubmit={handleReg}> */}
                <div className='login-input-container'>
                    <label style={{marginBottom: "20px"}} htmlFor="regName">Name</label>
                    <input type="text" id="name" {...register("name")} placeholder="Enter your new name"/>
                    <p className="error-message">{errors.name?.message}</p>
                </div>
				<div style={{display: "inline-flex", justifyContent: "center", width: "80%"}}>
					<div style={{marginRight: "2%"}} className='login-input-container'>
                	    <label style={{marginBottom: "20px"}} htmlFor="regUsername">Username</label>
                	    <input style={{width: "95%"}} type="text" id="username" {...register("username")} placeholder="Enter your new username"/>
                        <p className="error-message">{errors.username?.message}</p>
                	</div>
					<div style={{marginRight: "-2.6%", marginLeft: "2%"}} className='login-input-container'>
                	    <label style={{marginBottom: "20px"}} htmlFor="regUsername">Birth date</label>
                	    <input style={{width: "95%"}} type="date" id="birthdate" {...register("birthdate")}/>
                        <p className="error-message">{errors.birthdate?.message}</p>
                	</div>
				</div>
				<div className='login-input-container'>
                    <label htmlFor="registerEmail">Email</label>
                    <input type="email" id="email" {...register("email")} placeholder="Enter your new email"/>
                    <p className="error-message">{errors.email?.message}</p>
                </div>
                <div className='login-input-container login-center'>
                    <button className='login-button' type="submit" onClick={handleReg}>Update user</button>
                </div>
                <div className="back-button" style={{marginRight: "280vw"} }onClick={handleClick}>
            </div>
            {/* </form> */}
                {/* <p>
                    <strong>Name: </strong> <input type="text" name="name" placeholder="Enter your new name"/>
                </p>
                <p>
                    <strong>Username: </strong><input type="text" name="username" placeholder="Enter your new username"/>
                </p>
                <p>
                    <strong>Email: </strong><input type="text" name="email" placeholder="Enter your new email"/>
                </p>
                <p>
                    <strong>Birthdate: </strong>
                    <Moment format="D MMM YYYY" withTitle>{user?.birthdate}</Moment>

                </p>
                <button className="update-user-button" onClick={() => sendCreateEvent()}><b>Save</b></button>
            <div style={{width: "62%", display: "inline-flex", justifyContent: "center", marginBottom: "20px"}}>
                <div style={{marginRight: "4%", display: "flex", flexDirection: "column", width: "62%"}}>
                </div>
            </div>
            
            <div className="back-button" style={{marginRight: "280vw"} }onClick={handleClick}>
            </div> */}
            </form>
    </div>		
    )
}
export default UpdateUserValues