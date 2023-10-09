import axios from "axios";

const URL_BASE = 'http://localhost:8080/api/libro'

export const getLibros = async () => {
    try {
        const { data } = await axios.get(`${URL_BASE}/`);
        return data;
    } catch (error) {
        console.log('Error, algo paso')
        return [];
    }
}