import Maestro from './maestro';
import { useState } from 'react';
import { privateAxios } from '../../../Lib/apiClient';

const maestroPage = ()=>{
  const [txtidentidad, setTxtidentidad] = useState('');
  const [txtnombres, setTxtnombres] = useState('');
  const [txtapellidos, setTxtapellidos] = useState('');
  const [txtemail, setTxtemail] = useState('');
  const [txttelefono, setTxttelefono] = useState('');
  const [txtdireccion, setTxtdireccion] = useState('');
  const [txtmaterias, setTxtmaterias] = useState('');
  const [txtgrados, setTxtgrados] = useState('');
  const onChangeHandler = ({target: {name, value}})=>{
    switch (name) {
      case 'txtidentidad':
        setTxtidentidad(value);
        break;
      case 'txtnombres':
        setTxtnombres(value);
        break;
      case 'txtapellidos':
        setTxtapellidos(value);
        break;
      case 'txtemail':
        setTxtemail(value);
        break;
      case 'txttelefono':
        setTxttelefono(value);
        break;
      case 'txtdireccion':
        setTxtdireccion(value);
        break;
      case 'txtmaterias':
          setTxtmaterias(value);
        break;
      case 'txtgrados':
          setTxtgrados(value);
        break;
    }
  }
  const onConfirm = async (e)=>{
    e.preventDefault();
    e.stopPropagation();
    try{
      const data = await privateAxios.post(
        'api/v1/maestros/new',
        {
          identidad: txtidentidad,
          nombres: txtnombres,
          apellidos: txtapellidos,
          email: txtemail,
          telefono: txttelefono,
          direccion: txtdireccion,
          materias: txtmaterias,
          grados: txtgrados
        }
      );
      console.log('Maestro Request: ', data)
    } catch(ex) {
      console.log('Error on Maestro submit', ex);
    }
  }
  const onCancel = (e)=>{
    e.preventDefault();
    e.stopPropagation();

  }

  return (
    <>
      <Maestro
        txtidentidadValue={txtidentidad}
        txtnombresValue={txtnombres}
        txtapellidosValue={txtapellidos}
        txtemailValue={txtemail}
        txttelefonoValue={txttelefono}
        txtdireccionValue={txtdireccion}
        txtmateriasValue={txtmaterias}
        txtgradosValue={txtgrados}
        onChange={onChangeHandler}
        errorTxtidentidad=''
        errorTxtnombres=''
        errorTxtapellidos=''
        errorTxtemail=''
        errorTxttelefono=''
        errorTxtdireccion=''
        errorTxtmaterias=''
        errorTxtgrados=''
        onConfirmClick={onConfirm}
        onCancelClick={onCancel}
      />
    </>
  )
}

export default maestroPage;
