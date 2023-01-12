import axios from 'axios'
import { response } from 'express'
import {User} from '../models/User'
import { useState, useEffect } from "react";
import jwt from "jsonwebtoken";
import jwt_decode from "jwt-decode";
import profileimg from '../assets/img/profileimg.png'

//const API = 'http://api1.tvtracker.tk/api/users/'
const API = 'http://localhost:5432/api/users/'

interface MyToken {
    id: string;
    email: string;
    iat: number;
    exp: number;
  }
export const RegisterUser = async (user:User) => {
    // user.avatar = profileimg;
    return await axios.post(`${API}register`,user)
}
export {}

export const LoginUser = async (user:User) => {
    //return await axios.post(`http://api1.tvtracker.tk/api/auth/login`,user).then(res => {
    return await axios.post(`http://localhost:5432/api/auth/login`,user).then(res => {
        //if (res.data.accessToken) {
            //localStorage.setItem('user', JSON.stringify(res.data));
            let token = res.data.token;
           
            localStorage.setItem('token', token);
            let decoded = jwt_decode(token) as MyToken;
            const email = decoded.email;
            const idUser = decoded.id;
            return res;
          //}
  
         // return res.data;
        //localStorage.setItem('token', res.data.token);
        /*useEffect(() => {
            // storing input name
            localStorage.setItem("token", res.data.token);
          }, [res.data.token]);*/
        //axios.defaults.headers.common["Authorization"] = `Bearer ${res.data.token}`;
        //console.log(localStorage.getItem('token'));
        
        //return res;
    }).catch(err =>  {
        delete axios.defaults.headers.common["Authorization"];
        return null;
    });
}
export {}

export const getProfile = async () => {
    const token = localStorage.getItem('token')!;
    let decoded = jwt_decode(token) as MyToken;
    const email = decoded.email;
    const idUser = decoded.id;
    return await axios.get(`${API}profile/${idUser}`);
    //const idUser = decoded.id;
    //return await axios.get(`${API}/profile/user${idUser}`, );

    /*const user = JSON.parse(localStorage.getItem('user'));
    return JSON.parse(localStorage.getItem('user'));
    return await axios.get(`${API}/profile/user${idUser}`);*/
    
    
    /*const user = localStorage.getItem('token');
    if (!user) { return; }
    const base64Url = user.split('.')[1];
    const base64 = base64Url.replace('-', '+').replace('_', '/');
    const toke = JSON.parse(window.atob(base64));
    toke.id = idUser;
    console.log(toke);
    console.log(toke.id);*/
    //return JSON.parse(window.atob(base64));
    
    //idUser = localStorage.getItem('token');
    /*if (idUser) {
        setItem(idUser);
    }*/
    /*if (user) {
        // return { Authorization: 'Bearer ' + user.accessToken };
        return { "x-auth-token": user };
      } else {
        return {};
      }*/
    //return await axios.get(`${API}/profile/user${idUser}`);
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
    const token = localStorage.getItem('token')!;
    let decoded = jwt_decode(token) as MyToken;
    const iduserupdate = decoded.id;
    return await axios.put(`${API}/${iduserupdate}`, user);

}
export {}

export const getUser = async (id: string) => {
    return await axios.get(`${API}profile/${id}`);
}
export {}

export const addSerieFav = async (idUser: string, idSerie: string) => {
    return await axios.put(`${API}/addserie/${idUser}/${idSerie}`);
}
export {}

export const delSerie = async (idUser: string, idSerie: string) => {
    return await axios.put(`${API}/delserie/${idUser}/${idSerie}`);
}
