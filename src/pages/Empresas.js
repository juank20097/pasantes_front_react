import React, {useState, useEffect} from "react";
import Tabla from "../components/Tabla";
import {fetchDataFromApi} from '../helpers/api'

function Empresas() {


    const [data, setData] = useState(null);

    useEffect(() => {
        fetchDataFromApi().then(datos => {
            setData(datos);
        }).catch(error => {
            console.log(error);
        });
    }, []);

    const [datosEmpresa] = useState([
        {
            nombre: "Empresa 1",
            telefono: '99999999',
            direccion: "Quito"
        }, {
            nombre: "Empresa 2"
        }, {
            nombre: "Empresa 3"
        }
    ])
    return (
        <div> 
          {data ? (
                <div>
                    <Tabla nombre={"Empresas"}
                        datos={datosEmpresa}
                        ruta={"/nueva-empresa"}/>
                </div>
            ) : (
                <div>
                  <p>Cargando...</p>
                </div>

          )} 
        </div>
    );
}

export default Empresas;
