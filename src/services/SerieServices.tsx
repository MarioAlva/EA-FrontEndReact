import axios from 'axios'
import Serie from '../models/Serie'

//const API = 'http://api1.tvtracker.tk/api/series/'
const API = 'http://localhost:5432/api/series/'

const RegisterSerie = async (serie:Serie) => {
    return await axios.post(`${API}/`,serie)
}

const getAllSeries = async () => {
    return await axios.get(`${API}`);
}

const delSerie = async (id: string) => {
    return await axios.delete(`${API}/${id}`);
}

const updateSerie = async (serie:Serie) => {
    return await axios.put(`${API}/${serie._id}`, serie);
}

export const getSerie = async (id: string) => {
    return await axios.get(`${API}/${id}`);
}

export {RegisterSerie, getAllSeries, delSerie, updateSerie}