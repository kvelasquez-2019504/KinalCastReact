import { useState } from "react"
import { Login } from "../../components/Login"
import { Register } from "../../components/Register"

import './authPage.css'

export const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  //permite cambiar de un form a otro
  const handleAuthPageToggle = () => {
    //esto cambia d falso a verdadero, cada vez que lo llamemos
    setIsLogin((prev) => !prev)
  }
  return (
    <div className="auth-container">
      {isLogin ? (
        <Login switchAuthHandler={handleAuthPageToggle} />
      ) : (
        <Register switchAuthHandler={handleAuthPageToggle} />
      )
      }
    </div>
  )
}

