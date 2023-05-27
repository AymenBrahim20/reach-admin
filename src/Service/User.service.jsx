/* eslint-disable import/no-anonymous-default-export */
import http from "./AxiosContext";

const createUser=(data) => { 
    return http.post("/user",data )
}
const getAllUsers=() => { 
    return http.get("/user") 
}
const updateUser=(id , data ) => { 
    return http.put(`/user/${id}`, data ) 
}
const getUser=(id ) => { 
    return http.get(`/user/${id}`) 
}
const deleteUser=(id ) => { 
    return http.delete(`/user/${id}`) 
}
export default { 
    createUser , getAllUsers ,updateUser ,getUser , deleteUser 
}
