import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import LoginPage from './pages/LoginPage';
import DoctorList from './components/DoctorList';
import AppointmentList from './components/AppointmentList';
import ProtectedRoute from './routes/ProtectedRoute';

const App: React.FC = () => {
  // Estado para simular autenticación
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  return (
    <Router>
      <Routes>
        {/* Ruta inicial (redirige a Login si no está autenticado) */}
        <Route path="/" element={<Navigate to="/login" />} />

        {/* LoginPage */}
        <Route path="/login" element={<LoginPage setIsAuthenticated={setIsAuthenticated} />} />

        {/* Dashboard con rutas protegidas */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Dashboard />
            </ProtectedRoute>
          }
        >
          {/* Rutas secundarias dentro del Dashboard */}
          <Route path="doctors" element={<DoctorList />} />
          <Route path="appointments" element={<AppointmentList />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
