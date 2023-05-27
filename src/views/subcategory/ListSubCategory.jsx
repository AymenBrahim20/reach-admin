/* eslint-disable jsx-a11y/no-redundant-roles */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import SubCategoryService from '../../Service/SubCategory.service';
import Swal from 'sweetalert2';
import SideBar from '../../components/SideBar';
import Header from '../../components/Header';
//import Badge from 'react-bootstrap/Badge';

const ListSubCategory = () => {
  const [subcategories,setSubCategories]=useState()
  const getAllSub=()=>{
    SubCategoryService.getAllSub().then((res)=>{
      console.log(res)
      setSubCategories(res.data.data)
    }).catch((err)=>{
      console.log(err)
    })
  }
  useEffect(()=>{
    getAllSub('/Listsubcategory')
  },[])
  const deleteSubCategory=(id)=>{
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
        SubCategoryService.deleteSubCategory(id).then((res)=>{
            getAllSub();
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
  const filteredData = subcategories?.filter((el) => {
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
                <h4 className="card-title">List SubCategory</h4>
                <ul className="navbar-nav w-100">
      <li className="nav-item w-100">
        <form className="nav-link mt-2 mt-md-0 d-none d-lg-flex search">
          <input type="text" className="form-control" placeholder="Search SubCategories"   onChange={inputHandler} />
        </form>
      </li>
    </ul>
                <div className="table-responsive">
                  <table className="table table-hover">
                    <thead>
                      <tr>
                      <th >id</th>
                <th>name</th>
                <th >Category</th>
                <th >Product</th>

                <th >actions</th>
                      </tr>
                    </thead>
                    <tbody>
                    {filteredData?.map((item,index)=>{
                    return(
                        <tr id="trow_1">
                <td className="text-center">{index}</td>
                <td><span className="badge badge-warning">{item.name}</span></td>
                <td><span className="badge badge-success">{item.category?.name}</span></td>
                <td><span  className="badge badge-success"> {item.product?.map((i) => {
                              return <tr style={{height:"30px"}}>{i.name}  </tr>;
                            })}</span></td>
               
                
                
                <td>
                <Link to={`/Updatecsubcategory/${item._id}`}> <button className="btn btn-default btn-rounded btn-sm"><span className="fa fa-pencil" /></button>
                </Link>
                  <button className="btn btn-danger btn-rounded btn-sm" onClick={(e)=>deleteSubCategory(item._id)}><span className="fa fa-times" /></button>
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
export default ListSubCategory;