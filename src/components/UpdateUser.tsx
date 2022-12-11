import React from 'react'

import { useNavigate } from "react-router-dom"
import * as userService from '../services/UserServices'
import { useEffect, useState } from 'react'
import { User } from '../models/User'
import Moment from 'react-moment'
import '../css/UpdateUser.css'



const UpdateUser: React.FC = () => {
    // let series : any[] = [];
    let clickUpdate = true
    const [user, setUser] = useState<User>();
    const navigate = useNavigate();
    const handleClick = () => navigate('/profile');
    const handleClick2 = () => navigate('/updateUserValues');
	const loadUser = async () => {
		const user = await userService.getProfile();
        
        const getUser = user.data as User;
        setUser(getUser);
	  }
	useEffect(() => {
		loadUser()
	  }, [])


    return (
        <div className="update-user-container">
    		<form action="UpdateUser" className="update-user" style={clickUpdate ? {marginLeft: "0vw", paddingBottom: "20px"} : {paddingBottom: "20px", width: "450px"}}  >
            <span className="update-user-header">Profile</span>
                <p>
                    <strong>Name: </strong> {user?.name} 
                </p>
                <p>
                    <strong>Username: </strong>{user?.username}
                </p>
                <p>
                    <strong>Email: </strong>{user?.email}
                </p>
                <p>
                    <strong>Birthdate: </strong>
                    <Moment format="D MMM YYYY" withTitle>{user?.birthdate}</Moment>

                    {/* <Moment fromNow ago>{event.date?.toLocaleString("en-US")}</Moment> */}

                    {/* <strong>Birthdate: </strong>{user?.birthdate} */}
                </p>
                <button className="update-user-button" onClick={handleClick2}><b>Update Profile</b></button>
            <div style={{width: "62%", display: "inline-flex", justifyContent: "center", marginBottom: "20px"}}>
                <div style={{marginRight: "4%", display: "flex", flexDirection: "column", width: "62%"}}>
                </div>
            </div>
            {/* <div className="back-button" style={registerView || forgot ? {marginRight: "280vw"} : {}} onClick={() => {setRegister(false); setForgot(false)}}>
            </div> */}
            <div className="back-button" style={{marginRight: "280vw"} }onClick={handleClick}>
            </div>
            {/* <button className="create-event-button" onClick={() => sendCreateEvent()}><b>Crear Evento</b></button> */}
        </form>
    </div>		
    )
}
export default UpdateUser