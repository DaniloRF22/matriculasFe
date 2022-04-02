import { combineReducers } from 'redux';
import { estudiantesReducer } from './Estudiantes/Estudiantes.reducer';
import { pacientesReducer } from './Pacientes/Pacientes.reducer';
import { securityReducer } from './Security/Security.reducer';
import { TodoReducer } from './Todo/Todo.reducer';


export const rootReducer = combineReducers(
  {
    security: securityReducer,
    todos: TodoReducer,
    pacientes: pacientesReducer,
    estudiantes: estudiantesReducer,
  }
)
