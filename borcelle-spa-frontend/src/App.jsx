import React, { useEffect, useState } from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';

import Admin from './pages/Admin';
import Home from './pages/Home';
import Servicios from './pages/Servicios';
import ServicioDetalle from './pages/ServicioDetalle';
import Inicio from './pages/Inicio';
import Perfil from './pages/Perfil';
import Autenticacion from './components/Autenticacion';
import GestionAdmin from './pages/GestionAdmin';
import EstadisticasAdmin from './pages/EstadisticasAdmin';
import PersonalAdmin from './pages/PersonalAdmin';
import HorariosAdmin from './pages/HorariosAdmin';
import ServiciosAdmin from './pages/ServiciosAdmin';


import './index.css';

const administradores = [
  "admin@borcelle.com",
  "gerente@borcelle.com"
];

function App() {
  const [usuario, setUsuario] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUsuario(user);
  
        const currentPath = window.location.pathname;
        const esAdmin = administradores.includes(user.email);
        const rutasAdmin = [
          '/admin', '/admin/gestion', '/admin/estadisticas',
          '/admin/gestion-servicios', '/admin/personal', '/admin/horarios'
        ];
  
        if (esAdmin && !rutasAdmin.includes(currentPath)) {
          navigate('/admin');
        }
      }
    });
  
    return () => unsubscribe();
  }, [navigate]);
  

  const handleLogout = () => {
    const auth = getAuth();
    signOut(auth).then(() => {
      setUsuario(null);
      navigate('/auth'); 
    });
  };

  return (
    <div className="min-h-screen bg-white text-gold">
      <header className="p-4 shadow-md flex items-center justify-between">
        <img src="/logo.png" alt="Borcelle Logo" className="h-20" />
        {usuario && (
          <nav className="space-x-4">
            <Link to="/perfil">Perfil</Link>
            <button onClick={handleLogout} className="text-red-600 font-semibold">Cerrar sesión</button>
          </nav>
        )}
      </header>

      <main className="p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/auth" element={<Autenticacion />} />
          <Route path="/servicios/:id" element={<ServicioDetalle />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/gestion" element={<GestionAdmin />} />
          <Route path="/admin/estadisticas" element={<EstadisticasAdmin />} />
          <Route path="/admin/personal" element={<PersonalAdmin />} />
          <Route path="/admin/horarios" element={<HorariosAdmin />} />
          <Route path="/admin/gestion-servicios" element={<ServiciosAdmin />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
