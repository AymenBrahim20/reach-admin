import { useState  } from 'react';
import { useNavigate  } from 'react-router-dom';
import Swal from 'sweetalert2';
import CategoryService from '../../Service/Category.service';

const AddCategory=()=>{
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
   ;
      for (let i = 0; i < Image.length; i++){
        formData.append('files',Image[i])
      }
      Swal.fire({
        title: 'Do you want to save a new category!',
        showDenyButton: true,
        confirmButtonText: 'Save',
        denyButtonText: `Don't save`,
      })
      .then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          CategoryService.createCategory(formData)
          .then((res)=>{
            console.log(res)
            navigate('/Listcategory')
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
      <h4 className="card-title">Add Category</h4>
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
          <label htmlFor="exampleInputEmail1">Image:</label>
          <input type="file" className="form-control" id="exampleInputEmail1" placeholder="Image"  name="files"   multiple onChange={onChangeHandlerImage} />
        </div>
       
        <button type="submit" className="btn btn-primary mr-2">Add</button>
      </form>
    </div>
  </div>
</div>
);
}

  


 






export default AddCategory;