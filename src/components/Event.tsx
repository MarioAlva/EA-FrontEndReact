import React from 'react'
import '../css/Event.css'
import { useNavigate, useParams } from "react-router-dom"
import * as eventService from '../services/EventServices'
import { useEffect, useState } from 'react'
import { Event } from '../models/Event'
import axios from 'axios'
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
import L from 'leaflet';
import { width } from '@mui/system'
import send from '../assets/img/send.svg'




const Eventpage: React.FC = () => {
	const comments = [
		{
			comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia, nunc nisl ultricies nisl, nec ultricies nisl nunc vel nunc. Sed euismod, nisl nec ultricies lacinia, nunc nisl ultricies nisl, nec ultricies nisl nunc vel nunc.",
			valoration: 5,
		},
		{
			comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia, nunc nisl ultricies nisl, nec ultricies nisl nunc vel nunc. Sed euismod, nisl nec ultricies lacinia, nunc nisl ultricies nisl, nec ultricies nisl nunc vel nunc.",
			valoration: 4,
		},
		{
			comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia, nunc nisl ultricies nisl, nec ultricies nisl nunc vel nunc. Sed euismod, nisl nec ultricies lacinia, nunc nisl ultricies nisl, nec ultricies nisl nunc vel nunc.",
			valoration: 3,
		},
		{
			comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia, nunc nisl ultricies nisl, nec ultricies nisl nunc vel nunc. Sed euismod, nisl nec ultricies lacinia, nunc nisl ultricies nisl, nec ultricies nisl nunc vel nunc.",
			valoration: 2,
		},
		{
			comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia, nunc nisl ultricies nisl, nec ultricies nisl nunc vel nunc. Sed euismod, nisl nec ultricies lacinia, nunc nisl ultricies nisl, nec ultricies nisl nunc vel nunc.",
			valoration: 1,
		},
	]

	const iconPerson = new L.Icon({
		iconUrl: require('../assets/img/pin.png'),
		iconRetinaUrl: require('../assets/img/pin.png'),
		iconSize: new L.Point(40, 45),
		className: ''
	});
	const { id } = useParams<{ id: string }>();
	const [event, setEvent] = useState<Event>();
	const [comment, setCommenta] = useState<string>('');
	const [rate, setRate] = useState<number>(0);
	const loadEvent = async (id : any) => {
		const eve = await eventService.getEvent(id);
        const getEvent = eve.data as Event;
        setEvent(getEvent);
	  }
	const addComment = async (id : string, owner: string, comment : string, rate : number) => {
		if(comment === '') return;
		await eventService.addComment(id, owner, comment, rate);
		(document.getElementById("comment_textArea") as HTMLInputElement).value = '';
	}	
	useEffect(() => {
		loadEvent(id)
	})
	function setComment (){
		setCommenta((document.getElementById("comment_textArea") as HTMLInputElement).value as string);
	}
    return (
		<div className="event-container">
			<div className="event-header">
			</div>
			<div className="event-body">
				<div className="event-bodyHeader">
					<span className='event-title'>{event?.title}</span>
					<span className='event-author'>Author</span>
				</div>
				<hr />
				<div className="event-description">
					<span>{event?.description}</span>
				</div>
				<div className="event-buttons">
					<button className="event-button" style={{backgroundColor: "#001D48"}}>Participate</button>
					<button className="event-button" style={{backgroundColor: "#4D0000"}}>Report</button>
				</div>
				<div className="event-map">
					<MapContainer center={[event ? event.lat : 0, event ? event.lng : 0]} zoom={16} scrollWheelZoom={false} zoomControl={false} doubleClickZoom={false}>
						<TileLayer
							attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
							url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
						/>
						<Marker icon={iconPerson} position={[event ? event.lat : 0, event ? event.lng : 0]}>
						</Marker>
					</MapContainer>
				</div>
			</div>
			<div className="event-footer">
				<div className="event-valoration">
					<div className="mid-rating"></div>
					<div className="valorations-graphic">
						<div className="valoration-graphic"></div>
						<div className="valoration-graphic"></div>
						<div className="valoration-graphic"></div>
						<div className="valoration-graphic"></div>
						<div className="valoration-graphic"></div>
					</div>
				</div>
				<div className="event-comments">
					<span className='comments-title'>Comments</span>
					<div className='event-center' style={{flexDirection: "row", backgroundColor: "white", borderRadius: "10px"}}>
						<button className='comment-button' onClick={() => addComment(id!, localStorage.getItem('user')!, comment, 0)}>
							<img src={send} width="70%" alt="send" />
						</button>
						<textarea onChange={setComment} id="comment_textArea" style={{borderRight: "1px solid gray"}}>
						</textarea>
						<div className='comment-rating' style={{backgroundColor: "gray", width: "150px"}}></div>
					</div>
					{event?.comments.map((comment, index) => {
						return (
							<div className="comment-container">
								<div className="comment-body">
									<span>{comment.content}</span>
								</div>
								<div className="comment-footer">
									<div className="comment-valoration">
										<div className='comment-rating'>
										</div>
									</div>
									<span className="comment-author">{comment.owner.username}</span>
								</div>
							</div>
						)
					})
					}
				</div>
			</div>
		</div>
			
    )
}
export default Eventpage