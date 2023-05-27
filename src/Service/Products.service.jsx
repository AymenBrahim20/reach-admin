/* eslint-disable no-template-curly-in-string */
/* eslint-disable import/no-anonymous-default-export */
import http from "./AxiosContext";

const createProduit=(data) => { 
    return http.post("/product",data )
}
const getAllProducts=() => { 
    return http.get("/product") 
}
const updateProduct=(id , data ) => { 
    return http.put(`/product/${id}` , data ) 
}
const getProduct=(id ) => { 
    return http.get(`/product/${id}` ) 
}
const deleteProduct=(id ) => { 
    return http.delete(`/product/${id}` ) 
}
export default { 
    createProduit , getAllProducts ,updateProduct ,getProduct , deleteProduct 
}
