/* eslint-disable import/no-anonymous-default-export */
import http from "./AxiosContext";

const createCustomer=(data) => { 
    return http.post("/customer",data )
}
const getAllCustomers=() => { 
    return http.get("/customer") 
}
const updateCustomer=(id , data ) => { 
    return http.put(`/customer/${id}`, data ) 
}
const getCustomer=(id ) => { 
    return http.get(`/customer/${id}`) 
}
const deleteCustomer=(id ) => { 
    return http.delete(`/customer/${id}`) 
}
export default { 
    createCustomer , getAllCustomers ,updateCustomer ,getCustomer , deleteCustomer 
}
