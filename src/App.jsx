
import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import Login from './pages/Login';
import Purchases from './pages/Purchases';
import MyNavBar from './components/MyNavBar';
import LoadingScreens from './components/LoadingScreens';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsThunk } from './store/slices/products.slice';
import { useEffect } from 'react';
import {Container} from "react-bootstrap"
import ProtectedRoutes from './components/ProtectedRoutes';




function App() {
  
  const isLoading = useSelector(state => state.isLoading)
  const dispatch = useDispatch();

  useEffect (() => {
    dispatch(getProductsThunk())
},[])

  return (
   <HashRouter>
    <MyNavBar />
    {isLoading && <LoadingScreens />}
    
    <Container className='mt-5'>

    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/products/:id' element={<ProductDetail/>} />
      <Route path='/login' element={<Login/>} />
    <Route element={<ProtectedRoutes /> }>
      
      <Route path='/purchases' element={<Purchases />} />
    </Route>

     </Routes>
    </Container>
 
   </HashRouter>
  )
}

export default App
