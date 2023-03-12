import React from 'react';
import Products from '../components/Products';
import { Container } from 'react-bootstrap';
import { products } from '../store/CartProvider';
const Shop = () => {
  return (
    <Container>
        {!products && <p className='text-center p-3'>Loading...</p>}
        {products && <Products products={products} />}
    </Container>
  )
}

export default Shop