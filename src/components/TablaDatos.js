import React from "react";
import { Table } from "reactstrap";
import '../css/TablaDatos.css'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function TablaDatos({datos}) {
    if(datos.length === 0){
        return <p>No hay datos para mostrar</p>;
    }

    const columns = Object.keys(datos[0]);

    return(
        <Table className="tablaDatos" responsive hover="true">
            <thead>
                <tr>
                    {columns.map((columna, index) => (
                        <th key={index}>{columna}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {datos.map((fila, rowIndex)=> (
                    <tr key={rowIndex}>{columns.map((columna, colIndex)=>(
                        <td key={colIndex}>{fila[columna]}</td>
                    ))}</tr>
                ))}
            </tbody>
        </Table>
        
    )
}