import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import './App.css';

import Private from './Components/UX/Private/Private';

import {store, persistor} from './Store';
import Splash from './Components/Views/Splash';
import Signin from './Components/Views/Signin/SigninPage';
import Login from './Components/Views/Login/LoginPage';
import Todo from './Components/Views/Todo/TodoPage';
import Pacientes from './Components/Views/Pacientes/PacientesPage';
import PacientesDetail from './Components/Views/PacienteDetail/PacientesDetail';
import Estudiante from './Components/Views/alumnos/estudiantePage';
import Grado from './Components/Views/grados/grado';
import Seccion from './Components/Views/seccion/seccionPage'

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Splash />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signin" element={<Signin />} />

            <Route path="/todos" element={<Private><Todo /></Private>} />
            <Route path="/pacientes" element={<Private><Pacientes /></Private>} />
            <Route path="/pacientes/:pacienteId" element={<Private><PacientesDetail /></Private>} />
            <Route path="/estudiante" element={<Private><Estudiante /></Private>} />
            <Route path="/grado" element={<Private><Grado /></Private>} />
            <Route path="/seccion" element={<Private><Seccion /></Private>} />
          </Routes>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
