import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import Details from './components/Details';
import Errror from './components/Errror';
import Bookacall from './components/bookacall';
import Main from './components/Main';
// import Layout from './layout/Layout';
// import Home from './components/pages/Home';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
// import { Footer, Blog, Possibility, Features, WhatGPT3, Header } from './containers';
// import { CTA, Brand, Navbar } from './components';
// import './App.css';
import {Routes,Route} from "react-router-dom"


function App(){
return(
  <>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/details' element={<Details />} />
      <Route path='/bookacall' element={<Bookacall/>} />
      <Route path='/home' element={<Home/>} />
      <Route path='*' element={<Errror />} />
      <Route path= '/AboutUs' element={<AboutUs/>}></Route>
      <Route path='/ContactUs' element={<ContactUs/>}></Route>
      {/* <Route path='/Main' element={Home}></Route> */}
    </Routes>
  </>
);
  };
  
export default App;