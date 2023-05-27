/* eslint-disable no-template-curly-in-string */
/* eslint-disable import/no-anonymous-default-export */
import http from "./AxiosContext";

const createCategory=(data) => { 
    return http.post("/categories",data )
}
const getAll=() => { 
    return http.get("/categories") 
}
const updateCategory=(id , data ) => { 
    return http.put(`/categories/${id}`, data ) 
}
const getCategory=(id ) => { 
    return http.get(`/categories/${id}`) 
}
const deleteCategory=(id ) => { 
    return http.delete(`/categories/${id}`) 
}
export default { 
    createCategory , getAll ,updateCategory ,getCategory , deleteCategory 
}
