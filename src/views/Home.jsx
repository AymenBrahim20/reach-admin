import React from "react";
import SideBar from "../components/SideBar";
import Header from "../components/Header";
import Layout from "./Layout";
import Footer from "../components/Footer";

function Home () {

return (
<div>
<div className="container-scroller">

<SideBar/>
<div className="container-fluid page-body-wrapper">

<Header/>
<div className="main-panel">

<Layout/>


<Footer/>

</div>

</div>

</div>

</div>


)


}


export default Home