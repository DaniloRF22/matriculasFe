import Matricula from './matricula';
import { useState } from 'react';
import { privateAxios } from '../../../Lib/apiClient';

const matriculaPage = ()=>{
  const [txtidentidad, setTxtidentidad] = useState('');
  const [txtnombre, setTxtnombre] = useState('');
  const [txtgrado, setTxtgrado] = useState('');
  const [txtseccion, setTxtseccion] = useState('');
  const [txtjornada, setTxtjornada] = useState('');
  const [txthorario, setTxthorario] = useState('');
  const [txtaula, setTxtaula] = useState('');
  const [txtnombreMaestro, setTxtnombreMaestro] = useState('');
  const onChangeHandler = ({target: {name, value}})=>{
    switch (name) {
      case 'txtidentidad':
        setTxtidentidad(value);
        break;
      case 'txtnombre':
        setTxtnombre(value);
        break;
      case 'txtgrado':
        setTxtgrado(value);
        break;
      case 'txtseccion':
        setTxtseccion(value);
        break;
      case 'txtjornada':
        setTxtjornada(value);
        break;
      case 'txthorario':
        setTxthorario(value);
        break;
      case 'txtaula':
        setTxtaula(value);
        break;
      case 'txtnombreMaestro':
        setTxtnombreMaestro(value);
        break;
    }
  }
  const onConfirm = async (e)=>{
    e.preventDefault();
    e.stopPropagation();
    try{
      const data = await privateAxios.post(
        'api/v1/matricula/new',
        {
          identidad_alumno: txtidentidad,
          nombre_alumno: txtnombre,
          grado: txtgrado,
          seccion: txtseccion,
          jornada: txtjornada,
          horario: txthorario,
          aula: txtaula,
          nombre_maestro: txtnombreMaestro
        }
      );
      console.log('Matricula Request: ', data)
    } catch(ex) {
      console.log('Error on Matricula submit', ex);
    }
  }
  const onCancel = (e)=>{
    e.preventDefault();
    e.stopPropagation();

  }

  return (
    <>
      <Matricula
        txtidentidadValue={txtidentidad}
        txtnombreValue={txtnombre}
        txtgradoValue={txtgrado}
        txtseccionValue={txtseccion}
        txtjornadaValue={txtjornada}
        txthorarioValue={txthorario}
        txtaulaValue={txtaula}
        txtnombreMaestroValue={txtnombreMaestro}
        onChange={onChangeHandler}
        errorTxtidentidad=''
        errorTxtnombre=''
        errorTxtgrado=''
        errorTxtseccion=''
        errorTxtjornada=''
        errorTxthorario=''
        errorTxtaula=''
        errorTxtnombreMaestro=''
        onConfirmClick={onConfirm}
        onCancelClick={onCancel}
      />
    </>
  )
}

export default matriculaPage;
