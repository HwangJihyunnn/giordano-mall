import React from 'react'
import {Navgate} from 'react-router-dom'
import ProductDetail from '../page/ProductDetail'

const PrivateRoute = ({authenticate}) => {
  return authenticate===true?<ProductDetail />:<Navgate to='/login' />
}

export default PrivateRoute
