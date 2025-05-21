import React from 'react'
import Autenticacion from '../components/Autenticacion'

export default function Home() {
  return (
    <div className="text-center mt-8">
      <Autenticacion />
      <h1 className="text-4xl font-bold mb-4">Bienvenidos a Borcelle – Centro de Spa</h1>
      <p className="text-lg">Tu espacio de relajación, salud y belleza</p>
    </div>
  )
}
