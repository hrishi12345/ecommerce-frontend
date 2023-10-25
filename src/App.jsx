import React from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom"

import './App.css';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import OurStore from './pages/OurStore';
import Blog from './pages/Blog';
import ComparePage from './pages/ComparePage';
import Wishlist from './pages/Wishlist';
import Login from './pages/Login';
import SingleProduct from './pages/SingleProduct';
import Cart from './pages/Cart';


function App() {
  
  return (
    <>
    
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Layout />}>
     <Route index element={<Home />} />
     <Route path='/product/:id' element={<SingleProduct />} />
     <Route path='/about' element={<About />} />
     <Route path='/cart' element={<Cart />} />
     <Route path='/contact' element={<Contact />} />
     <Route path='/ourstore' element={<OurStore />} />
     <Route path='/blog' element={<Blog />} />
     <Route path='/compare' element={<ComparePage />}></Route>
     <Route path='/wishlist' element={<Wishlist />} />
     <Route path='/login' element={<Login />} />
    </Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
