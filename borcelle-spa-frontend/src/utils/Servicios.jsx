import React from 'react'
import { useNavigate } from 'react-router-dom'

const servicios = [
  {
    nombre: "Masajes relajantes",
    descripcion: "Reduce el estrés y mejora la circulación con nuestros masajes relajantes.",
    precio: "Q200",
    id: 1
  },
  {
    nombre: "Tratamientos faciales",
    descripcion: "Limpieza profunda, hidratación y rejuvenecimiento de tu piel.",
    precio: "Q180",
    id: 2
  },
  {
    nombre: "Exfoliaciones corporales",
    descripcion: "Renueva tu piel con una exfoliación suave y revitalizante.",
    precio: "Q150",
    id: 3
  },
  {
    nombre: "Baños terapéuticos",
    descripcion: "Sumérgete en una experiencia de relajación con sales y aceites esenciales.",
    precio: "Q220",
    id: 4
  },
  {
    nombre: "Saunas",
    descripcion: "Elimina toxinas y relájate con nuestro sauna seco o húmedo.",
    precio: "Q100",
    id: 5
  },
  {
    nombre: "Circuitos de aguas",
    descripcion: "Disfruta de un recorrido de hidroterapia para cuerpo y mente.",
    precio: "Q250",
    id: 6
  }
]

export default function Servicios() {
  const navigate = useNavigate()

  const verDetalle = (id) => {
    navigate(`/servicios/${id}`)
  }

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-6 text-center">Nuestros Servicios</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {servicios.map((s) => (
          <div key={s.id} className="bg-white shadow-md rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-2">{s.nombre}</h3>
            <p className="text-gray-600 mb-2">{s.descripcion}</p>
            <p className="text-gold font-bold">{s.precio}</p>
            <div className="mt-4">
              <button
                onClick={() => verDetalle(s.id)}
                className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
              >
                Ver más
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

