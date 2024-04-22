import axios from "axios";
import { logout } from "../shared/hooks/useLogout";

//vamos a crear una url base
const apiClient = axios.create({
	baseURL: "http://127.0.0.1:8080/twitch/v1",
    timeout:'1000'
});

//como es una consulta externa, es asincrono
export const login = async (data)=>{
    try {
        return await apiClient.post('/auth/login',data);
    } catch (e) {
        return {
            error:true,
            e
        }
    }
}

export const register = async(data)=>{
    try {
        return await apiClient.post('/auth/register',data);
    } catch (e) {
        return {
            error:true,
            e
        }
    }
}

export const getChannels =async()=>{
    try {
        return await apiClient.get('/channels')
    } catch (e) {
        return{
            error:true,
            e
        }
    }
}

export const getFollowedChannels =async()=>{
    try {
        return await apiClient.get('/channels/followed')
    } catch (e) {
        checkResponseStatus(e);
        return{
            error:true,
            e:e
        }
    }
}
const checkResponseStatus = (e)=>{
    const responseStatus = e?.response?.status
    if(responseStatus){
        (responseStatus===401 || responseStatus===403) && logout()
    }
}