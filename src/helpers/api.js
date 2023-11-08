import axios from "axios";

export const fetchDataFromApi = async () => {
    try{
        const response = await axios.get('http://localhost:8081/empresas');
        return response.data;
    } catch (error) {
        throw error;
    }
}
