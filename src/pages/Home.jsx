import axios from 'axios';
import React, { useDebugValue, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getProductsThunk } from '../store/slices/products.slice';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import {ListGroup} from 'react-bootstrap';
import {Card} from 'react-bootstrap';

const Home = () => {

const [categorys, setCategorys] = useState([]);
const navigate = useNavigate();
const newProduct = useSelector(state => state.products)
const [productFiltered, setProductsFiltered] = useState([]);
const [searchValue, setSearchValue] = useState("")

useEffect(() => {
    axios.get("https://ecommerce-api-react.herokuapp.com/api/v1/products/categories")
    .then(res => setCategorys(res.data.data.categories))
},[])

useEffect(()=> {
    setProductsFiltered(newProduct)
},[newProduct])
 
const filterCategory = (categoryId) => {
    alert(categoryId)
    const filtered = newProduct.filter(product => product.category.id === categoryId)
    setProductsFiltered(filtered)
}

const searchProducts = () =>{
    alert(searchProducts)
    const filtered = newProduct.filter(
        product => product.title.toLowerCase().includes(searchValue.toLowerCase()))
    
    
        setProductsFiltered(filtered);
}

    return (
        <Row>
        <Col leg={3}> 
            <ListGroup>
              
            
            {
                categorys.map(category => (
                    <ListGroup.Item 
                    key={category.id} 
                    onClick={() => filterCategory(category.id)}
                    style={{cursor: 'pointer'}}
                    >{category.name}
            </ListGroup.Item>
                ))
            }
            </ListGroup>
        </Col>
        <Col>

            <InputGroup className="mb-3">
        <Form.Control
          placeholder="Search Description"
          onChange={e => setSearchValue(e.target.value)}
          value={searchValue}
        />
        <Button variant="outline-secondary"  onClick={searchProducts}>
          Search
        </Button>
      </InputGroup>

      

        
      <Row xs={1} md={2} xl={2} className="g-2">
      {productFiltered.map(product => (
        <Col key={product.id} className="col-8 d-flex justify-content-center-mb-4" style={{width: "18rem;"}}>
          <Card className='border-primary mb-4' onClick={() => navigate(`/products/${product.id}`)} >
            <Card.Img className='img-fluid  img-thumbnail ' variant="top" src={product.productImgs[1]} style={{objectFit: "contain"}} />
            <Card.Body>
              <Card.Title class='fs-5 fst-normal'>{product.title}</Card.Title>
              <Card.Text>
              {product.category.name}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>

      </Col>
    </Row>
    );
};

export default Home;