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
const socket = io('http://localhost:3001');

const Serie: React.FC = () => {
    
	const { id } = useParams<{ id: string }>();
	const [serie, setSerie] = useState<Ser>();
    const navigate = useNavigate();
    const handleClick = () => navigate('/chat');

    const [username, setUsername] = useState("");
    const [room, setRoom] = useState("");
    const [showChat, setShowChat] = useState(false);
    const [user, setUser] = useState<User>();

    const joinRoom = () => {
        if (user?.username !== "" && room !== "") {
            console.log(user?.username);
          socket.emit("join_room", serie?.title);
          setShowChat(true);
        }
      };
      const loadUser = async () => {
		const user = await userService.getProfile();
        const getUser = user.data as User;
        setUser(getUser);
	  }
	useEffect(() => {
		loadUser()
	  }, [])

	const load = async () => {
		const serie = await serieService.getSerie(id as string);
		setSerie(serie.data);
  	};

	useEffect(() => {
		load();
	});
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
                <h3> Join a Chat</h3>
                <h3> Join a Chat</h3>
                <h3> Join a Chat</h3>
                <h3> Join a Chat</h3>
                <input
                    type="text"
                    placeholder="Room"
                    onChange={(e) => setRoom(e.target.value)}
                /> 
                <button onClick={joinRoom}>Join Room</button>
                
            </div>
            ) : (
            <Chat socket={socket} username={user?.username}room={room}/>
            )}
            
        </div>
    )
}

export default Serie