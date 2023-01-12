import axios from 'axios'
import {Booking} from '../models/Booking'

//const API = 'http://api1.tvtracker.tk/api/bookings/'
const API = 'http://localhost:5432/api/bookings/'


export const getAllBookings = async () => {
    return await axios.get(`${API}`);
}
export {}

export const createBooking = async (booking: Booking) => {
    return await axios.post(`${API}/booking`, booking);
}
export {}

export const cancelBooking =async (id: string) => {
    return await axios.delete(`${API}/${id}`);    
}
export {}
