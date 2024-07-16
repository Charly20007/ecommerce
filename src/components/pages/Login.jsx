import axios from "axios"
import { API_URL } from "../../constans/env"
import { setToken } from "../../helpers/auth"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import LoginTemplate from "../templates/LoginTemplate.jsx"

const Login = () => {
    const nav = useNavigate()

    const [error, setError] = useState()
  
  const handleSubmit = (e) => {
    e.preventDefault()

    const data = {
        email: e.target.email.value,
        password: e.target.password.value
      }
    
      axios.post(`${API_URL}/public/login`, data)
        .then(resp => {
            setToken(resp.data.data.token)
            nav("/")
        }) //se guarda(en el local storage) el token obtenido al inciar session
        
        .catch(error => {
            setError(error)
        })
  }

  return (
    <LoginTemplate>
        <form onSubmit={handleSubmit}>
            <div className="mb-4">
                <input
                    type="email"
                    placeholder="Correo electrónico"
                    name="email"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                    required
                />
            </div>
            <div className="mb-4">
                <input
                    type="password"
                    placeholder="Contraseña"
                    name="password"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                    required
                />
            </div>
            <div className="text-center pt-1 mb-12 pb-1">
                <button className="bg-gradient w-full py-2 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300" type="submit">
                    Ingresar
                </button>
                <Link className="text-gray-500 mt-4 inline-block" to="/registro">
                    ¿Deseas registrarte?
                </Link>
            </div>
            {error && (
                <p className="text-center p-2 bg-red-100 text-red-800 rounded-md">
                    {error?.response?.data?.data}
                </p>
            )}
        </form>
    </LoginTemplate>
);
}

export default Login