import { Route, BrowserRouter as Router, Routes, useLocation } from 'react-router-dom';
import './App.css';
import { Home } from './component/Home';
import { Login } from './component/Login';
import { Navbar } from './component/Navbar';
import { Register } from './component/Register';
import Singlecard from './component/Singlecard';
import DashboardLayout from './component/dashboard/DashboardLayout';
import Manage from './component/dashboard/Manage';
import Upload from './component/dashboard/Upload';

import "./component/dashboard/css/bgtxt.css"
import About from './component/About';
function Main() {

  const locaion =useLocation()
  const hideroutes =["/login","/register"]
  return (
  

    <div>
          {!hideroutes.includes(locaion.pathname) &&<Navbar/>}
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Login" element={<Login/>} />
          <Route path="/Register" element={<Register/>} />
          <Route path='/About' element={<About/>}/>
          <Route path="/Singlecard/:id" element={<Singlecard/>} />
          <Route path='/admin/dashboard' element={<DashboardLayout/>}>
          <Route path='/admin/dashboard/manage' element={<Manage/>}/>
          <Route path='/admin/dashboard/upload' element={<Upload/>}/>
          </Route>

        </Routes>
      
    </div>
    
  );
}
function App(){
  return(
    <div className='main-container'>
    <Router>
      <Main/>
    </Router>
    </div>
  )
}
export default App;
