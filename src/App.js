import './App.css';
import Cart from './components/cart/Cart';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Contact from './pages/Contact';
import About from './pages/About';

import { useContext, useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import SingleProduct from './pages/SingleProduct';
import CartProvider from './store/CartProvider';
import Auth from './pages/Auth'
import AuthContext from './store/auth-context';

function App() {
  const [cartIsShow, setCartIsShow] = useState(false)
  const authCtx = useContext(AuthContext);
  const showCartHandler = () => {
    setCartIsShow(true)
  }
  const hideCartHandler = () => {
    setCartIsShow(false)
  }
  return (
    <CartProvider>
      {cartIsShow && <Cart onHideCart={hideCartHandler} show={cartIsShow} />}
      <Header onShowCart={showCartHandler} />
      <Switch>
          <Route path="/" exact>
              <Home/>
          </Route>
          <Route path="/shop">
              {authCtx.isLoggedIn && <Shop />}
              {!authCtx.isLoggedIn && <Redirect to="/auth" />}
          </Route>
          <Route path="/products/:id?">
              {authCtx.isLoggedIn && <SingleProduct />}
              {!authCtx.isLoggedIn && <Redirect to="/auth" />}
          </Route>
          <Route path="/about">
              <About />
          </Route>
          <Route path="/contact">
              <Contact />
          </Route>
          {!authCtx.isLoggedIn && 
            <Route path="/auth">
              <Auth />
          </Route>
          }
      </Switch>
      <Footer />
    </CartProvider>
  );
}

export default App;
