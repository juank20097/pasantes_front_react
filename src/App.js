import React from 'react';
import { ReactKeycloakProvider } from '@react-keycloak/web';
import keycloak from './components/Keycloak'; // Importa la instancia de Keycloak
import Nav from './components/Nav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SecuredPage from './pages/SecuredPage';
import PrivateRoute from './helpers/PrivateRoute';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      
    </div>
  );
}

export default App;