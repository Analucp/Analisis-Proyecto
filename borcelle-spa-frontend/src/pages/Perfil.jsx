import React, { useEffect, useState } from 'react'
import { getAuth } from 'firebase/auth'

export default function Perfil() {
  const auth = getAuth()
  const user = auth.currentUser

  const [form, setForm] = useState({
    nombre: '',
    apellido: '',
    edad: '',
    telefono: ''
  })

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('perfil') || '{}')
    setForm(data)
  }, [])

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSave = () => {
    localStorage.setItem('perfil', JSON.stringify(form))
    alert('Perfil actualizado ✅')
  }

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg p-6 rounded-xl">
      <h2 className="text-2xl font-bold mb-4">Perfil de Usuario</h2>
      <p className="text-sm mb-4 text-gray-600">Correo: <strong>{user?.email}</strong></p>

      <div className="space-y-4">
        <input name="nombre" value={form.nombre} onChange={handleChange} placeholder="Nombre" className="w-full p-2 border rounded" />
        <input name="apellido" value={form.apellido} onChange={handleChange} placeholder="Apellido" className="w-full p-2 border rounded" />
        <input name="edad" value={form.edad} onChange={handleChange} placeholder="Edad" className="w-full p-2 border rounded" />
        <input name="telefono" value={form.telefono} onChange={handleChange} placeholder="Teléfono" className="w-full p-2 border rounded" />
        <button onClick={handleSave} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Guardar</button>
      </div>
    </div>
  )
}
