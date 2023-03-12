import React from "react";

const CartContext = React.createContext({
    items: [],
    addToCart: (item) => {},
    removeFromCart: (id) => {},
})

export default CartContext