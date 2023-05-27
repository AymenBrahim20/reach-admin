


import React from "react";
import {  useState  } from 'react';

import LoginService from '../Service/Login.service';

function Logout(){
const [data,setData]=useState({})

const onClickHandler=(e)=>{

    LoginService.updateUser(data)
 
}
   
   
   
   
   }



    
   





 
 
 
 


 export default Logout