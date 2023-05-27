import React from "react";

import Header from "../components/Header";
import SideBar from "../components/SideBar";
import { Bar,Doughnut, Line, Radar, } from "react-chartjs-2";
import { useState,useEffect } from "react";

import ProductsService from "../Service/Products.service";
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

function Charts (){


   
const [products,setProducts]=useState();


const getAll=()=>{
  
  ProductsService.getAllProducts().then((res)=>{
    console.log(res)
    setProducts(res.data.data)
    }).catch((err)=>{
    console.log(err)
    })
   
}
useEffect(()=>{
  getAll()  
},[])









return(


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
      <h3 className="page-title"> Chart </h3>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><a href="#">Charts</a></li>
          <li className="breadcrumb-item active" aria-current="page">Chart-js</li>
        </ol>
      </nav>
    </div>
    <div className="row">
      <div className="col-lg-6 grid-margin stretch-card">
        <div className="card">
          <div className="card-body"><div className="chartjs-size-monitor"><div className="chartjs-size-monitor-expand"><div className /></div><div className="chartjs-size-monitor-shrink"><div className /></div></div>
            <h4 className="card-title">Line chart</h4>
            <Line
                  data={{
                    labels: products?.map((x) => x.name),
                    datasets: [
                      { label: "Quanity",data: products?.map((x) => x.quantity),
                      backgroundColor: ["rgba(250, 10, 132, 0.8)","rgba(54, 162, 235, 0.5)","rgba(255, 206, 86, 0.8)","rgba(75, 192, 192, 0.7)","rgba(153, 102, 255, 0.8)","rgba(255, 159, 64, 0.7)",],
                      borderColor: ["rgba(255, 99, 132, 1)","rgba(54, 162, 235, 1)","rgba(255, 206, 86, 1)","rgba(75, 192, 192, 1)","rgba(153, 102, 255, 1)","rgba(255, 159, 64, 1)",]
                      ,borderWidth: 1,
    },
    {
      label: "Price",data: products?.map((x) => x.price),
      backgroundColor: ["rgba(250, 10, 132, 0.8)"
      ,"rgba(54, 162, 235, 0.5)",
      "rgba(255, 206, 86, 0.8)",
      "rgba(75, 192, 192, 0.7)"
      ,"rgba(153, 102, 255, 0.8)"
      ,"rgba(255, 159, 64, 0.7)"
      ,]
      ,borderColor: ["rgba(255, 99, 132, 1)"
      ,"rgba(54, 162, 235, 1)","rgba(255, 206, 86, 1)"
      ,"rgba(75, 192, 192, 1)"
      ,"rgba(153, 102, 255, 1)"
      ,"rgba(255, 159, 64, 1)",],
      borderWidth: 1,
    },
                      





                    ],
                  }}
                  options={{
                    scales: {
                      y: {
                        beginAtZero: true,
                      },
                    },
                  }}
                />
          </div>
        </div>
      </div>
      <div className="col-lg-6 grid-margin stretch-card">
        <div className="card">
          <div className="card-body"><div className="chartjs-size-monitor"><div className="chartjs-size-monitor-expand"><div className /></div><div className="chartjs-size-monitor-shrink"><div className /></div></div>
            <h4 className="card-title">Bar chart</h4>
            <Bar
                  data={{
                    labels: products?.map((x) => x.name),
                    datasets: [
                      {
                        label: "Price",
                        data: products?.map((x) => x.price),
                        backgroundColor: [
                          "rgba(250, 10, 132, 0.8)",
                          "rgba(54, 162, 235, 0.5)",
                          "rgba(255, 206, 86, 0.8)",
                          "rgba(75, 192, 192, 0.7)",
                          "rgba(153, 102, 255, 0.8)",
                          "rgba(255, 159, 64, 0.7)",
                        ],
                        
                        borderColor: [
                          "rgba(255, 99, 132, 1)",
                          "rgba(54, 162, 235, 1)",
                          "rgba(255, 206, 86, 1)",
                          "rgba(75, 192, 192, 1)",
                          "rgba(153, 102, 255, 1)",
                          "rgba(255, 159, 64, 1)",
                        ],
                        borderWidth: 1,
                      },
                    ],
                  }}
                  options={{
                    scales: {
                      y: {
                        beginAtZero: true,
                      },
                    },
                  }}
                />  
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-6 grid-margin stretch-card">
        <div className="card">
          <div className="card-body"><div className="chartjs-size-monitor"><div className="chartjs-size-monitor-expand"><div className /></div><div className="chartjs-size-monitor-shrink"><div className /></div></div>
            <h4 className="card-title">Radar chart</h4>
            <Radar
                  data={{
                    labels: products?.map((x) => x.name),
                    datasets: [
                      {
                        label: "Price",
                        data: products?.map((x) => x.price),
                        backgroundColor: [
                          "rgba(250, 10, 132, 0.8)",
                          "rgba(54, 162, 235, 0.5)",
                          "rgba(255, 206, 86, 0.8)",
                          "rgba(75, 192, 192, 0.7)",
                          "rgba(153, 102, 255, 0.8)",
                          "rgba(255, 159, 64, 0.7)",
                        ],
                        borderColor: [
                          "rgba(255, 99, 132, 1)",
                          "rgba(54, 162, 235, 1)",
                          "rgba(255, 206, 86, 1)",
                          "rgba(75, 192, 192, 1)",
                          "rgba(153, 102, 255, 1)",
                          "rgba(255, 159, 64, 1)",
                        ],
                        borderWidth: 1,
                      },
                    ],
                  }}
                  options={{
                    scales: {
                      y: {
                        beginAtZero: true,
                      },
                    },
                  }}
                />
 
          </div>
        </div>
      </div>
      <div className="col-lg-6 grid-margin stretch-card">
        <div className="card">
          <div className="card-body"><div className="chartjs-size-monitor"><div className="chartjs-size-monitor-expand"><div className /></div><div className="chartjs-size-monitor-shrink"><div className /></div></div>
            <h4 className="card-title">Doughnut chart</h4>
            <Doughnut
                  data={{
                    labels: products?.map((x) => x.name),
                    datasets: [
                      {
                        label: "# of Votes",
                        data: products?.map((x) => x.quantity),
                        backgroundColor: [
                          "rgba(250, 10, 132, 0.8)",
                          "rgba(54, 162, 235, 0.5)",
                          "rgba(255, 206, 86, 0.8)",
                          "rgba(75, 192, 192, 0.7)",
                          "rgba(153, 102, 255, 0.8)",
                          "rgba(255, 159, 64, 0.7)",
                        ],
                        
                        borderColor: [
                          "rgba(255, 99, 132, 1)",
                          "rgba(54, 162, 235, 1)",
                          "rgba(255, 206, 86, 1)",
                          "rgba(75, 192, 192, 1)",
                          "rgba(153, 102, 255, 1)",
                          "rgba(255, 159, 64, 1)",
                        ],
                        borderWidth: 1,
                      },
                    ],
                  }}
                  options={{
                    scales: {
                      y: {
                        beginAtZero: true,
                      },
                    },
                  }}
                />   
          
          </div>
        </div>
      </div>
    </div>
   
  </div>
  {/* content-wrapper ends */}
  {/* partial:../../partials/_footer.html */}
  <footer className="footer">
    <div className="d-sm-flex justify-content-center justify-content-sm-between">
      <span className="text-muted d-block text-center text-sm-left d-sm-inline-block">Copyright © bootstrapdash.com 2020</span>
      <span className="float-none float-sm-right d-block mt-1 mt-sm-0 text-center"> Free <a href="https://www.bootstrapdash.com/bootstrap-admin-template/" target="_blank">Bootstrap admin templates</a> from Bootstrapdash.com</span>
    </div>
  </footer>
  {/* partial */}
</div>

        {/* main-panel ends */}
      </div>
      {/* page-body-wrapper ends */}
    </div>




)


}





export default Charts

