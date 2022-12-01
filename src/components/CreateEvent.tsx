import React from 'react'
import '../css/CreateEvent.css'
import * as eventService from '../services/EventServices'
import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

type EventForm = {
    title: String;
    description: String;
    date: Date;
};

const CreateEvent: React.FC = () => {
	let clickCreateEvent = true
	function sendCreateEvent() {
		if (clickCreateEvent) {
			clickCreateEvent = false
		}
	}

	const validationSchema = Yup.object().shape({
        title: Yup.string().required('Title is required'),
        description: Yup.string()
          .required('Description is required')
          .min(6, 'Description must be at least 6 characters'),
        date: Yup.date()
          .required('Please enter a date')
          .min(new Date(), "The event must be in the future!"),
      });

    const {register,handleSubmit,formState: { errors }} = useForm<EventForm>({resolver: yupResolver(validationSchema)});
	let navigate = useNavigate();

	const sendEvent = handleSubmit(async (values) => {
        const res = await eventService.RegisterEvent(values);
        console.log(res);

        navigate('/event');
    });


    return (
        <div className="create-event-container">
    		<form action="createEvent" className="create-event" style={clickCreateEvent ? {marginLeft: "0vw", paddingBottom: "20px", width: "450px"} : {paddingBottom: "20px", width: "450px"}} onSubmit={sendEvent} >
    		    <span className="create-event-header">Create Event</span>
    		        <label style={{marginBottom: "20px"}}>Title:<input type="text" placeholder="Title" {...register("title")}/><p className="error-message">{errors.title?.message}</p></label>
					
    		        <label style={{marginBottom: "20px"}}>Description:<input type="text" placeholder="Description" {...register("description")}/><p className="error-message">{errors.description?.message}</p></label>
                	
					<label style={{marginBottom: "20px"}} htmlFor="regUsername">Date:<input type="date" {...register("date")}/><p className="error-message">{errors.date?.message}</p></label>
                	
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