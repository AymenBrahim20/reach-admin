/* eslint-disable no-unused-vars */
import React from "react";
import { useEffect, useState  } from 'react';
import { useNavigate  } from 'react-router-dom';
import Swal from 'sweetalert2';
import SubCategoryService from "../../Service/SubCategory.service";


const AddSubCategory=()=>{
  const navigate = useNavigate()
  const [data,setData]=useState({})
      const onChangeHandler=(e)=>{
        setData({
          ...data,
          [e.target.name]:e.target.value
        })
        console.log(data)
      }
   const onSubmitHandler=(e)=>{
    e.preventDefault()
    Swal.fire({
      title: 'Do you want to save a new Subcategory!',
      showDenyButton: true,
      confirmButtonText: 'Save',
      denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        SubCategoryService.createSubCategory(data).then((res)=>{
          console.log(res)
          navigate('/Listsubcategory')
        }).catch((err)=>{
          console.log(err)
        })
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })
   }
    
   return (

    <div className="col-md-6 grid-margin stretch-card">
  <div className="card">
    <div className="card-body">
      <h4 className="card-title">Add SubCategory</h4>
      <form className="forms-sample"  onSubmit={onSubmitHandler} >
        <div className="form-group">
          <label htmlFor="exampleInputUsername1">Name</label>
          <input type="text" className="form-control" id="exampleInputUsername1" placeholder="name" name="name"  onChange={onChangeHandler} />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Category</label>
          <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Category"  name="category"   onChange={onChangeHandler} />
        </div>
        
        
       
        <button type="submit" className="btn btn-primary mr-2">Add</button>
      </form>
    </div>
  </div>
</div>
             
      
  
  
   )


}



export default AddSubCategory;