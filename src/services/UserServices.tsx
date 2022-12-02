import axios from 'axios'
import { response } from 'express'
import {User} from '../models/User'

const API = 'http://localhost:5432/api/users/'

export const RegisterUser = async (user:User) => {
    return await axios.post(`${API}register`,user)
}
export {}

export const LoginUser = async (user:User) => {
    console.log(user);
    const res = await axios.post(`http://localhost:5432/api/auth/login`,user).then(res => {
        localStorage.setItem('token', res.data.token);
        axios.defaults.headers.common["Authorization"] = `Bearer ${res.data.token}`;
        console.log(localStorage.getItem('token'));
        return res;
    }).catch(err =>  {
        delete axios.defaults.headers.common["Authorization"];
        return null;
    });

}
export {}

export const getAllUser = async () => {
    return await axios.get(`${API}`);
}

export {}

export const delUser = async (id: string) => {
    return await axios.delete(`${API}/${id}`);
}
export {}

export const updateUser = async (user:User) => {
    return await axios.put(`${API}`, user);
}
export {}

export const getUser = async (id: string) => {
    return await axios.get(`${API}profile/${id}`);
}
export {}

export const addSerieFav = async (idUser: string, idSerie:String) => {
    return await axios.put(`${API}/serie/${idUser}/${idSerie}`);
}
export {}

