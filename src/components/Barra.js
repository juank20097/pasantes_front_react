import {React, useState} from "react";
import {
    Button,
    Navbar,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter
} from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Barra.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {useKeycloak} from "@react-keycloak/web";
import {faSignInAlt, faBars} from '@fortawesome/free-solid-svg-icons';
import {NavLink} from "reactstrap";
import Sidebar from "./BarraVertical";

export default function Principal() {

    const {keycloak} = useKeycloak();

    const handleLogin = () => {
        if (!keycloak.authenticated) {
            keycloak.login();
        }
    };

    const [sidebarVisible, setSidebarVisible] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarVisible(!sidebarVisible);
    };

    const openModal = () => {
        setModalOpen(true);
    }

    const closeModal = () => {
        setModalOpen(false);
    }

    return (
        <div>
            <Navbar className="barra" color="light" light expand="md">
                <FontAwesomeIcon icon={faBars}
                    className="esconder mr-2"
                    onClick={toggleSidebar}/>
                    <NavLink href="/home">
                    <img id="logo" alt="No se puede cargar la imagen" src="logoIess.png"></img>
                    </NavLink>
                {
                !keycloak.authenticated && (
                    <Button className="sesion"
                        outline={true}
                        onClick={handleLogin}>
                        <FontAwesomeIcon icon={faSignInAlt}
                            className="mr-2"/>
                        <span className="font-weight-bold"
                            style={
                                {fontSize: '1.2em'}
                        }>
                            Ingresar
                        </span>
                    </Button>
                )
            }

                {
                !!keycloak.authenticated && (
                    <Button className="sesion"
                        outline={true}
                        onClick={openModal}>
                        <FontAwesomeIcon icon={faSignInAlt}
                            className="mr-2"/>
                        <span className="font-weight-bold"
                            style={
                                {fontSize: '1.2em'}
                        }>
                            Salir ({
                            keycloak.tokenParsed.preferred_username
                        })
                        </span>
                    </Button>
                )
            }
                <Modal isOpen={modalOpen}
                    toggle={closeModal}>
                    <ModalHeader toggle={closeModal}>Cerrar Sesión</ModalHeader>
                    <ModalBody>¿Estás seguro de que deseas cerrar sesión?</ModalBody>
                    <ModalFooter>
                        <Button color="secondary"
                            onClick={closeModal}>Cancelar</Button>
                        <Button color="danger"
                            onClick={
                                () => {
                                    keycloak.logout();
                                    closeModal();
                                }
                        }>Cerrar Sesión</Button>
                    </ModalFooter>
                </Modal>
            </Navbar>
            <Sidebar isVisible={sidebarVisible}/>
        </div>
    )
}
