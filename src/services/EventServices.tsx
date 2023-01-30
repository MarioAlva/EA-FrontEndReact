import axios from 'axios'
import {Event} from '../models/Event'

//const API = 'https://api1.tvtracker.tk/api/events/'
const API = 'http://localhost:5432/api/events/'

export const RegisterEvent = async (event:any) => {
    return await axios.post(`${API}`,event, {
        headers: {
            "x-access-token": localStorage.getItem('token'),
            }
      })
}
export {}

export const getAllEvents = async () => {
    return await axios.get(`${API}`, {
		headers: {
            "x-access-token": localStorage.getItem('token')
        }
	});
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
    return await axios.get(`${API}${id}`, {
        headers: {
            "x-access-token": localStorage.getItem('token')
            
            }
      });
}

export const addComment = async (id: string, owner: string, comment: string, rate: number) => {
	return await axios.post(`${API}${id}/comments`, {owner: owner, content: comment, likes: rate});
}

export const addParticipant = async (id: string, owner: string) => {
	return await axios.post(`${API}${id}/join`, {id: owner});
}

export {}

