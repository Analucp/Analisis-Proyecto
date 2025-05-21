import React, { useState } from 'react'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { app } from '../firebaseConfig'
import { useNavigate } from 'react-router-dom'

export default function Autenticacion() {
  const auth = getAuth(app)
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [esRegistro, setEsRegistro] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    if (esRegistro) {
      // Registro de usuario
      try {
        await createUserWithEmailAndPassword(auth, email, password)
        navigate('/inicio')
      } catch (err) {
        setError(err.message)
      }
    } else {
      // Inicio de sesión
      try {
        await signInWithEmailAndPassword(auth, email, password)
        navigate('/inicio')
      } catch (err) {
        setError('Correo o contraseña incorrectos')
      }
    }
  }

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-8 rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center">
        {esRegistro ? 'Crear cuenta' : 'Iniciar sesión'}
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 border rounded-md"
          required
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-2 border rounded-md"
          required
        />
        {error && <p className="text-red-600 text-sm">{error}</p>}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
        >
          {esRegistro ? 'Registrarse' : 'Iniciar sesión'}
        </button>
      </form>
      <p className="mt-4 text-center text-sm">
        {esRegistro ? '¿Ya tienes una cuenta?' : '¿No tienes cuenta?'}{' '}
        <button
          onClick={() => setEsRegistro(!esRegistro)}
          className="text-blue-600 hover:underline"
        >
          {esRegistro ? 'Inicia sesión' : 'Regístrate'}
        </button>
      </p>
    </div>
  )
}
