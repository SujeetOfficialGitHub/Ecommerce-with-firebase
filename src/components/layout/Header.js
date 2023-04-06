 import React, { useContext } from 'react'
 import { Container, Navbar, Nav, Button } from 'react-bootstrap';
 import { NavLink, useHistory } from 'react-router-dom';
import AuthContext from '../../store/auth-context';
 import CartContext from '../../store/cart-context'

 const Header = (props) => {
    const cartCtx = useContext(CartContext)
    const authCtx = useContext(AuthContext)
    const history = useHistory()
    const logoutHandler = () => {
      authCtx.logout()
      history.push("/")

    }
   return (
    <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>Shop</Navbar.Brand>
          <Nav className="me-auto">
            <NavLink className="nav-link" to="/" exact>Home</NavLink>
            <NavLink className="nav-link" to="/shop">Shop</NavLink>
            <NavLink className="nav-link" to="/about">About</NavLink>
            <NavLink className="nav-link" to="/contact">Contact</NavLink>
          </Nav>
          <Nav>
            {!authCtx.isLoggedIn && <NavLink className="nav-link" to="/auth">Login</NavLink>}
            {/* <NavLink className="nav-link" to="/signup">Signup</NavLink> */}
            {authCtx.isLoggedIn && 
              <Button 
                className="btn-sm h-25 m-2" 
                variant='secondary'
                onClick={logoutHandler}
              >
                Logout
              </Button>}
            {authCtx.isLoggedIn && <Button 
              className="btn-sm h-25 m-2 d-flex" 
              variant='secondary' 
              onClick={() => props.onShowCart(true)}
            >
              Cart <span className='ml-1'>{cartCtx.items && cartCtx.items.length}</span>
            </Button>}
            
          </Nav>
        </Container>
    </Navbar>
   )
 }
 
 export default Header