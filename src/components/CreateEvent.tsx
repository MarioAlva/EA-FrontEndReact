import React from 'react'
import '../css/CreateEvent.css'

const CreateEvent: React.FC = () => {
	let clickCreateEvent = true
	function sendCreateEvent() {
		if (clickCreateEvent) {
			clickCreateEvent = false
		}
	}
    return (
        <div className="create-event-container">
    		<form action="createEvent" className="create-event" style={clickCreateEvent ? {marginLeft: "0vw", paddingBottom: "20px", width: "450px"} : {paddingBottom: "20px", width: "450px"}}>
    		    <span className="create-event-header">Create Event</span>
    		        <label style={{marginBottom: "20px"}}>Title:<input type="text" placeholder="Title"/></label>
    		        <label style={{marginBottom: "20px"}}>Description:<input type="text" placeholder="Description" /></label>
    		    <div style={{width: "62%", display: "inline-flex", justifyContent: "center", marginBottom: "20px"}}>
    		    	<div style={{marginRight: "4%", display: "flex", flexDirection: "column", width: "62%"}}>
    		    	</div>
				</div>
    		    <button className="create-event-button" onClick={() => sendCreateEvent()}><b>Crear Evento</b></button>
    		</form>
		</div>
    )
}
export default CreateEvent