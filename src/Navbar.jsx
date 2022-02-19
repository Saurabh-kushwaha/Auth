import React from 'react'
import { useContext } from 'react'
import { AuthContext } from './AuthContext/AuthContextProvider'

function Navbar() {
   
  const { isAuthorized, onLogin, onLogout} = useContext(AuthContext);

  return (
    <div>
      {`Navbar  ${isAuthorized}`}
      
        <button onClick={()=>{if(isAuthorized) onLogout()
          else onLogin()}}>
        {isAuthorized?"LogOut":"Login"} 
        </button>
    </div>
  )
}

export default Navbar