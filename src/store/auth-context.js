import React from "react";

const AuthContext = React.createContext({
    token: '',
    email: '',
    isLoggedIn: false,
    login: (toke, email) => {},
    logout: () => {}
})
export default AuthContext