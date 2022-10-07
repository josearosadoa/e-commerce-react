import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getPurchasesThunk } from '../store/slices/purchase.slice';

import {ListGroup} from 'react-bootstrap';

const Purchases = () => {
const purchases = useSelector(state => state.purchases)
const navigate = useNavigate();
const dispatch = useDispatch();

useEffect(()=> {
    dispatch(getPurchasesThunk())
},[])
    return (
        <div>
            <h1>Purchases</h1>
            <br />
            <ListGroup key={purchases[0]?.id}>

                {
                    purchases.map(purchase => (
                      <ListGroup.Item key={purchase.cart?.id}>
                        
                          {purchase?.cart.products.map(item => (
                            <div key={item.id}>


                            <h3 onClick={() => navigate(`/products/${item.cart.products.id}`)}>{item.title}</h3>
                            Price: {item.price}
                            <br />
                            </div>
                           
                           ))}
                    </ListGroup.Item>
                    ))
                }
            </ListGroup>
        </div>
    );
};

export default Purchases;