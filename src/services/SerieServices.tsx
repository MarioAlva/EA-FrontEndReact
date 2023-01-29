import axios from 'axios'
import Serie from '../models/Serie'

//const API = 'https://api1.tvtracker.tk/api/series/'
const API = 'http://localhost:5432/api/series/'

const RegisterSerie = async (serie:Serie) => {
    return await axios.post(`${API}/`,serie)
}

const getAllSeries = async () => {
    return await axios.get(`${API}`, {
		headers: {
            "x-access-token": localStorage.getItem('token')
        }
	});
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
export const addComment = async (idSerie: string, owner: string, comment: string, rate: number) => {
	return await axios.post(`${API}addcomment/${idSerie}`, {content: comment, owner: owner, likes: rate});
}

export {RegisterSerie, getAllSeries, delSerie, updateSerie}