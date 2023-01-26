import axios from 'axios'
import {Report} from '../models/Report'


const API = 'http://localhost:5432/api/report/'


const sendReport = async (id: string, report:Report) => {
    return await axios.post(`${API}/${id}`, report)
}

export {sendReport}
