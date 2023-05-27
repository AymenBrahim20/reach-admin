/* eslint-disable no-template-curly-in-string */
/* eslint-disable import/no-anonymous-default-export */
import http from "./AxiosContext";

const createSubCategory=(data) => { 
    return http.post("/subcategories",data )
}
const getAllSub=() => { 
    return http.get("/subcategories") 
}
const updateSubCategory=(id , data ) => { 
    return http.put(`/subcategories/${id}` , data ) 
}
const getSubCategory=(id ) => { 
    return http.get(`/subcategories/${id}` ) 
}
const deleteSubCategory=(id ) => { 
    return http.delete(`/subcategories/${id}` ) 
}
export default { 
    createSubCategory , getAllSub ,updateSubCategory ,getSubCategory , deleteSubCategory 
}
