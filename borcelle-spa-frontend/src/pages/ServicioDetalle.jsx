import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

const servicios = [
  {
    nombre: "Masajes relajantes",
    descripcion: "Reduce el estrés y mejora la circulación con nuestros masajes relajantes.",
    precio: "Q200",
    detalles: "Este masaje tiene una duración de 60 minutos. Se enfoca en las áreas del cuello, espalda y hombros.",
    id: 1
  },
  {
    nombre: "Tratamientos faciales",
    descripcion: "Limpieza profunda, hidratación y rejuvenecimiento de tu piel.",
    precio: "Q180",
    detalles: "Incluye una limpieza profunda con exfoliación, mascarilla hidratante y tonificación de la piel.",
    id: 2
  },
  {
    nombre: "Exfoliaciones corporales",
    descripcion: "Renueva tu piel con una exfoliación suave y revitalizante.",
    precio: "Q150",
    detalles: "Exfoliamos tu cuerpo utilizando productos naturales que revitalizan y suavizan la piel.",
    id: 3
  },
  {
    nombre: "Baños terapéuticos",
    descripcion: "Sumérgete en una experiencia de relajación con sales y aceites esenciales.",
    precio: "Q220",
    detalles: "Nuestro baño terapéutico incluye aceites esenciales y sales minerales para desintoxicar y relajar.",
    id: 4
  },
  {
    nombre: "Saunas",
    descripcion: "Elimina toxinas y relájate con nuestro sauna seco o húmedo.",
    precio: "Q100",
    detalles: "El sauna tiene una duración de 30 minutos, ideal para aliviar tensiones y mejorar la circulación.",
    id: 5
  },
  {
    nombre: "Circuitos de aguas",
    descripcion: "Disfruta de un recorrido de hidroterapia para cuerpo y mente.",
    precio: "Q250",
    detalles: "Recorrido por diferentes estaciones de agua caliente y fría para mejorar la circulación y revitalizar el cuerpo.",
    id: 6
  }
]

export default function ServicioDetalle() {
    const { id } = useParams()
    const servicio = servicios.find(s => s.id === parseInt(id))
  
    if (!servicio) {
      return <div>Servicio no encontrado</div>
    }
  
    // Estado para la fecha de la cita
    const [fechaCita, setFechaCita] = useState(null)
    const [mostrarCalendario, setMostrarCalendario] = useState(false)
  
    // Maneja el cambio de fecha
    const handleChangeFecha = (date) => {
      setFechaCita(date)
    }
  
    const handleReserva = () => {
      if (fechaCita) {
        alert(`Reserva realizada para ${servicio.nombre} en la fecha: ${fechaCita.toLocaleString()}`)
      } else {
        alert("Por favor, selecciona una fecha.")
      }
    }
  
    // Mostrar calendario al hacer clic en "Reservar"
    const toggleCalendario = () => {
      setMostrarCalendario(!mostrarCalendario)
    }
  
    return (
      <div className="p-8">
        <h2 className="text-3xl font-bold mb-6 text-center">{servicio.nombre}</h2>
        
        {/* Mostrar la imagen */}
        <div className="mb-6 text-center">
          <img src={servicio.imagen} alt={servicio.nombre} className="rounded-xl shadow-md w-80 h-52 object-cover mx-auto" />
        </div>
        
        <p className="text-lg mb-4">{servicio.descripcion}</p>
        <p className="text-xl font-bold mb-6">{servicio.precio}</p>
        <p className="text-gray-700 mb-6">{servicio.detalles}</p>
        
        {/* Mostrar el botón de reservar */}
        <div className="text-center">
          <button onClick={toggleCalendario} className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-700">
            {mostrarCalendario ? "Cancelar" : "Reservar"}
          </button>
        </div>
  
        {/* Calendario solo si el usuario hace clic en "Reservar" */}
        {mostrarCalendario && (
          <div className="mt-6">
            <h3 className="text-2xl font-semibold mb-4">Selecciona la fecha y hora de tu cita</h3>
            <DatePicker
              selected={fechaCita}
              onChange={handleChangeFecha}
              showTimeSelect
              dateFormat="Pp"
              className="border p-2 rounded-lg"
              placeholderText="Selecciona una fecha"
            />
          </div>
        )}
  
        {/* Mostrar la fecha seleccionada */}
        {fechaCita && (
          <div className="mt-4 text-center">
            <p>Fecha seleccionada: {fechaCita.toLocaleString()}</p>
            <button onClick={handleReserva} className="bg-green-500 text-white p-2 rounded-lg hover:bg-green-700 mt-4">
              Confirmar Reserva
            </button>
          </div>
        )}
      </div>
    )
  }