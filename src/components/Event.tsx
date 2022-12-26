import React from 'react'
import '../css/Event.css'
import { useNavigate, useParams } from "react-router-dom"
import * as eventService from '../services/EventServices'
import { useEffect, useState } from 'react'
import { Event } from '../models/Event'
import axios from 'axios'
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
import L from 'leaflet';




const Eventpage: React.FC = () => {
	const iconPerson = new L.Icon({
		iconUrl: require('../assets/img/pin.png'),
		iconRetinaUrl: require('../assets/img/pin.png'),
		iconSize: new L.Point(40, 45),
		className: ''
	});
	const { id } = useParams<{ id: string }>();
	const [event, setEvent] = useState<Event>();
	const loadEvent = async (id : string) => {
		const eve = await eventService.getEvent(id);
        const getEvent = eve.data as Event;
        setEvent(getEvent);
	  }
	useEffect(() => {
		// loadEvent(id)
	  }, [])
    return (
		<div className="event-container">
			<div className="event-header">
			</div>
			<div className="event-body">
				<div className="event-bodyHeader">
					<span className='event-title'>Event Title</span>
					<span className='event-author'>Author</span>
				</div>
				<hr />
				<div className="event-description">
					<span>lorem ipsum</span>
				</div>
				<div className="event-buttons">
					<button className="event-button" style={{backgroundColor: "#001D48"}}>Participate</button>
					<button className="event-button" style={{backgroundColor: "#4D0000"}}>Report</button>
				</div>
				<div className="event-map">
					<MapContainer center={[41.275188, 1.986412]} zoom={16} scrollWheelZoom={false} zoomControl={false} doubleClickZoom={false}>
						<TileLayer
							attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
							url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
						/>
						<Marker icon={iconPerson} position={[41.275188, 1.986412]}>
							<Popup>
								A pretty CSS3 popup. <br /> Easily customizable.
							</Popup>
						</Marker>
					</MapContainer>
				</div>
			</div>
			<div className="event-footer">
				<div className="event-valoration"></div>
				<div className="event-comments"></div>
			</div>
		</div>
			
    )
}
export default Eventpage