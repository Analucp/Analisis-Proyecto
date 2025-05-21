import React, { useEffect, useState } from 'react'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { pedirPermisoNotificaciones, mostrarNotificacion } from '../utils/Notificaciones'

export default function Inicio() {
  const [usuario, setUsuario] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    const auth = getAuth()
    pedirPermisoNotificaciones()

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUsuario(user)

        // Solo mostrar la notificación si no se ha mostrado antes
        const yaMostrada = localStorage.getItem("notificacionMostrada")
        if (!yaMostrada) {
          mostrarNotificacion("¡Bienvenido!", `Hola ${user.email}, disfruta tu experiencia en Borcelle.`)
          localStorage.setItem("notificacionMostrada", "true")
        }
      }
    })

    return () => unsubscribe()
  }, [])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Bienvenido a tu espacio de relajación</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <img src="/spa1.jpg" alt="Spa 1" className="rounded-xl shadow-md w-80 h-52 object-cover" />
        <img src="/spa2.jpg" alt="Spa 2" className="rounded-xl shadow-md w-80 h-52 object-cover" />
        <img src="/spa3.jpg" alt="Spa 3" className="rounded-xl shadow-md w-80 h-52 object-cover" />
      </div>

      <button
        onClick={() => navigate('/servicios')}
        className="bg-gold hover:bg-yellow-500 text-white font-semibold py-2 px-6 rounded-full shadow-md transition mb-10"
      >
        Servicios disponibles
      </button>

      {/* Footer */}
      <footer className="w-full bg-white shadow-inner text-center py-10 mt-10 border-t border-gray-300">
        <img src="/logo.png" alt="Logo Borcelle" className="h-24 mx-auto mb-4" />
        <p className="text-lg font-semibold mb-2">Horario de Atención</p>
        <p>Lunes a Sábado: 9:00 AM - 7:00 PM</p>
        <p className="mt-4 text-lg font-semibold">Dirección</p>
        <p>Universidad Rafael Landívar, Ciudad de Guatemala</p>
        <p className="mt-4 text-lg font-semibold">Políticas de Cancelación</p>
        <p>Las cancelaciones deben hacerse con al menos 24 horas de anticipación.</p>
        <p className="mt-4 text-lg font-semibold">Contacto</p>
        <p>Email: borcelle.spa@gmail.com</p>
        <p>Teléfono: +502 5555 1234</p>
      </footer>
    </div>
  )
}

