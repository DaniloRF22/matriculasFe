import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import './App.css';

import Private from './Components/UX/Private/Private';

import {store, persistor} from './Store';
import Splash from './Components/Views/Splash';
import Signin from './Components/Views/Signin/SigninPage';
import Login from './Components/Views/Login/LoginPage';
import Estudiante from './Components/Views/alumnos/estudiantePage';
import Maestro from './Components/Views/maestros/maestroPage';
import Grado from './Components/Views/grados/gradoPage';
import Seccion from './Components/Views/seccion/seccionPage'
import Jornada from './Components/Views/jornadas/jornadaPage'
import Aula from './Components/Views/aulas/aulasPage'
import Horario from './Components/Views/Horarios/HorarioPage';
import Matricula from './Components/Views/matricula/matriculaPage';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Splash />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signin" element={<Signin />} />

            <Route path="/estudiante" element={<Private><Estudiante /></Private>} />
            <Route path="/maestro" element={<Private><Maestro /></Private>} />
            <Route path="/grado" element={<Private><Grado /></Private>} />
            <Route path="/seccion" element={<Private><Seccion /></Private>} />
            <Route path="/jornada" element={<Private><Jornada /></Private>} />
            <Route path="/aula" element={<Private><Aula /></Private>} />
            <Route path="/horario" element={<Private><Horario /></Private>} />
            <Route path="/matricula" element={<Private><Matricula /></Private>} />

          </Routes>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
