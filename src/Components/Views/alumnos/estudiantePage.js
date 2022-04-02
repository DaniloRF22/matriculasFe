import Estudiante from './estudiante';
import { useState } from 'react';
import { privateAxios } from '../../../Lib/apiClient';

const estudiantePage = ()=>{
  const [txtidentidad, setTxtidentidad] = useState('');
  const [txtnombre_completo, setTxtnombre_completo] = useState('');
  const [txtedad, setTxtedad] = useState('');
  const [txtnombre_encargado, setTxtnombre_encargado] = useState('');
  const [txttelefono_encargado, setTxttelefono_encargado] = useState('');
  const [txtcorreo, setTxtcorreo] = useState('');
  const onChangeHandler = ({target: {name, value}})=>{
    switch (name) {
      case 'txtidentidad':
        setTxtidentidad(value);
        break;
      case 'txtnombre_completo':
        setTxtnombre_completo(value);
        break;
      case 'txtedad':
        setTxtedad(value);
        break;
      case 'txtnombre_encargado':
        setTxtnombre_encargado(value);
        break;
      case 'txttelefono_encargado':
        setTxttelefono_encargado(value);
        break;
      case 'txtcorreo':
        setTxtcorreo(value);
        break;
    }
  }
  const onConfirm = async (e)=>{
    e.preventDefault();
    e.stopPropagation();
    try{
      const data = await privateAxios.post(
        'api/v1/estudiantes/new',
        {
          identidad: txtidentidad,
          nombre_Completo: txtnombre_completo,
          edad: txtedad,
          nombre_encargado: txtnombre_encargado,
          telefono_encargado: txtnombre_encargado,
          correo: txtcorreo
        }
      );
      console.log('Estudiante Request: ', data)
    } catch(ex) {
      console.log('Error on Estudante submit', ex);
    }
  }
  const onCancel = (e)=>{
    e.preventDefault();
    e.stopPropagation();

  }

  return (
    <>
      <Estudiante
        txtidentidadValue={txtedad}
        txtnombre_completoValue={txtnombre_completo}
        txtedadValue={txtedad}
        txtnombre_encargadoValue={txtnombre_encargado}
        txttelefono_encargadoValue={txttelefono_encargado}
        txtcorreoValue={txtcorreo}
        onChange={onChangeHandler}
        errorTxtidentidad=''
        errorTxtnombre_completo=''
        errorTxtedad=''
        errorTxtnombre_encargado=''
        errorTxttelefono_encargado=''
        errorTxtCorreo=''
        onConfirmClick={onConfirm}
        onCancelClick={onCancel}
      />
    </>
  )
}

export default estudiantePage;
