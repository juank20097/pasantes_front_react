import React, { useState } from 'react';
import { Container, Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import '../css/AgregarEmpresa.css'

export default function AgregarEmpresa() {
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    }

    const closeModal = () => {
        setModalOpen(false);
    }
    return(
        <div className='nuevaEmpresa'>
        <Container className='nueva-empresa' fluid>
            <h1 id='tituloEmpresa'>Nueva Empresa</h1>
            <Form>
                <FormGroup  className='form-group'>
                    <Label for="nombre">Nombre</Label>
                    <Input className='inputs' type='text' name='nombre' id='nombre' placeholder='Ingrese el nombre' required/>
                </FormGroup>
                <FormGroup className='form-group'>
                    <Label for='direccion'>Dirección</Label>
                    <Input  className='inputs' type='text' name='direccion' id='direccion' placeholder='Ingrese la dirección' required/>
                </FormGroup>
                <FormGroup className='form-group'>
                    <Label for='telefono'>Teléfono</Label>
                    <Input className='inputs' type='text' name='telefono' id='telefono' placeholder='Ingrese el número de teléfono' required/>
                </FormGroup>
                <Button className='guardar-empresa' onClick={openModal}>Guardar</Button>
            </Form>

            <Modal isOpen={modalOpen}
                    toggle={closeModal}>
                    <ModalHeader className='modal-header' toggle={closeModal}>Aviso</ModalHeader>
                    <ModalBody className='modal-body'>Por favor, asegúrate de que toda la información sea correcta antes de guardar</ModalBody>
                    <ModalFooter className='modal-footer'>
                        <Button color="secondary"
                            onClick={closeModal}>Enviar</Button>
                        <Button color="danger"
                            onClick={
                             closeModal}>Cancelar</Button>
                    </ModalFooter>
                </Modal>
        </Container>
        </div>
    )
}