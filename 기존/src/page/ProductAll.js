import React, { useEffect, useState } from 'react';
import ProductCard from '../component/ProductCard';
import { Container, Row, Col} from 'react-bootstrap'

const ProductAll = () => {
    const [productList, setProductList] = useState([]);
    const getProducts = async() => {
        let url = 'http://localhost:5000/products'
        let response = await fetch(url);
        let data = await response.json();
        console.log(data)
        setProductList(data)
    }

    useEffect(() => {
        getProducts()
    }, [])

  return (
    <Container>
    <Row>
      {
          productList.map((menu, idx) => (
              <Col lg={3} key={idx}>
                  <ProductCard item={menu} />
              </Col>
          ))
      }
    </Row>
  </Container>
  )
}

export default ProductAll