import React from 'react'
import '../css/Event.css'
import Logo from '../assets/img/logo.svg'
import {Event} from '../models/Event'
import { useEffect, useState } from 'react'
import * as eventService from '../services/EventServices'
import Moment from 'react-moment'
import { useNavigate } from "react-router-dom";
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { Wrapper, Status } from "@googlemaps/react-wrapper";

const Events: React.FC = () => {

	
	const [eventList, setEvents] = useState<Event[]>([]);
	const navigate = useNavigate();
	const loadEvents = async () => {
		const res = await eventService.getAllEvents();
		setEvents(res.data);
	  }
	
	function createEventScreen() {
		navigate("/event/create");
	}

	useEffect(() => {
		loadEvents()
	  }, [])
	
	function backCarrousel() {
		let carrousel = document.getElementById("carrousel");
		if (carrousel) {
			carrousel.scrollLeft -= 300;
		}
	}

	function nextCarrousel() {
		let carrousel = document.getElementById("carrousel");
		if (carrousel) {
			carrousel.scrollLeft += 300;
		}
	}

	return (
        <div className="eventscreen-container">
			<div className="eventscreen-titles">
				<span>Eventos</span>
				<button onClick={createEventScreen} className='event-createEvent'><div className='event-createmore'>+</div><span className='text-createEvent'> Crear evento</span></button>
			</div>
			<div className='event-eventsContainer'>
				<div style={{width: "50%", overflowY: "scroll", overflowX: "hidden"}}>
					{eventList.map((event) => (
						<div className="eventscreen-card">
							<div>
								<div className="eventscreen-card-image"><img width={100} src={Logo} alt="" /></div>
							</div>
							<div style={{width: "100%"}}>
								<div className="eventscreen-card-title">{event.title}</div>
								<div className="eventscreen-card-description">{event.description}</div>
								<img src={event.image} ></img>
								<div className="eventscreen-card-date">
									<Moment fromNow ago>{event.date?.toLocaleString("en-US")}</Moment>
								</div>
							</div>
						</div>
					))}

				</div>
				<div style={{width: "50%"}}>
				<MapContainer center={[41.275188, 1.986412]} zoom={14} scrollWheelZoom={false}>
  					<TileLayer
    					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  					/>
					<Marker position={[41.275188, 1.986412]}>
    					<Popup>
     						A pretty CSS3 popup. <br /> Easily customizable.
    					</Popup>
  					</Marker>
				</MapContainer>
				</div>
			</div>

		</div>
    )
}
export default Events