import axios from 'axios'
import {Event} from '../models/Event'

const API = 'http://localhost:5432/api/events/'

export const RegisterEvent = async (event:Event) => {
    console.log(document.cookie.replace('token=', ''));
    return await axios.post(`${API}`,event, {
        
        headers: {
            "x-auth-token": document.cookie.replace('token=', '')
            
            }
      })
}
export {}

export const getAllEvents = async () => {
    return await axios.get(`${API}`);
}

export {}

export const delEvent = async (id: string) => {
    return await axios.delete(`${API}${id}`);
}
export {}

export const updateUser = async (event:Event) => {
    return await axios.put(`${API}${event._id}`, event);
}
export {}

export const getEvent = async (id: string) => {
    return await axios.get(`${API}${id}`);
}
export {}

