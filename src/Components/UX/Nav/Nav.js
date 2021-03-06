import { useSelector } from "react-redux"
import { NavLink, useLocation } from "react-router-dom";

import "./Nav.css";
const Nav = ()=>{
  const {_id, roles} = useSelector((state)=>state.security);
  const currentLocation = useLocation();
  if (_id) {
    return (
      <nav>
        <ul>
          <li>
            <NavLink
              to='/estudiante'
              className={currentLocation.pathname === '/estudiante' ? 'active' : ''}
            >
              Estudiante
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/grado'
              className={currentLocation.pathname === '/grado' ? 'active' : ''}
            >
              Grado
            </NavLink>
          </li>
          <li>
          <NavLink
              to='/maestro'
              className={currentLocation.pathname === '/maestro' ? 'active' : ''}
            >
              Maestro
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/seccion'
              className={currentLocation.pathname === '/seccion' ? 'active' : ''}
            >
              Seccion
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/jornada'
              className={currentLocation.pathname === '/jornada' ? 'active' : ''}
            >
              Jornada
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/aula'
              className={currentLocation.pathname === '/aula' ? 'active' : ''}
            >
              Aula
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/horario'
              className={currentLocation.pathname === '/horario' ? 'active' : ''}
            >
              Horario
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/matricula'
              className={currentLocation.pathname === '/matricula' ? 'active' : ''}
            >
              Matricula
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  }
  return (
    <nav>
      <ul>
        <li>
          <NavLink
            to='/'
            className={currentLocation.pathname === '/'?'active':''}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/login'
            className={currentLocation.pathname === '/login' ? 'active' : ''}
          >
            Login
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/signin'
            className={currentLocation.pathname === '/signin' ? 'active' : ''}
          >
            Signin
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
