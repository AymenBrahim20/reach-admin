import { useEffect, useState  } from 'react';
import { useNavigate,useParams  } from 'react-router-dom';
import Swal from 'sweetalert2';
import ProductsService from '../../Service/Products.service';


const UpdateProduct=()=>{
const {id} =useParams()
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
      title: 'Do you want to save updated data!',
      showDenyButton: true,
      confirmButtonText: 'Save',
      denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        ProductsService.updateProduct(id,data).then((res)=>{
          console.log(res)
          navigate('/ListP')
        }).catch((err)=>{
          console.log(err)
        })
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })
   }
   useEffect(()=>{
    ProductsService.getProduct(id).then((res)=>{
      console.log("dataofcat",res)
      setData(res.data.data)
    })
   },[])

return(

  <div className="col-md-6 grid-margin stretch-card">
  <div className="card">
    <div className="card-body">
      <h4 className="card-title">Update Product</h4>
      <form className="forms-sample"  onSubmit={onSubmitHandler} >
        <div className="form-group">
          <label htmlFor="exampleInputUsername1">Name</label>
          <input type="text" className="form-control" id="exampleInputUsername1" placeholder="name" name="name"  value={data.name} onChange={onChangeHandler} />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Description</label>
          <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Description"  name="description" value={data.description}   onChange={onChangeHandler} />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Price</label>
          <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Price"  name="price"  value={data.price}  onChange={onChangeHandler} />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Quantity</label>
          <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Quantity"  name="quantity" value={data.quantity}  onChange={onChangeHandler} />
        </div>

        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Subcategories</label>
          <input type="text" className="form-control" id="exampleInputEmail1" placeholder="subcategories"  name="subcategories"   onChange={onChangeHandler} />
        </div>
        
       
        <button type="submit" className="btn btn-primary mr-2">Update</button>
      </form>
    </div>
  </div>
</div>



)

}

export default UpdateProduct
