import axios from 'axios'
import {Event} from '../models/Event'

//const API = 'https://api1.tvtracker.tk/api/events/'
const API = 'http://localhost:5432/api/events/'

export const RegisterEvent = async (event:Event) => {
    return await axios.post(`${API}`,event, {
        headers: {
            "x-auth-token": localStorage.getItem('token')
            
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

export const addComment = async (id: string, owner: string, comment: string, rate: number) => {
	return await axios.post(`${API}${id}/comments`, {owner: owner, content: comment, likes: rate});
}
export {}

