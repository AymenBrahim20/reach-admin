/* eslint-disable jsx-a11y/no-redundant-roles */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import UserService from '../../Service/User.service';
import Swal from 'sweetalert2';
import Header from '../../components/Header';
import SideBar from '../../components/SideBar';
//import Badge from 'react-bootstrap/Badge';

const ListUsers = () => {
  const [user,setUsers]=useState()
  const getAllusers=()=>{
    UserService.getAllUsers().then((res)=>{
      console.log(res)
      setUsers(res.data.data)
    }).catch((err)=>{
      console.log(err)
    })
  }
  useEffect(()=>{
    getAllusers('/ListUsers')
  },[])
  const deleteUser=(id)=>{
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
        UserService.deleteUser(id).then((res)=>{
          getAllusers();
        });
        Swal.fire(
          'Deleted!',
          'User has been deleted.',
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
  const filteredData = user?.filter((el) => {
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
                      <h4 className="card-title">List Users</h4>
                      <ul className="navbar-nav w-100">
            <li className="nav-item w-100">
              <form className="nav-link mt-2 mt-md-0 d-none d-lg-flex search">
                <input type="text" className="form-control" placeholder="Search users"   onChange={inputHandler} />
              </form>
            </li>
          </ul>
                      <div className="table-responsive">
                        <table className="table table-hover">
                          <thead>
                            <tr>
                            <th width={50}>id</th>
                <th>username</th>
                <th  width={100} >email</th>

                <th width={100}>FirstName</th>
                <th width={100}>LastName</th>

                <th width={100}>Phone</th>
                <th width={100}>Address</th>

                <th width={100}>Actions</th>
                            </tr>
                          </thead>
                          <tbody>
                           {filteredData?.map((item,index)=>{
                    return(
                        <tr id="trow_1">
                <td className="text-center" >{index}</td>
                <td><strong  class="badge badge-warning"     >{item.username}</strong></td>
                 
                <td><span class="badge badge-info">{item.email}</span></td>
                
                <td><span class="badge badge-info">{item.firstname}</span></td>
                <td><span class="badge badge-info">{item.lastname}</span></td>

                <td><span class="badge badge-info">{item.phone}</span></td>
                <td><span class="badge badge-info">{item.address}</span></td>
                
                
                
                
                
               
                
                
                <td>
                
                  <button className="btn btn-danger btn-rounded btn-sm" onClick={(e)=>deleteUser(item._id)}><span className="fa fa-times" /></button>
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
export default ListUsers;