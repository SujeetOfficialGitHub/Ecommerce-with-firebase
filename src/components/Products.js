import React from 'react'
import {Row, Col, Card} from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Products = ({products}) => {
  return (
    <Row className='mx-auto'>
      {products.map((product) => (
        <Col sm={12} md={6} lg={4} key={product.id}>
          <Card style={{ width: '18rem', margin: '5px' }}>
            <Link to={`/products/${product.id}`}>
              <Card.Img style={{width: '18rem', height: '15rem'}} variant="top" src={product.image} />
            </Link>
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              <Card.Text>${parseInt(product.price)}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  )
}

export default Products