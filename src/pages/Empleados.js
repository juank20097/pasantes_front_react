import React, {useState} from "react";
import Tabla from "../components/Tabla";

function Empleados() {

    const [datosEmpleados] = useState([
        {
            nombre: "Empleado 1"
        }, {
            nombre: "Empleado 2"
        }, {
            nombre: "Empleado 3"
        }
    ])

    return (
        <div>
            <Tabla nombre={"Empleados"}
                datos={datosEmpleados}
                ruta={"/empleados"}/>

        </div>
    )
}

export default Empleados;
