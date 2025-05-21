import React, { useState } from 'react';

export default function ServiciosAdmin() {
  const [servicios, setServicios] = useState([
    { id: 1, nombre: "Masajes Relajantes", precio: "Q200" },
    { id: 2, nombre: "Tratamientos Faciales", precio: "Q180" },
    { id: 3, nombre: "Exfoliaciones Corporales", precio: "Q220" }
  ]);

  const [nuevoServicio, setNuevoServicio] = useState({ nombre: '', precio: '' });

  const handleAgregar = (e) => {
    e.preventDefault();
    if (nuevoServicio.nombre && nuevoServicio.precio) {
      const nuevo = {
        id: Date.now(),
        ...nuevoServicio
      };
      setServicios([...servicios, nuevo]);
      setNuevoServicio({ nombre: '', precio: '' });
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Administrar Servicios</h2>

      <form onSubmit={handleAgregar} className="mb-6">
        <input
          type="text"
          placeholder="Nombre del servicio"
          value={nuevoServicio.nombre}
          onChange={(e) => setNuevoServicio({ ...nuevoServicio, nombre: e.target.value })}
          className="border p-2 mr-2 rounded"
          required
        />
        <input
          type="text"
          placeholder="Precio (Q)"
          value={nuevoServicio.precio}
          onChange={(e) => setNuevoServicio({ ...nuevoServicio, precio: e.target.value })}
          className="border p-2 mr-2 rounded"
          required
        />
        <button type="submit" className="bg-gold text-white p-2 rounded">
          Agregar Servicio
        </button>
      </form>

      <ul className="space-y-3">
        {servicios.map((servicio) => (
          <li key={servicio.id} className="bg-gold text-white p-4 rounded flex justify-between items-center">
            <div>
              <strong>{servicio.nombre}</strong> - {servicio.precio}
            </div>
            <div className="space-x-2">
              <button className="text-blue-200 hover:text-blue-400">Editar</button>
              <button className="text-red-200 hover:text-red-400">Eliminar</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

