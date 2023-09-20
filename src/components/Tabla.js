import React, { useState } from "react";
import "../css/Empr.css";
import {
  Container,
  Table,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,Badge
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faPlus } from "@fortawesome/free-solid-svg-icons";
import Paginacion from "../components/Paginacion";
import TablaDatos from "./TablaDatos";

export default function Tabla({ nombre, datos, ruta }) {
  const [expandedRow, setExpandedRow] = useState(null);
  const [isChecked, setIsChecked] = useState(datos.map(() => true)); // Estado inicial como activo
  const [modalOpen, setModalOpen] = useState(false);
  const [rowIndexToDisable, setRowIndexToDisable] = useState(null);
  const textoTabla = nombre.toUpperCase();

  const onRowExpand = (rowIndex) => {
    if (expandedRow === rowIndex) {
      // Si la fila ya está expandida, ciérrala
      setExpandedRow(null);
    } else {
      // Si no, expande la fila clickeada
      setExpandedRow(rowIndex);
    }
  };

  const openModal = (rowIndex) => {
    setRowIndexToDisable(rowIndex); // Establecer la fila que se intenta desactivar
    setModalOpen(true);
  };

  const closeModal = () => {
    setRowIndexToDisable(null); // Restablecer el valor rowIndexToDisable
    setModalOpen(false);
  };

  const toggleSwitch = (rowIndex) => {
    // Cambia el estado del switch y abre el modal si se está desactivando
    if (isChecked[rowIndex]) {
      openModal(rowIndex);
    } else {
      // Si isChecked[rowIndex] es false, simplemente cambia el estado del interruptor
      setIsChecked((prev) => {
        const updatedIsChecked = [...prev];
        updatedIsChecked[rowIndex] = !prev[rowIndex];
        return updatedIsChecked;
      });
    }
  };

  const disableRow = () => {
    // Realiza la acción de desactivación aquí
    setIsChecked((prev) => {
      const updatedIsChecked = [...prev];
      updatedIsChecked[rowIndexToDisable] = false;
      return updatedIsChecked;
    });
    closeModal();
  };

  return (
    <div className="cont-empresas">
      <Container className="contenedor-empresas" fluid>
        <h1 id="titulo-empresa">Lista de {nombre}</h1>
          <Button href={ruta} id="añadir" style={{ display: "flex" }}>
            <FontAwesomeIcon icon={faPlus} />
            <span>Añadir</span>
          </Button>
        <Table className="tabla-empresas" responsive>
          <thead>
            <tr>
              <th></th>
              <th>{textoTabla}</th>
              <th>ESTADO</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {datos.map((dato, rowIndex) => (
              <React.Fragment key={rowIndex}>
                <tr>
                  <td
                    className="expandir"
                    onClick={() => onRowExpand(rowIndex)}
                  >
                    {expandedRow === rowIndex ? (
                      <FontAwesomeIcon icon={faCaretDown} />
                    ) : (
                      <FontAwesomeIcon icon={faCaretDown} rotation={270} />
                    )}
                  </td>
                  <td>{dato.nombre}</td>
                  <td><Badge color="success" pill="true">Activo</Badge></td>
                  <td>
                    <div className="form-check form-switch">
                      <input
                        onClick={() => toggleSwitch(rowIndex)}
                        className="form-check-input"
                        type="checkbox"
                        id={`flexSwitchCheckChecked${rowIndex}`}
                        style={{
                          backgroundColor: isChecked[rowIndex]
                            ? "rgb(49, 175, 50)"
                            : "rgb(220, 53, 69)",
                          border: isChecked[rowIndex]
                            ? "1px solid rgb(49, 175, 50)"
                            : "1px solid rgb(220, 53, 69)",
                          boxShadow: "none",
                          cursor: "pointer",
                          outline: "none",
                        }}
                        checked={isChecked[rowIndex]}
                      />
                    </div>
                  </td>
                  <td>
                    <Button id="editar" style={{ display: "flex" }}>
                      Editar
                    </Button>
                  </td>
                </tr>
                {expandedRow === rowIndex && (
                  <tr className="expanded-row">
                   <td colSpan="5"><TablaDatos datos={datos}/></td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </Table>
        <div className="paginacion">
          <Paginacion />
        </div>
        {/* Modal */}
        <Modal isOpen={modalOpen} toggle={closeModal}>
          <ModalHeader className="modal-header" toggle={closeModal}>
            Aviso
          </ModalHeader>
          <ModalBody className="modal-body">
            ¿Está seguro de cambiar el estado?
          </ModalBody>
          <ModalFooter className="modal-footer">
            <Button color="secondary" onClick={disableRow}>
              Aceptar
            </Button>
            <Button color="danger" onClick={closeModal}>
              Cancelar
            </Button>
          </ModalFooter>
        </Modal>
      </Container>
    </div>
  );
}
