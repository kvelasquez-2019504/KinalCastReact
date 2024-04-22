import axios from "axios";

//vamos a crear una url base
const apiClient = axios.create({
	baseURL: "http://127.0.0.1:8080/twitch/v1",
    timeout:'1000'
});

//como es una consulta externa, es asincrono
export const login = async (data)=>{
    try {
        return await apiClient.post('/auth/login',data);
    } catch (error) {
        return {
            error:true,
            error
        }
    }
}

export const register = async(data)=>{
    try {
        return await apiClient.post('/auth/register',data);
    } catch (error) {
        return {
            error:true,
            error
        }
    }
}