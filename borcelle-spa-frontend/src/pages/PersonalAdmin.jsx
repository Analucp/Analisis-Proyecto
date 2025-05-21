// src/pages/PersonalAdmin.jsx

import React from 'react';

export default function PersonalAdmin() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Administrar Personal</h2>
      <button className="bg-gold text-white p-3 rounded-lg mb-4">Agregar Personal</button>
      <ul>
        <li className="mb-2">
          Juan Pérez - <button className="text-blue-500">Editar</button> | <button className="text-red-500">Eliminar</button>
        </li>
        <li className="mb-2">
          Ana García - <button className="text-blue-500">Editar</button> | <button className="text-red-500">Eliminar</button>
        </li>
      </ul>
    </div>
  );
}
