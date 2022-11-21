import React from 'react'
import '../css/Event.css'
import Logo from '../assets/img/logo.svg'
import {Event} from '../models/Event'
import { ChangeEvent, useEffect, useState } from 'react'
import * as eventService from '../services/EventServices'
import { stringify } from 'querystring'


interface Props {
    event:Event
}
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };


const Events: React.FC = () => {

	
	const [eventList, setEvents] = useState<Event[]>([]);

	const loadEvents = async () => {
		const res = await eventService.getAllEvents();
		setEvents(res.data);
	  }
	
	useEffect(() => {
		loadEvents()
	  }, [])
	


	let Eventos : Event[] = [
		{
			date: new Date("2020-01-01"),
			title: "New Year",
			description: "New Year's Day is the first day of the year, or January 1, in the Gregorian calendar."
		},
		{
			date: new Date("2020-01-20"),
			title: "Martin Luther King Jr. Day",
			description: "Martin Luther King Jr. Day is an American federal holiday marking the birthday of Martin Luther King Jr."
		},
		{
			date: new Date("2020-01-20"),
			title: "Martin Luther King Jr. Day",
			description: "Martin Luther King Jr. Day is an American federal holiday marking the birthday of Martin Luther King Jr."
		},
		{
			date: new Date("2020-01-20"),
			title: "Martin Luther King Jr. Day",
			description: "Martin Luther King Jr. Day is an American federal holiday marking the birthday of Martin Luther King Jr."
		},
		{
			date: new Date("2020-01-20"),
			title: "Martin Luther King Jr. Day",
			description: "Martin Luther King Jr. Day is an American federal holiday marking the birthday of Martin Luther King Jr."
		},
		{
			date: new Date("2020-01-20"),
			title: "Martin Luther King Jr. Day",
			description: "Martin Luther King Jr. Day is an American federal holiday marking the birthday of Martin Luther King Jr."
		},
		{
			date: new Date("2020-01-20"),
			title: "Martin Luther King Jr. Day",
			description: "Martin Luther King Jr. Day is an American federal holiday marking the birthday of Martin Luther King Jr."
		},
		{
			date: new Date("2020-01-20"),
			title: "Martin Luther King Jr. Day",
			description: "Martin Luther King Jr. Day is an American federal holiday marking the birthday of Martin Luther King Jr."
		},
		{
			date: new Date("2020-01-20"),
			title: "Martin Luther King Jr. Day",
			description: "Martin Luther King Jr. Day is an American federal holiday marking the birthday of Martin Luther King Jr."
		},
		{
			date: new Date("2020-01-20"),
			title: "Martin Luther King Jr. Day",
			description: "Martin Luther King Jr. Day is an American federal holiday marking the birthday of Martin Luther King Jr."
		},
	];
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

	// let map: google.maps.Map;
	// const center: google.maps.LatLngLiteral = {lat: 30, lng: -110};
	
	// function initMap(): void {
	//   map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
	//     center,
	//     zoom: 8
	//   });
	// }

	return (
        <div className="eventscreen-container">
			<div className="eventscreen-titles">Eventos</div>
			<div className='event-eventsContainer'>
				<div style={{width: "50%", overflowY: "scroll"}}>
					{eventList.map((event) => (
						<div className="eventscreen-card">
							<div>
								<div className="eventscreen-card-image"><img width={100} src={Logo} alt="" /></div>
							</div>
							<div>
								<div className="eventscreen-card-title">{event.title}</div>
								<div className="eventscreen-card-description">{event.description}</div>

								<div className="expense-date">{event.date!.toLocaleString("en-US")}</div>
							</div>
						</div>
					))}

				</div>
				<div style={{width: "50%"}}>
				</div>
			</div>

		</div>
    )
}
export default Events