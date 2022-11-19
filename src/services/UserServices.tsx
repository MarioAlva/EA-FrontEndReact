import axios from 'axios'
import {User} from '../models/User'

const API = 'http://localhost:5432/api/users/'

export const RegisterUser = async (user:User) => {
    return await axios.post(`${API}/register`,user)
}
export {}

export const LoginUser = async (user:User) => {
    return await axios.post(`${API}/login`,user)
}
export {}

export const getAllUser = async () => {
    return await axios.get(`${API}`);
}

export {}

export const delUser = async (id: string) => {
    return await axios.delete(`${API}/delete/${id}`);
}
export {}