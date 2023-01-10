import React, { useEffect, useState } from 'react'
import '../css/Serie.css'
import '../css/Chat.css'
import * as serieService from '../services/SerieServices'
import { useParams } from 'react-router-dom'
import Ser from '../models/Serie'
import { useNavigate } from "react-router-dom"
import io from 'socket.io-client';
import { User } from '../models/User';
import * as userService from '../services/UserServices'
import Chat from './Chat';
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeartBroken } from "@fortawesome/free-solid-svg-icons";
  
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const socket = io('http://localhost:3001');
//const socket = io('http://api1.tvtracker.tk');

const Serie: React.FC = () => {
    
	const { id } = useParams<{ id: string }>();
	const [serie, setSerie] = useState<Ser>();
    const navigate = useNavigate();
    const handleClick = () => navigate('/chat');

    const [username, setUsername] = useState("");
    const [room, setRoom] = useState("");
    const [showChat, setShowChat] = useState(false);
    const [user, setUser] = useState<User>();
    
    const [follow, setFollow] = useState(false);
    const [buttonText, setButtonText] = useState('Add to favorite');
    
    const joinRoom = () => {
        if (user?.username !== "" && serie?._id !== "") {
            console.log(user?.username);
          socket.emit("join_room", serie?._id);
          setShowChat(true);
        }
      };
    const loadUser = async () => {

		    const user = await userService.getProfile();
            
            const getUser = user.data as User;
            setUser(getUser);     
            console.log(getUser);
            console.log("kajhgklajshfklashg");
            const serie = await serieService.getSerie(id as string);
            setSerie(serie.data);
            
            const filt = getUser.serie?.some((obj) => obj === serie.data._id);
            if (filt === true){
                setFollow(true);
            }
            else{
                setFollow(false);
            }
            console.log(filt);
            console.log("bbbbb");
            console.log(getUser.serie);
            console.log("aaaaa");
            console.log(serie.data);
            console.log(user);
        
	}
	useEffect(() => {
		loadUser();
	  }, [])


	// useEffect(() => {
	// 	load();
	// }, []);
   
    const addSerieFav = async () => {
        console.log(user?._id);
        console.log(serie?._id);
        
        console.log("aaaaaaaaaaaaaaa");
        setFollow(true);
        setButtonText('Remove from favorite');
        const added = await userService.addSerieFav(user?._id as string, serie?._id as string);
        console.log(added);
    }
    const delSerie = async () => {
        console.log("deleted");
        setFollow(false);
        setButtonText('Add to favorite');
        const deleted = await userService.delSerie(user?._id as string, serie?._id as string);
        console.log(deleted);
    }
    
    return (
        <div className='serie-container'>
            
            {!showChat ? (
            <div className='joinChatContainer'>
                <div id='trailer_serie'>
                    <h1 className='serie-title'>
                        {serie?.title}
                    </h1>
                </div>
                    <div id='serieInfo_container'>

                    <div id='sinopsis_container'>
                        <button onClick={joinRoom}>Join a room to chat about the serie</button>
                        
                        <h2>Sinopsis:</h2>
                        <p>{serie?.overview}</p>
                    </div>
                    
                    <div id='chapter_container'>
                        {serie?.episodes.map((chapter, index) => {
                            return (
                                <div className='chapter'>
                                    <div className='chapter-title'>
                                        {index + 1}. {chapter.name}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <h3> Join a Chat</h3>
                {/* <input
                    type="text"
                    placeholder="Room"
                    onChange={(e) => setRoom(e.target.value)}
                />  */}
                {/* <button onClick={joinRoom}>Join a room to chat about the serie</button> */}
                
            </div>
            
            ) : (
            <Chat socket={socket} username={user?.username}room={serie?._id}/>
            )}
            {/* <button className="add-fav-button" onClick={addSerieFav}>Add to fav</button> */}
            {/* <div
            className="container"
            style={{ border: "1px solid black", width: "15%" }}
            onClick={() => this.toggle()}
          >
            {user?.series? === serie?._id ? ( */}
              {/* <FontAwesomeIcon icon={faHeart} /> */}
            {/* ) : ( */}
              {/* <FontAwesomeIcon icon={faHeartBroken} /> */}
            {/* )}
          </div> */}
          
         {follow ? <button className="del-fav-button" onClick={delSerie}>Remove from favorite</button> : <button className="add-fav-button" onClick={addSerieFav}>Add to favorite</button>}
           {/* <button className={follow ? "add-fav-button": "del-fav-button"} onClick= {addSerieFav}>{buttonText}</button> */}
        
        </div>
    )
}

export default Serie