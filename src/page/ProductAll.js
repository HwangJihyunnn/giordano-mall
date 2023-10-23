import React, { useEffect, useState } from 'react';
import ProductCard from '../component/ProductCard';
import { Container, Row, Col} from 'react-bootstrap'
import {useSearchParams} from 'react-router-dom'
import { productAction } from '../redux/actions/productAction';
import { useDispatch, useSelector} from 'react-redux'

const ProductAll = () => {
    const productList = useSelector(state=>state.product.productList)
    const [ query, setQuery ] =useSearchParams();
    const dispatch = useDispatch();
    const getProducts = () => {
        let searchQuery = query.get('q')|| "";
        dispatch(productAction.getProducts(searchQuery))
    }

    useEffect(() => {
        getProducts()
    }, [query])

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
