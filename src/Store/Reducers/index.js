import { combineReducers } from 'redux';
import { estudiantesReducer } from './Estudiantes/Estudiantes.reducer';
import { gradosReducer } from './Grados/Grados.reducer';
import { pacientesReducer } from './Pacientes/Pacientes.reducer';
import { securityReducer } from './Security/Security.reducer';
import { TodoReducer } from './Todo/Todo.reducer';
import { seccionesReducer } from './Secciones/Secciones.reducer';


export const rootReducer = combineReducers(
  {
    security: securityReducer,
    todos: TodoReducer,
    pacientes: pacientesReducer,
    estudiantes: estudiantesReducer,
    grados: gradosReducer,
    seccion:seccionesReducer,
  }
)

