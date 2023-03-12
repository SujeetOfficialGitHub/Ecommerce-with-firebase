import React, { useContext} from 'react'
import './Cart.css'
import { Button, Modal, Row, Col, Image } from 'react-bootstrap'
import CartContext from '../../store/cart-context'


const Cart = (props) => { 
    const cartCtx = useContext(CartContext);
    const checkoutHandler = () => {}
    

    const totalAmount = cartCtx.items.reduce((initialVal, currEle) => {
        return initialVal + (currEle.price * currEle.qty) 
    },0)
  return (
    <div className='cart'>
        <Modal show={props.show} onHide={props.onHideCart}>
        <Modal.Header closeButton>
            <Modal.Title>My Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {cartCtx.items && cartCtx.items.map((item) => (
                <Row key={item._id} className='d-flex align-items-center cart-items'>
                    <Col><Image style={{width: "3rem", height: "3rem"}} src={item.image} /></Col>
                    <Col sm={4}>{item.title}</Col>
                    <Col>${item.price}</Col>
                    <Col className='d-flex align-items-center'>
                        {item.qty}
                    </Col>
                    <Col>${item.price * item.qty}</Col>
                    <Col>
                        <Button onClick={() => cartCtx.removeFromCart(item.id)} variant="danger" className='btn-sm'>Remove</Button>
                    </Col>
                </Row>
            ))}
        </Modal.Body>
        <Modal.Footer className='d-flex'>
            <h3 className='m-2'>Cart Total</h3>
            <h3 className='m-2'>${totalAmount}</h3>
        </Modal.Footer>
        <Modal.Footer>
            <Button variant="primary" onClick={checkoutHandler}>
            Checkout
            </Button>
        </Modal.Footer>
        </Modal>
  </div>
  )
}

export default Cart