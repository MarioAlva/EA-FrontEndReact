import React from 'react'
import '../css/Profile.css'
import { useNavigate } from "react-router-dom"
import * as userService from '../services/UserServices'
import { useEffect, useState } from 'react'
import { User } from '../models/User'




const Profile: React.FC = () => {
    const navigate = useNavigate();
    const handleClick = () => navigate('/updateuser');
    const [user, setUser] = useState<User>();

	const loadUser = async () => {
		const user = await userService.getProfile();
        const getUser = user.data as User;
        setUser(getUser);
	  }
	useEffect(() => {
		loadUser()
	  }, [])

    return (
        <div className="profile-container">
            <div className="profile-header">
                <div className="profile-image"></div>
			</div>                        
            <div className="profile-titles">{user?.username}</div>
            <button className="profile-config-button" onClick={handleClick}>Configuration</button>
		</div>
        
            
    )
}
export default Profile