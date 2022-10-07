import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {  useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import {Card, Row} from 'react-bootstrap'
import {Col} from 'react-bootstrap'
import {ListGroup} from 'react-bootstrap'
import {Button} from 'react-bootstrap';
import { addPurchasesThunk } from '../store/slices/cart.slice';
const ProductDetail = () => {

    const {id} = useParams();
    const dispatch = useDispatch();
    const productList = useSelector(state => state.products);
    const [rate, setRate] = useState(5);

    const productDetail = productList.find(products => products.id === Number(id))
    const relatedProduct = productList.filter(products => 
        products.category.id === productDetail?.category.id)

    useEffect(() => {
        setRate(5);
      
    },[id])
    console.log(productDetail)


    const addPurchases = () => {
        const purchases = {
            id: id,
            quantity: rate
        };
        dispatch(addPurchasesThunk(purchases))
    }
    return (
        
        
            <Row>
                <Col>
            <h1>{productDetail?.title} {id}</h1>
            <div className='rate mb-5'>

            <Card className='border-primary mb-2'>
        <Card.Img variant="top" src={productDetail?.productImgs} style={{height: 300, objectFit: "contain"}} />
        <Card.Body>
          <Card.Text>
          <p>Price: {productDetail?.price} $USD</p>
            <p>Status: {productDetail?.status}</p>
          {productDetail?.description}
          </Card.Text>
        </Card.Body>
      </Card>
            
            <Button className='me-3' onClick={() => setRate(rate-1)}>-</Button>
            {rate}
            <Button className='me-3' onClick={() => setRate(rate-1)}>+</Button>
        
            <Button className='mt-2' onClick={addPurchases}>Add to cart</Button>
            
            </div>
                </Col>
                <Col lg={3}>
                    <ListGroup variant='flush'>
                {relatedProduct.map(product => (

                    <ListGroup.Item key={product.id} >
                        <Link to={`/products/${product.id}`}>
                            <h4>{product.title}</h4>
                            <img src={product.productImgs} style={{height: 200, objectFit: "contain"}} className='img-fluid' />
                            <p className='border-primary mb-2'>{product?.description}</p>
                        </Link>
                    </ListGroup.Item >                  
                ))  
            }
                    </ListGroup>
             </Col>
            </Row>
        
    );
};

export default ProductDetail;