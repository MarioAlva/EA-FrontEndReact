import axios from 'axios'
import {Serie} from '../models/Serie'

const API = 'http://localhost:5432/api/series/'

export const RegisterSerie = async (serie:Serie) => {
    return await axios.post(`${API}/`,serie)
}
export {}

export const getAllSeries = async () => {
    return await axios.get(`${API}`);
}

export {}

export const delSerie = async (id: string) => {
    return await axios.delete(`${API}/${id}`);
}
export {}

export const updateSerie = async (serie:Serie) => {
    return await axios.put(`${API}/${serie._id}`, serie);
}
export {}

export const getSerie = async (id: string) => {
    return await axios.get(`${API}/${id}`);
}
export {}