import React, { useEffect, useState} from 'react'
import '../css/CreateEvent.css'
import * as eventService from '../services/EventServices'
import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import Geocode from "react-geocode";
import edit from '../assets/img/edit.svg'
import $ from 'jquery';

type EventForm = {
    title: String;
    description: String;
    date: Date;
	location: string;
	lat: number;
	lng: number;
	comments: Array<any>;
};


const CreateEvent: React.FC = () => {
	Geocode.setApiKey("AIzaSyCP6ZOo_TOaXy0oVOGQJTF13GeqBQ6VRY0");
	Geocode.setLanguage("en");
	Geocode.setRegion("es");
	Geocode.setLocationType("ROOFTOP");
	Geocode.enableDebug();
	
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
		location: Yup.string()
			.required('Location is needed'),
		image: Yup.string(),
      });

    const {register,handleSubmit, setValue,formState: { errors }} = useForm<EventForm>({resolver: yupResolver(validationSchema)});

	let navigate = useNavigate();


	const [selectedFile, setSelectedFile] = useState()
    const [preview, setPreview] = useState()

    // create a preview as a side effect, whenever selected file is changed
    useEffect(() => {
        if (!selectedFile) {
            setPreview(undefined)
            return
        }

        const objectUrl = URL.createObjectURL(selectedFile)
		// @ts-ignore
        setPreview(objectUrl)

        // free memory when ever this component is unmounted
        return () => URL.revokeObjectURL(objectUrl)
    }, [selectedFile])

    const onSelectFile = (e: any) => {
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedFile(undefined)
            return
        }

        // I've kept this example simple by using the first image instead of multiple
        setSelectedFile(e.target.files[0])
    }
	function calculateLatLng(){
		let loc = $('#location').val() as string;
		Geocode.fromAddress(loc).then(
			(response) => {
				const { lat, lng } = response.results[0].geometry.location;
				console.log(lat, lng);
				$('#latInput').val(lat);
				$('#lngInput').val(lng);
			},
		// Geocode.fromAddress(values.location).then(
		// 	async (response) => {
		// 	const { lat, lng } = response.results[0].geometry.location;
		// 	console.log(lat, lng);
		// 	values.lat = lat;
		// 	values.lng = lng;
		);
	}

	function createEvent(e: any){
		// const formdata = new FormData();
		// formdata.append("title", $('#title').val() as string);
		// formdata.append("description", $('#description').val() as string);
		// formdata.append("date", $('#date').val() as string);
		// formdata.append("location", $('#location').val() as string);
		// formdata.append("lat", $('#latInput').val() as string);
		// formdata.append("lng", $('#lngInput').val() as string);
		// formdata.append("files", selectedFile!);
		// console.log(selectedFile);
		// //pick image files from input
		// eventService.RegisterEvent(formdata).then(
		// 	(response) => {
		// 		navigate("/events")
		// 	}
		// );

	}
	function prueba(){
		//pick image file from input type file
		var file = selectedFile;
		console.log(file);
	}

	const sendEvent = handleSubmit(async (values)=> {
		Geocode.fromAddress(values.location).then(
			async (response) => {
			const { lat, lng } = response.results[0].geometry.location;
			console.log(lat, lng);
			values.lat = lat;
			values.lng = lng;
			eventService.RegisterEvent(values).then(
			(response) => {
				navigate("/events")
			},
			(error) => {
				console.log(error);
			}
			);
			},
			(error) => {
			  console.error(error);
			}
		);
    });

 
	// const onFileChange = (e) => {
	// 	e.preventDefault() 

	// }


    return (
        <div className="create-event-container">
    		    <span className="create-event-header">Create Event</span>
    		<form action='http://localhost:5432/api/events' method='POST' className="create-event" style={clickCreateEvent ? {marginLeft: "0vw", paddingBottom: "20px", width: "450px"} : {paddingBottom: "20px", width: "450px"}} encType="multipart/form-data">
					<div className='image-container'>
					{!selectedFile ? <div>
						<label className='label-input' htmlFor="files"><img width="25px" height="25px" src={edit} alt="edit" /></label>
						<input style={{width: "0px", visibility: "hidden", height: "7px"}} id="files" className="fileClass" onChange={onSelectFile} type="file" accept="image/*" name="image" />
					</div> : <img src={preview} alt="Preview" style={{height: "100%"}}/>}
					</div>
    		        <label style={{marginBottom: "20px"}}>Title:<input id='title' type="text" placeholder="Title" {...register("title")}/><p className="error-message">{errors.title?.message}</p></label>
					
    		        <label style={{marginBottom: "20px"}}>Description:<input id='description' type="text" placeholder="Description" {...register("description")}/><p className="error-message">{errors.description?.message}</p></label>
                	
					<label style={{marginBottom: "20px"}} htmlFor="regUsername">Date:<input id='date' type="date" {...register("date")}/><p className="error-message">{errors.date?.message}</p></label>
                	
    		        <label style={{marginBottom: "20px"}}>Location:<input id="location" type="text" placeholder="Location" {...register("location")} onChange={calculateLatLng}/><p className="error-message">{errors.location?.message}</p></label>
					<label htmlFor="latInput"></label><input name="lat" id="latInput" type="text" style={{height: "0px"}}/>
					<input name="lng" id="lngInput" type="text" style={{height: "0px"}}/>
					<input type="text" onChange={prueba} />
    		    <button className="create-event-button" onClick={createEvent} type="submit"><b>Crear Evento</b></button>
    		</form>
		</div>
    )
}
export default CreateEvent