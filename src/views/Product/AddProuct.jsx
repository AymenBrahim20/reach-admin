/* eslint-disable no-unused-vars */
import React from "react";
import { useEffect, useState  } from 'react';
import { useNavigate  } from 'react-router-dom';
import Swal from 'sweetalert2';
import ProductsService from "../../Service/Products.service";

const AddProduct=()=>{
  const navigate = useNavigate()
  const [data,setData]=useState({})
  const [Image,setImage]=useState({})
  const onChangeHandler=(e)=>{
    setData({
      ...data,
      [e.target.name]:e.target.value
    })
    console.log(data)
  }
  const formData = new FormData();
  const onSubmitHandler=(e)=>{
  e.preventDefault();
  formData.append('name', data.name);
  formData.append('description', data.description);
  formData.append('price', data.price);

  formData.append('quantity', data.quantity);
  formData.append('subcategories', data.subcategories);
  formData.append('categories', data.categories);

;
  for (let i = 0; i < Image.length; i++){
    formData.append('files',Image[i])
  }
  Swal.fire({
    title: 'Do you want to save a new Product!',
    showDenyButton: true,
    confirmButtonText: 'Save',
    denyButtonText: `Don't save`,
  })
  .then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      ProductsService.createProduit(formData)
      .then((res)=>{
        console.log(res)
        navigate('/ListP')
      })
      .catch((err)=>{
        console.log(err)
      })
    } else if (result.isDenied) {
      Swal.fire('Changes are not saved', '', 'info')
    }
  })
  }
  const onChangeHandlerImage=(e)=>{
    e.preventDefault()
    setImage(e.target.files)
  }
 
    
   return (
<div className="col-md-6 grid-margin stretch-card">
  <div className="card">
    <div className="card-body">
      <h4 className="card-title">Add Product</h4>
      <form className="forms-sample"  onSubmit={onSubmitHandler} >
        <div className="form-group">
          <label htmlFor="exampleInputUsername1">Name</label>
          <input type="text" className="form-control" id="exampleInputUsername1" placeholder="name" name="name"  onChange={onChangeHandler} />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Description</label>
          <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Description"  name="description"   onChange={onChangeHandler} />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Price</label>
          <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Price"  name="price"   onChange={onChangeHandler} />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Quantity</label>
          <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Quantity"  name="quantity"   onChange={onChangeHandler} />
        </div>
 <div className="form-group">
          <label htmlFor="exampleInputEmail1">Image:</label>
          <input type="file" className="form-control" id="exampleInputEmail1" placeholder="Image"  name="files"   multiple onChange={onChangeHandlerImage} />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Subcategories</label>
          <input type="text" className="form-control" id="exampleInputEmail1" placeholder="subcategories"  name="subcategories"   onChange={onChangeHandler} />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Categories</label>
          <input type="text" className="form-control" id="exampleInputEmail1" placeholder="categories"  name="categories"   onChange={onChangeHandler} />
        </div>
       
        <button type="submit" className="btn btn-primary mr-2">Add</button>
      </form>
    </div>
  </div>
</div>






    
             
      
  
  
   )


}



export default AddProduct;