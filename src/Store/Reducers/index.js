import { combineReducers } from 'redux';
import { estudiantesReducer } from './Estudiantes/Estudiantes.reducer';
import { maestrosReducer } from './Maestros/Maestros.reducer';
import { gradosReducer } from './Grados/Grados.reducer';
import { pacientesReducer } from './Pacientes/Pacientes.reducer';
import { securityReducer } from './Security/Security.reducer';
import { TodoReducer } from './Todo/Todo.reducer';
import { seccionesReducer } from './Secciones/Secciones.reducer';
import {jornadasReducer} from './Jornadas/Jornadas.reducer';
import {aulasReducer} from './Aulas/Aulas.reducer';
import { horariosReducer } from './Horarios/Horarios.reducer';
import { matriculasReducer } from './Matriculas/Matricula.reducer'



export const rootReducer = combineReducers(
  {
    security: securityReducer,
    todos: TodoReducer,
    pacientes: pacientesReducer,
    estudiantes: estudiantesReducer,
    maestros: maestrosReducer,
    grados: gradosReducer,
    seccion:seccionesReducer,
    jornada:jornadasReducer,
    aulas:aulasReducer,
    horarios:horariosReducer,
    matriculas:matriculasReducer,
  }
)

