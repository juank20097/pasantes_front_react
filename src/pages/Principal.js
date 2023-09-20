import Barra from '../components/Barra';
import {ReactKeycloakProvider} from '@react-keycloak/web';
import keycloak from '../components/Keycloak';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import Footer from '../components/Footer';
import Segunda from '../pages/Segunda'
import PrivateRoute from '../helpers/PrivateRoute';
import Dashboard from '../pages/Dashboard'
import Empresas from '../pages/Empresas';
import AgregarEmpresa from '../pages/AgregarEmpresa';
import Departamentos from './Departamentos';
import Empleados from './Empleados';
import AgregarDepartamento from './AgregarDepartamento';


export default function Principal() {
    return (
        <div>
            <ReactKeycloakProvider authClient={keycloak}>
                <Barra/>
                <BrowserRouter>
                    <Routes>
                        <Route path="/"
                            element={
                                <Navigate
                            to="/home"/>
                            }/>
                        <Route path="/home"
                            element={<Dashboard/>}/>
                        <Route path="/servicios"
                            element={
                                <PrivateRoute><Segunda/></PrivateRoute>
                            }/>
                        <Route path="/empresas"
                            element={
                                <PrivateRoute><Empresas/></PrivateRoute>
                            }/>
                        <Route path="/nueva-empresa"
                            element={
                                <PrivateRoute><AgregarEmpresa/></PrivateRoute>
                            }/>
							<Route path="/departamentos"
                            element={
                                <PrivateRoute><Departamentos/></PrivateRoute>
                            }/>
							<Route path="/empleados"
                            element={
                                <PrivateRoute><Empleados/></PrivateRoute>
                            }/>
                            <Route path="/nuevo-departamento"
                            element={
                                <PrivateRoute><AgregarDepartamento/></PrivateRoute>
                            }/>
                    </Routes>
                </BrowserRouter>
                <Footer/>
            </ReactKeycloakProvider>
        </div>
    )
}
