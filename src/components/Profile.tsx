import React from 'react'
import '../css/Profile.css'
import { useNavigate } from "react-router-dom"
import { useSearchParams } from "react-router-dom"
import * as userService from '../services/UserServices'
import { useEffect, useState } from 'react'
import { User } from '../models/User'




const Profile: React.FC = () => {
	let series : any[] = [];
    const navigate = useNavigate();
    const handleClick = () => navigate('/updateuser');
    let username : string = "";
    let us : string = "";
    let user : any;
    let userProfile : User[] = [];

	const loadUser = async () => {
		const res = await userService.getProfile();
        console.log(res);
        console.log("+++++++++");
        console.log(res.data.username);
        username = res.data.username;
        console.log("------------");
        console.log(username);
        user = res.data;
        userProfile.push(res.data);

        console.log(userProfile);
        console.log("bbbbb");
        console.log(userProfile[0].username);
        const us = userProfile[0].username;
        console.log(us);

	  }
	useEffect(() => {
		loadUser()
	  }, [])

    return (
        <div className="profile-container">
            <div className="profile-header">
                <div className="profile-image"></div>
			</div>                        
            <div className="profile-titles">{us}</div>
     

            {/* <div className="profile-titles">AAA</div> */}

				{/* <div style={{width: "50%", overflowY: "scroll", overflowX: "hidden"}}>
					{userProfile.map((user) => (
                        <div className="profile-titles">¨{user.username}</div>
						 <div className="eventscreen-card">
						 	<div style={{width: "100%"}}>
                                 <div className="profile-titles">¨{user.username}</div>
						 		 <div className="eventscreen-card-title">{event.title}</div> 
						 		 <div className="eventscreen-card-description">{event.description}</div>
						 	</div>
						</div>
					))}

				</div>
				<div style={{width: "50%"}}>
				</div> */}
			</div>
        
            
    )
}
export default Profile