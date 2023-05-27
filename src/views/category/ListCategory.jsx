/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/no-redundant-roles */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import Categoryservice from '../../Service/Category.service';
import Swal from 'sweetalert2';
import SideBar from '../../components/SideBar';
import Header from '../../components/Header';
//import Badge from 'react-bootstrap/Badge';




const Listcategory = () => {
  const [categories,setCategories]=useState()
  const getAllcategories=()=>{
    Categoryservice.getAll().then((res)=>{
      console.log(res)
      setCategories(res.data.data)
    }).catch((err)=>{
      console.log(err)
    })
  }
  useEffect(()=>{
    getAllcategories('/Listcategory')
  },[])
  const deleteCategory=(id)=>{
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085D6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Categoryservice.deleteCategory(id).then((res)=>{
          getAllcategories();
        });
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
      
  }
    const [inputText, setInputText] = useState("");
    let inputHandler = (e) => {
      //convert input text to lower case
      var lowerCase = e.target.value.toLowerCase();
      setInputText(lowerCase);
    };
    const filteredData = categories?.filter((el) => {
      if (inputText === '') {
          return el;
      } else {
          return el.name.toLowerCase().includes(inputText)
      }
  })
  

  
    return (

      <div className="container-scroller">
      <SideBar/>
      
        {/* partial */}
        <div className="container-fluid page-body-wrapper">
          {/* partial:../../partials/_navbar.html */}
         <Header/>
          {/* partial */}
          <div className="main-panel">
            <div className="content-wrapper">
              <div className="page-header">
                
                <nav aria-label="breadcrumb">
                  
                </nav>
              </div>
              <div className="row">
               
                <div className="col-lg-11 grid-margin stretch-card">
                  <div className="card">
                    <div className="card-body">
                      <h4 className="card-title">List Category</h4>
                      <ul className="navbar-nav w-100">
            <li className="nav-item w-100">
              <form className="nav-link mt-2 mt-md-0 d-none d-lg-flex search">
                <input type="text" className="form-control" placeholder="Search Categories"   onChange={inputHandler} />
              </form>
            </li>
          </ul>
                      <div className="table-responsive">
                        <table className="table table-hover">
                          <thead>
                            <tr>
                            <th >id</th>
                            <th>name</th>
                  <th  style={{textAlign:"left"}} width={100}>description</th>
                  <th  width={100} >Image</th>

                  <th width={100} >SubCategory</th>
                  <th  width={100}>actions</th>
                            </tr>
                          </thead>
                          <tbody style={{textAlign:"left"}} >
                         
                  {filteredData?.map((item,index)=>{
                    
                    return(
                        <tr id="trow_1">
                <td className="text-center">{index}</td>
                <td><strong strong  class="badge badge-warning"  >{item.name}</strong></td>
                <td><span className="badge badge-info">{item.description}</span></td>
                <td><strong>{item.files?.map((i)=>{
                  return (<img  style={{width:"75px",borderRadius:"0"}}  src={"http://localhost:4000/file/art/"+ i} />    )
                      
                })}</strong></td>
                <td><span className="badge badge-success"> {item.subcategories?.map((i) => {
                              return <tr>{i.name}</tr>;
                            })}</span></td>
              
                            
                
                
                <td>
                <Link to={`/UpdateCategory/${item._id}`}> <button className="btn btn-default btn-rounded btn-sm"><span className="fa fa-pencil" /></button>
                </Link>
                  <button className="btn btn-danger btn-rounded btn-sm" onClick={(e)=>deleteCategory(item._id)}><span className="fa fa-times" /></button>
                </td>
              </tr>
                    )
                })}
                            
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
            
          </div>
          {/* main-panel ends */}
        </div>
        {/* page-body-wrapper ends */}
      </div>

       
        


    )
}
export default Listcategory;