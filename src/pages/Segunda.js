import '../css/Segunda.css'
import { NavLink } from 'reactstrap'
export default function Segunda() {
    return (
        <div className='contenedorS'>
            <NavLink href="/empresas">
            <div className='opcion'>
                <div id='empresas' className='imagen'>
                    <img className='icon' src='https://cdn-icons-png.flaticon.com/512/4091/4091450.png' alt='No se puede cargar la imagen'></img>
                </div>
                <label className='descripcion'>Empresas</label>
            </div>
            </NavLink>
            <NavLink href="/departamentos">
            <div className='opcion'>
                <div id='departamentos' className='imagen'>
                    <img className='icon' src='https://cdn-icons-png.flaticon.com/512/993/993891.png' alt='No se puede cargar la imagen'></img>
                </div>
                <label className='descripcion'>Departamentos</label>
            </div>
            </NavLink>
            <NavLink href="/empleados">
            <div className='opcion'>
                <div id='empleados' className='imagen'>
                    <img className='icon' src='https://img.freepik.com/iconos-gratis/empleado_318-693797.jpg?w=2000' alt='No se puede cargar la imagen'></img>
                </div>
                <label className='descripcion'>Empleados</label>
            </div>
            </NavLink>
        </div>
    )
}
