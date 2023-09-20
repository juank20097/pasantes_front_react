import React, {useState} from 'react';
import {
    Container,
    Row,
    Col,
    Button,
    Form,
    FormGroup,
    Label,
    Input,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter
} from 'reactstrap';
import '../css/AgregarDepartamento.css'
import Select from 'react-select';

export default function AgregarDepartamento() {
    const [modalOpen, setModalOpen] = useState(false);
    const [empresaSeleccionada, setEmpresaSeleccionada] = useState('');

    const openModal = () => {
        setModalOpen(true);
    }

    const closeModal = () => {
        setModalOpen(false);
    }
    const handleDepartamentoChange = (selectedOption) => {
        setEmpresaSeleccionada(selectedOption);
    };

    const opciones = [
        {value: "Empresa 1", label: "Empresa 1"},
        {value: "Empresa 2", label: "Empresa 2"},
        {value: "Empresa 3", label: "Empresa 3"},
        {value: "Empresa 4", label: "Empresa 4"},
        {value: "Empresa 5", label: "Empresa 5"}
    ]
    return (
        <div className='nuevoDepartamento'>
            <Container className='nuevo-departamento' fluid>
                <h1 id='tituloDepartamento'>Nuevo Departamento</h1>
                <Row>
                    <Col md="6">
                        <Form>
                            <FormGroup className="form-group-departamentos">
                                <Label for="nombre" >Nombre:</Label>
                                <Input className='inputs-departamentos' type="text" id="nombre" placeholder='Ingrese el nombre del departamento' required/>
                            </FormGroup>
                            <FormGroup id="telef" className="form-group-departamentos">
                                <Label for="telefono">Teléfono:</Label>
                                <Input className='inputs-departamentos' type="tel" id="telefono" placeholder='Ingrese número de teléfono' required/>
                            </FormGroup>
                        </Form>
                    </Col>
                    <Col md="6">
                        <Form>
                            <FormGroup className="form-group-departamentos">
                                <Label for="descripcion">Descripción:</Label>
                                <Input className='inputs-departamentos' type="textarea" id="descripcion" placeholder='Descripción del departamento' required/>
                            </FormGroup>
                            <FormGroup className="form-group-departamentos">
                                <Label for="seleccionar">Empresa: {empresaSeleccionada.label} </Label>

                                <Select className='select-departamentos'
                                value={empresaSeleccionada}
                                onChange={handleDepartamentoChange}
                                options={opciones}
                                isSearchable={true}
                                placeholder="Seleccione una empresa"
                                styles={{
                                    menu: (provided) => ({
                                        ...provided,
                                        zIndex: 9999,
                                    }), 
                                    menuPortal: (provided) => ({
                                        ...provided,
                                        zIndex: 9999,
                                    }),
                                    menuList: (provided) => ({
                                        ...provided,
                                        maxHeight: "150px",
                                        overflowY: 'auto'
                                    })
                                }}/>
                            </FormGroup>
                        </Form>
                    </Col>
                </Row>
                <Button className='guardar-departamento' color="primary"
                                onClick={openModal}>Guardar</Button>
                <Modal isOpen={modalOpen}
                    toggle={closeModal}>
                    <ModalHeader className='modal-header'
                        toggle={closeModal}>Aviso</ModalHeader>
                    <ModalBody className='modal-body'>Por favor, asegúrate de que toda la información sea correcta antes de guardar</ModalBody>
                    <ModalFooter className='modal-footer'>
                        <Button color="secondary"
                            onClick={closeModal}>Enviar</Button>
                        <Button color="danger"
                            onClick={closeModal}>Cancelar</Button>
                    </ModalFooter>
                </Modal>
            </Container>
        </div>
    )
}
