// src/pages/HorariosAdmin.jsx

import React from 'react';

export default function HorariosAdmin() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Administrar Horarios</h2>
      <form>
        <label>Servicio:</label>
        <select className="block mb-4">
          <option>Servicio 1</option>
          <option>Servicio 2</option>
        </select>

        <label>Fecha y Hora:</label>
        <input type="datetime-local" className="block mb-4" />

        <button type="submit" className="bg-gold text-white p-3 rounded-lg">Agregar Horario</button>
      </form>
    </div>
  );
}
