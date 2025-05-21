import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, Tooltip,
  CartesianGrid, ResponsiveContainer
} from 'recharts';

export default function EstadisticasAdmin() {
  const datosReservas = [
    { servicio: 'Masajes', reservas: 32 },
    { servicio: 'Faciales', reservas: 18 },
    { servicio: 'Exfoliaciones', reservas: 25 },
    { servicio: 'Sauna', reservas: 12 },
    { servicio: 'Baños Terapéuticos', reservas: 20 }
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Estadísticas y Reportes</h2>
      <p className="mb-6">Visualiza la cantidad de reservas por tipo de servicio.</p>

      <div style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer>
          <BarChart data={datosReservas}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="servicio" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="reservas" fill="#bfa26a" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

