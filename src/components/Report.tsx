import React, { useEffect, useState } from 'react'
import '../css/CreateEvent.css'
import * as reportService from '../services/ReportServices'
import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import * as userService from '../services/UserServices'

import { User } from '../models/User';

type ReportForm = {
    user_to_report: String,
    reason: String
	
};


const ReportSend: React.FC = () => {

    const [user, setUser] = useState<User>();
    const [users, setUsers] = useState<User[]>();
    const [userToReport, setToReport] = useState<User>();
    const [exists, setExists] = useState(false);
    const [show, setShow] = useState(false);
	const loadUser = async () => {

        const user = await userService.getProfile();
        
        const getUser = user.data as User;
        setUser(getUser);     
        console.log(getUser);
        console.log("kajhgklajshfklashg");

        const allusers = await userService.getAllUser();
        const allUsers = allusers.data as User[];
        setUsers(allUsers);
        console.log(allUsers);
    
}
useEffect(() => {
    loadUser();
  }, [])

	let clickCreateReport = true
	function sendInfoReport() {
		if (clickCreateReport) {
            setShow(true);
			clickCreateReport = false
		}
	}

	const validationSchema = Yup.object().shape({
        user_to_report: Yup.string().required('To report a user you must introduce his/her username'),
        reason: Yup.string()
          .required('Explaining the reason to report is required')
          .min(6, 'Description must be at least 6 characters')
          .max(300, 'Description must be at most 300 characters')
        // date: Yup.date()
        //   .required('Please enter a date')
        //   .min(new Date(), "The event must be in the future!"),
      });

    const {register,handleSubmit, setValue,formState: { errors }} = useForm<ReportForm>({resolver: yupResolver(validationSchema)});
	let navigate = useNavigate();




	const sendEvent = handleSubmit(async (values)=> {
        console.log(values);
        const user2 = await userService.getOneUser(values.user_to_report as string);

        if(user2.data === null){
            console.log("User not found");
            setExists(false);
        }
        else{
            console.log("User found");
            setExists(true);
            reportService.sendReport(user?._id as string, values).then(
                (response) => {
                    navigate("/")
                },
                (error) => {
                    console.log(error);
                }
            
            );
        }

    });

    return (
        <div className="create-event-container">
    		<form action="createEvent" className="create-event" style={clickCreateReport ? {marginLeft: "0vw", paddingBottom: "20px", width: "450px"} : {paddingBottom: "20px", width: "450px"}} onSubmit={sendEvent} >
    		    <span className="create-event-header">Send a report</span>
    		        <label style={{marginBottom: "5px"}}>User to report:<input type="text" placeholder="Insert the username of the user to be reported" {...register("user_to_report")}/><p className="error-message">{errors.user_to_report?.message}</p></label>
                    {show ? 
                    exists ? <label style={{marginBottom: "20px"}}>Exists</label> : <label style={{marginBottom: "20px"}}>Username introduced does not exist</label>
                     : <label style={{marginBottom: "20px"}}></label>}
    		        <label style={{marginBottom: "20px"}}>Reason of the report:<input type="text" placeholder="Insert the reason of the report" {...register("reason")}/><p className="error-message">{errors.reason?.message}</p></label>
                	
					{/* <label style={{marginBottom: "20px"}} htmlFor="regUsername">Date:<input type="date" {...register("date")}/><p className="error-message">{errors.date?.message}</p></label> */}
                	
    		    <div style={{width: "62%", display: "inline-flex", justifyContent: "center", marginBottom: "20px"}}>
    		    	<div style={{marginRight: "4%", display: "flex", flexDirection: "column", width: "62%"}}>
    		    	</div>
				</div>

    		    <button className="create-event-button" onClick={() => sendInfoReport()}><b>Send the report</b></button>

            </form>
		</div>
    )
}
export default ReportSend