import React, { useState } from "react";
import Tabla from "../components/Tabla";

export default function Empresas() {
  const [datosEmpresa] = useState([
    {nombre: "Empresa 1", telefono: '99999999', direccion:"Quito"},
    {nombre: "Empresa 2"},
    {nombre: "Empresa 3"}
  ])
  return (
    <Tabla nombre={"Empresas"} datos={datosEmpresa} ruta={"/nueva-empresa"}/>
  );
}
