import React from 'react';
import { Link } from 'react-router-dom';

export default function Admin() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Panel de Administración</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <Link to="/admin/gestion" className="block bg-gold text-white p-6 rounded shadow text-center hover:bg-yellow-600 transition">
          Gestión Administrativa
        </Link>

        <Link to="/admin/estadisticas" className="block bg-gold text-white p-6 rounded shadow text-center hover:bg-yellow-600 transition">
          Estadísticas y Reportes
        </Link>
      </div>
    </div>
  );
}
