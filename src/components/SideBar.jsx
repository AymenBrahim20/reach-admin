/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
 import React from "react";
import { Link } from "react-router-dom";

function SideBar()  {

  const handleLogout = () => {
    localStorage.removeItem('user');

  };

return(
<div classname="SideBar">
  <nav className="sidebar sidebar-offcanvas" id="sidebar">
    <div className="sidebar-brand-wrapper d-none d-lg-flex align-items-center justify-content-center fixed-top">
      <a className="sidebar-brand brand-logo" href="index.html"><img src="assets/images/logo.svg" alt="logo" /></a>
      <a className="sidebar-brand brand-logo-mini" href="index.html"><img src="assets/images/logo-mini.svg" alt="logo" /></a>
    </div>
    <ul className="nav">
      <li className="nav-item profile">
        <div className="profile-desc">
          <div className="profile-pic">
            <div className="count-indicator">
              <img className="img-xs rounded-circle " src="assets/images/faces/face15.jpg" alt />
              <span className="count bg-success" />
            </div>
            <div className="profile-name">
              <h5 className="mb-0 font-weight-normal">Aymen Brahim</h5>
              <span >Admin </span>
            </div>
          </div>
          <a href="#" id="profile-dropdown" data-toggle="dropdown"><i className="mdi mdi-dots-vertical" /></a>
          <div className="dropdown-menu dropdown-menu-right sidebar-dropdown preview-list" aria-labelledby="profile-dropdown">
            <a href="#" className="dropdown-item preview-item">
              <div className="preview-thumbnail">
                <div className="preview-icon bg-dark rounded-circle">
                  <i className="mdi mdi-settings text-primary" />
                </div>
              </div>
              <div className="preview-item-content">
                <p className="preview-subject ellipsis mb-1 text-small">Account settings</p>
              </div>
            </a>
            <div className="dropdown-divider" />
            <a href="#" className="dropdown-item preview-item">
              <div className="preview-thumbnail">
                <div className="preview-icon bg-dark rounded-circle">
                  <i className="mdi mdi-onepassword  text-info" />
                </div>
              </div>
              <div className="preview-item-content">
                <p className="preview-subject ellipsis mb-1 text-small">Change Password</p>
              </div>
            </a>
            <div className="dropdown-divider" />
            <a href="#" className="dropdown-item preview-item">
              <div className="preview-thumbnail">
                <div className="preview-icon bg-dark rounded-circle">
                  <i className="mdi mdi-calendar-today text-success" />
                </div>
              </div>
              <div className="preview-item-content">
                <p className="preview-subject ellipsis mb-1 text-small">To-do list</p>
              </div>
            </a>
          </div>
        </div>
      </li>
      <li className="nav-item nav-category">
        <span className="nav-link">Navigation</span>
      </li>
      <li className="nav-item menu-items active">
        <a className="nav-link" href="index.html">
          <span className="menu-icon">
            <i className="mdi mdi-speedometer" />
          </span>
          <span className="menu-title"><Link className="link"    to="/home">Dashboard</Link></span>
        </a>
      </li>
      <li className="nav-item menu-items">
        <a className="nav-link" data-toggle="collapse" href="#ui-basic" aria-expanded="false" aria-controls="ui-basic">
          <span className="menu-icon">
            <i className="mdi mdi-gamepad" />
          </span>
          <span className="menu-title">Categories</span>
          <i className="menu-arrow" />
        </a>
        <div className="collapse" id="ui-basic">
          <ul className="nav flex-column sub-menu">
            <li className="nav-item"><a className="nav-link"><Link  className="link" to='/Addcategory'>Add Category</Link> </a></li>
            <li className="nav-item"> <a className="nav-link" ><Link className="link" to='/Listcategory'>List Category </Link></a> </li>
          </ul>
        </div>
      </li>
      

      <li className="nav-item menu-items">
        <a className="nav-link" data-toggle="collapse" href="#ui-basic" aria-expanded="false" aria-controls="ui-basic">
          <span className="menu-icon">
            <i className="mdi mdi-gamepad" />
          </span>
          <span className="menu-title">SubCategories</span>
          <i className="menu-arrow" />
        </a>
        <div className="collapse" id="ui-basic">
          <ul className="nav flex-column sub-menu">
            <li className="nav-item"> <Link className="link" to='/Addsubcategory'><a className="nav-link" >Add SubCategory</a></Link></li>
            <li className="nav-item"> <Link  className="link"   to='/Listsubcategory'><a className="nav-link" >List SubCategory</a></Link></li>
          </ul>
        </div>
      </li>

      <li className="nav-item menu-items">
        <a className="nav-link" data-toggle="collapse" href="#ui-basic" aria-expanded="false" aria-controls="ui-basic">
          <span className="menu-icon">
            <i className="mdi mdi-cart" />
          </span>
          <span className="menu-title">Products</span>
          <i className="menu-arrow" />
        </a>
        <div className="collapse" id="ui-basic">
          <ul className="nav flex-column sub-menu">
            <li className="nav-item"><Link className="link" to='/AddP'> <a className="nav-link" >Add Product</a></Link></li>
            <li className="nav-item"> <Link className="link"   to='/ListP' ><a className="nav-link" >List Products</a></Link></li>
          </ul>
        </div>
      </li>
      <li className="nav-item menu-items">
        <a className="nav-link" data-toggle="collapse" href="#auth" aria-expanded="false" aria-controls="auth">
          <span className="menu-icon">
            <i className="mdi mdi-account-multiple" />
          </span>
          <span className="menu-title">Users</span>
          <i className="menu-arrow" />
        </a>
        <div className="collapse" id="auth">
          <ul className="nav flex-column sub-menu">
            <li className="nav-item"><Link   className="link" to='/ListUsers'> <a className="nav-link" >List Users</a></Link></li>
            
          </ul>
        </div>
        </li>
     
      <li className="nav-item menu-items">
        <a className="nav-link" >
          <span className="menu-icon">
            <i className="mdi mdi-chart-areaspline" />
          </span>
          <span className="menu-title"><Link className="link"    to='/charts'>Charts</Link></span>
        </a>
      </li>
      
      
        <li className="nav-item menu-items">
        <a className="nav-link" >
          <span className="menu-icon">
            <i className="mdi mdi-contacts" />
          </span>
          <span className="menu-title"><Link className="link"     to='/profile'>Profile</Link></span>
        </a>
      </li>
        <li className="nav-item menu-items">
        <a className="nav-link" >
          <span className="menu-icon">
            <i className="mdi mdi-exit-to-app" />
          </span>
          <span className="menu-title"><Link className="link"     to='/' onClick={handleLogout}>Log out</Link></span>
        </a>
      </li>
      
     
    </ul>
  </nav>
</div>


    
)


}

export default SideBar
