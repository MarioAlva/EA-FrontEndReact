import React from 'react'
import '../css/Profile.css'
import * as ProfileService from '../services/ProfileServices'
import { useSearchParams } from "react-router-dom";
import * as UserService from '../services/UserServices'


type UpdateForm = {
    username: String;
    name: String;
    email: String;
};

const UpdateUser: React.FC = () => {
    // let series : any[] = [];
    let clickCreateEvent = true
    const [searchParams] = useSearchParams();
    
    const loadUser = async () => {
        const user = localStorage.getItem('token');
        if (!user) { return; }
        const base64Url = user.split('.')[1];
        const base64 = base64Url.replace('-', '+').replace('_', '/');
        const toke = JSON.parse(window.atob(base64));
        const idUser = toke.id;
        console.log(toke);
        console.log(toke.id);
		//const user1 = await UserService.getProfile(idUser);
  	};

	//useEffect(() => {
	//	loadSeries();
	//}, []);

    /*const sendEvent = handleSubmit(async (values) => {
        const res = await UserService.getProfile(values);
        console.log(res);

        navigate('/event');
    });*/
    

    return (
        <div className="create-event-container">
    		<form action="createEvent" className="create-event" style={clickCreateEvent ? {marginLeft: "0vw", paddingBottom: "20px"} : {paddingBottom: "20px", width: "450px"}}  >
            <span className="create-event-header">Create Event</span>
                <label style={{marginBottom: "20px"}}>Title:<input type="text" placeholder="Title"/></label>
                
                <label style={{marginBottom: "20px"}}>Description:<input type="text" placeholder="Description"/></label>
                
                <label style={{marginBottom: "20px"}} htmlFor="regUsername">Date:<input type="date"/></label>
                
            <div style={{width: "62%", display: "inline-flex", justifyContent: "center", marginBottom: "20px"}}>
                <div style={{marginRight: "4%", display: "flex", flexDirection: "column", width: "62%"}}>
                </div>
            </div>
            {/* <button className="create-event-button" onClick={() => sendCreateEvent()}><b>Crear Evento</b></button> */}
        </form>
    </div>		
    )
}
export default UpdateUser