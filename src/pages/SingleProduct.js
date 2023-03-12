import React, {useState,useContext} from 'react'
import { useParams } from 'react-router-dom';
import {Container, Row, Col, Image, Button, Form} from 'react-bootstrap'
import CartContext from '../store/cart-context';
import { products } from '../store/CartProvider';

const SingleProduct = () => {
    const [cartQty, setCartQty] = useState(1)
    const cartCtx = useContext(CartContext);
    const {id} = useParams()
    const product = products.find((x) => parseInt(x.id) === parseInt(id))

    const cartQtyHandler = (e) => {
        const qty = e.target.value;
        setCartQty(qty)
    }

    const addToCartHandler = async(e) => {
        e.preventDefault()
        cartCtx.addToCart({
            id: product.id,
            image: product.image,
            title: product.title,
            price: parseInt(product.price),
            qty: cartQty
        })
    }
    return (
    <Container className='mt-4'>
        {!product && <p className='text-center'>Loading...</p>}
        {product && 
            <Row>
                <Col>
                    <Image style={{width: "15rem", height: "15rem"}} src={product.image} alt="" />
                </Col>
                <Col>
                    <h3>{product.title}</h3>
                    <p>${parseInt(product.price)}</p>
                    <Form onSubmit={addToCartHandler}>
                        <input 
                            style={{width: "10rem"}}
                            min="1" 
                            max="10" 
                            type="number" 
                            value={cartQty} 
                            onChange={cartQtyHandler} 
                        /> <br />
                        <Button type='submit'
                            variant='secondary mt-2'>
                                Add to Cart
                        </Button>
                    </Form>
                    <p>{product.description}</p>
                </Col>
            </Row>
        }
    </Container>
  )
}

export default SingleProduct