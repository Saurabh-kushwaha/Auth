import React from 'react'
import { useState } from 'react';
import { createContext } from 'react'

export const AuthContext = createContext();


const AuthContextProvider = ({ children }) => {
    const [isAuthorized, setisAuthorized] = useState(false);
    const onLogin = () => {
        fetch('https://reqres.in/api/login', {
            method: "POST",
            body: JSON.stringify(
                {
                   "email": "eve.holt@reqres.in",
                   "password": "cityslicka"
                }
            ),
            headers: {
                'content-type': 'application/json'
            },
        }).then(res => res.json())
            .then(data => {
                if (data.token) {
                    console.log(data.token);
                    setisAuthorized(true);
               }
            })
    }
    const onLogout = () => {
        setisAuthorized(false);
    }
    return (
    <AuthContext.Provider value = {{isAuthorized, onLogin, onLogout}}>
          {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider