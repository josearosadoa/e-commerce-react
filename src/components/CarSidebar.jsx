import React, { useEffect, useState } from 'react';
import {Offcanvas, ListGroup, Button} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCarPurchasesThunk, purchasesCartThunk } from '../store/slices/cart.slice';


const CarSidebar = ({show, handleClose}) => {

    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart)
    const [total, setTotal]= useState(0);

    useEffect(() => {
        dispatch(getCarPurchasesThunk())
    },[])

    
useEffect (() => {
  let newTotal = 0;
  cart.forEach(product => {
      newTotal += product.price * product.productsInCart.quantity

  })
    setTotal(newTotal)
},[cart])

    
    return (


    
        <Offcanvas show={show} onHide={handleClose} placement="end">
      <Offcanvas.Header closeButton>
      <Offcanvas.Title>Product</Offcanvas.Title>
      </Offcanvas.Header>
      < Offcanvas.Body>
       <ListGroup >
      {
        cart.map(car =>(
            <ListGroup.Item key={car.id}>
            <Link as={Link} to={`/products/${car.id}`}>
                <h4>{car.title}</h4>
               
               <p>{car.productsInCart.quantity}</p>
                {car.price}
                <br />
                <button> <i className="fa-solid fa-trash" style={{color: "red"}}></i></button>
                
                </Link>
                
                
            </ListGroup.Item>
        ))
    }
    <Button onClick={() =>dispatch(purchasesCartThunk())}>Checkout</Button>
  </ListGroup>
  <p>{total}</p>
</Offcanvas.Body>
</Offcanvas>
    );
};

export default CarSidebar;