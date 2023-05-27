import React from "react";
import { Link } from "react-router-dom";

function Profile (){

    
    const userdata= JSON.parse(localStorage.getItem("user") )
  
    console.log("user",userdata.user);


    return(
        /* <div className="col-md-6 grid-margin stretch-card">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">Profile</h4>
            <form className="forms-sample"   >
              <div className="form-group">
                <label htmlFor="exampleInputUsername1">Name</label>
                <label htmlFor="exampleInputUsername1">{userdata.user.username}</label>

              </div>
              
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">email</label>
                <label htmlFor="exampleInputEmail1">{userdata.user.email}</label>

              </div>
             
              <Link to={`/UpdateProfile/${userdata.user._id}`}> <button className="btn btn-default btn-rounded btn-sm"><span className="fa fa-pencil" />Update Profile</button>
                </Link>
            </form>
          </div>
        </div>
      </div> */
      <div className="col-8 grid-margin stretch-card">
  <div className="card">
    <div className="card-body">
      <h4 className="card-title">Profile</h4>
      <form className="forms-sample">
        <div className="form-group">
          <label htmlFor="exampleInputName1">Username</label>
          <input type="text" className="form-control" id="exampleInputName1" placeholder="Name" value= {userdata.user.username}  />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail3">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail3" placeholder="Email" value= {userdata.user.email}  />
        </div>
        
        <Link to={`/UpdateProfile/${userdata.user._id}`}> <button className="btn btn-default btn-rounded btn-sm"><span className="fa fa-pencil" /> Update Profile </button>
                </Link>
       
      </form>
    </div>
  </div>
</div>

     
    )

}




export default Profile