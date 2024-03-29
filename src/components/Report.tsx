import React, { useEffect, useState } from 'react'
import '../css/CreateEvent.css'
import * as reportService from '../services/ReportServices'
import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import * as userService from '../services/UserServices';
import jwt_decode from "jwt-decode";
import { useTranslation } from 'react-i18next';
import '../css/Config.css'

import { User } from '../models/User';

type ReportForm = {
    user_reported: String,
    reason: String,
	date: Date
};

interface MyToken {
    id: string;
    email: string;
    iat: number;
    exp: number;
  }

const ReportSend: React.FC = () => {
    const { t, i18n } = useTranslation();
    if (localStorage.getItem('language') === 'es') {
       t('es');
    } else {
        t('en');
    }
    const theme = localStorage.getItem('theme');
    const [user, setUser] = useState<User>();
    const [users, setUsers] = useState<User[]>();
    const [exists, setExists] = useState(false);
    const [show, setShow] = useState(false);
	const token = localStorage.getItem('token')!;
	let decoded = jwt_decode(token) as MyToken;
	const idUser = decoded.id;
	const loadUser = async () => {

        const user = await userService.getProfile(idUser);
        
        const getUser = user.data as User;
        setUser(getUser);     
        const allusers = await userService.getAllUser();
        const allUsers = allusers.data as User[];
        setUsers(allUsers);
    
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
        user_reported: Yup.string().required('To report a user you must introduce his/her username'),
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
        const user2 = await userService.getOneUser(values.user_reported as string);

        if(user2.data === null){
            console.log("User not found");
            setExists(false);
        }
        else{
            console.log("User found");
            setExists(true);
            
            values.date = new Date();

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
        <div className="config-container">
    		<form action="createEvent" className={`config-${theme}`} style={clickCreateReport ? {marginLeft: "0vw", paddingBottom: "20px", width: "450px"} : {paddingBottom: "20px", width: "450px"}} onSubmit={sendEvent} >
    		    <span className="create-event-header">{t("SendReport")}</span>
    		        <label style={{marginBottom: "5px"}}>{t("UserReported")}<input className={`input-${theme}`} type="text" placeholder={t("ErrorUsername")!} {...register("user_reported")}/><p className="error-message">{errors.user_reported?.message}</p></label>
                    {show ? 
                    exists ? <label style={{marginBottom: "20px"}}>Exists</label> : <label style={{marginBottom: "20px"}}>{t("Exists")}</label>
                     : <label style={{marginBottom: "20px"}}></label>}
    		        <label style={{marginBottom: "20px"}}>{t("Reason")}<input className={`input-${theme}`} type="text" placeholder={t("PlaceholderReason")!} {...register("reason")}/><p className="error-message">{errors.reason?.message}</p></label>
                	
    		    <div style={{width: "62%", display: "inline-flex", justifyContent: "center", marginBottom: "20px"}}>
    		    	<div style={{marginRight: "4%", display: "flex", flexDirection: "column", width: "62%"}}>
    		    	</div>
				</div>

    		    <button className={`config-button-${theme}`} style={{marginLeft: "1%"}} onClick={() => sendInfoReport()}><b>{t("SendRepButton")}</b></button>

            </form>
		</div>
    )
}
export default ReportSend