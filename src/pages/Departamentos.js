import React, {useState} from "react";
import Tabla from "../components/Tabla";

export default function Departamentos(){

    const [datosDepartamentos] = useState([
        {nombre: "Departamento 1"},
        {nombre: "Departamento 2"},
        {nombre: "Departamento 3"}
    ])
    
    return(
        <Tabla nombre={"Departamentos"} datos={datosDepartamentos} ruta={"/nuevo-departamento"}/>
    )
}