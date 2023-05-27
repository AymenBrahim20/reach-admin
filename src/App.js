import './App.css';
import './Form.css';

import Home from './views/Home';
import { BrowserRouter, Routes, Route,Navigate  } from "react-router-dom";
import AddCategory from './views/category/AddCategory';
import Listcategory from './views/category/ListCategory';
import AddSubCategory from './views/subcategory/AddSubCategory';
import ListSubCategory from './views/subcategory/ListSubCategory';
import AddProduct from './views/Product/AddProuct';
import ListProduct from './views/Product/ListProduct';
import UpdateCategory from './views/category/UpdateCategory';
import UpdateSubCategory from './views/subcategory/UpdateSubCategory';
import UpdateProduct from './views/Product/UpdateProduct';
import ListCustomers from './views/customer/ListUsers';
import ListUsers from './views/customer/ListUsers';
import Charts from './views/Charts';
import Login from './views/Login';
import Profile from './views/Profile';
import UpdateProfile from './views/UpdateProfile';

function App() {

  const Privateroute = ({children})=>{
    if(!localStorage.getItem("user")){
       return   <Navigate to="/"></Navigate>
    } return children
  }


  return (
    <div className="App">
     <BrowserRouter>

   <Routes>

<Route path="/home"   element={<Home/>} >  </Route>

<Route path='/Listcategory' element={<Privateroute><Listcategory /></Privateroute>  }> </Route>
   <Route path='/Addcategory' element={<Privateroute> <AddCategory /></Privateroute> }> </Route>
   <Route path='/Updatecategory/:id' element={<Privateroute><UpdateCategory /></Privateroute>    }> </Route>
   <Route path='/Listsubcategory' element={<Privateroute><ListSubCategory /></Privateroute> }> </Route>
   <Route path='/Addsubcategory' element={<Privateroute> <AddSubCategory /></Privateroute>  }> </Route>
   <Route path='/Updatecsubcategory/:id' element={<Privateroute> <UpdateSubCategory /></Privateroute>  }> </Route>
   <Route path='/ListP' element={<Privateroute> <ListProduct /></Privateroute>  }> </Route>
   <Route path='/AddP' element={<Privateroute><AddProduct /></Privateroute>  }> </Route>
   <Route path='/UpdateProduct/:id' element={<Privateroute><UpdateProduct /></Privateroute>  }> </Route>
   <Route path='/charts' element={<Privateroute><Charts /></Privateroute>   }> </Route>
   <Route path='/profile' element={<Privateroute><Profile /></Privateroute>  }> </Route>
   <Route path='/UpdateProfile/:id' element={<Privateroute><UpdateProfile /></Privateroute>  }> </Route>
   <Route path='/ListUsers' element={<Privateroute><ListUsers /></Privateroute>  }> </Route>

   <Route path="/"   element={<Login/>}></Route> 

</Routes>






   



 
</BrowserRouter>
</div>
   
  );
}

export default App;
