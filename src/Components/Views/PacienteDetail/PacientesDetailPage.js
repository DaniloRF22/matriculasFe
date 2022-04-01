import { userSelector, useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from  'react';
import { useParams } from 'react-router-dom';
import PacientesDetail from './pacientesDetail';

const pacientesDefault = {
    _id: null,
    nombres:'',
    apellidos:'',
    identidad:'',
    telefono:'',
    correo:''
}
const PacientesDetailPage = ()=>{
    const [paciente, setPaciente] = useState({...pacientesDefault});
    const { pacienteId } = useParams();
    const { pacientes } = useSelector(state=>state.pacientes);
    useEffect(
        ()=>{
            const [selectedPacientes] = pacientes.filter(o=>o._id === pacienteId);
            setPaciente(selectedPacientes)
        }, []
    );

    return(
        <PacientesDetail
        {...paciente}
        >
        </PacientesDetail>
    );
}

export default PacientesDetailPage;

