import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard: React.FC = () => {
  return (
    <div className="dashboard-container">
      <h1>Dashboard</h1>
      <nav>
        <ul>
          <li>
            <Link to="doctors">Lista de Doctores</Link>
          </li>
          <li>
            <Link to="appointments">Lista de Citas</Link>
          </li>
        </ul>
      </nav>
      {/* Outlet para renderizar las rutas hijas */}
      <div className="dashboard-content">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
