import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function GestionAdmin() {
  const navigate = useNavigate();

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Gestión Administrativa</h2>
      <ul className="space-y-4">
        <li>
          <button
            onClick={() => navigate('/admin/gestion-servicios')}
            className="bg-gold text-white p-4 rounded shadow w-full text-left"
          >
            Administrar Servicios
          </button>
        </li>
        <li>
          <button
            onClick={() => navigate('/admin/horarios')}
            className="bg-gold text-white p-4 rounded shadow w-full text-left"
          >
            Administrar Horarios
          </button>
        </li>
        <li>
          <button
            onClick={() => navigate('/admin/personal')}
            className="bg-gold text-white p-4 rounded shadow w-full text-left"
          >
            Administrar Personal
          </button>
        </li>
      </ul>
    </div>
  );
}

