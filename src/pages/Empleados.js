import React, { useState } from "react";
import Tabla from "../components/Tabla";


export default function Empleados() {
    const [datosEmpleados] = useState([
        {nombre: "Empleado 1"},
        {nombre: "Empleado 2"},
        {nombre: "Empleado 3"}
    ])

    return(
        <Tabla nombre={"Empleados"} datos={datosEmpleados} ruta={"/empleados"}/>
    )
}