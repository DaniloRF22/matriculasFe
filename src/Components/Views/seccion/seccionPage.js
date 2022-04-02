import Seccion from './seccion';
import { useState } from 'react';
import { privateAxios } from '../../../Lib/apiClient';

const seccionPage = ()=>{
  const [txtseccion, setTxtseccion] = useState('');
  const onChangeHandler = ({target: {name, value}})=>{
    switch (name) {
      case 'txtseccion':
        setTxtseccion(value);
        break;
    }
  }
  const onConfirm = async (e)=>{
    e.preventDefault();
    e.stopPropagation();
    try{
      const data = await privateAxios.post(
        'api/v1/secciones/new',
        {
          seccion: txtseccion,
        }
      );
      console.log('Seccion Request: ', data)
    } catch(ex) {
      console.log('Error on Seccion submit', ex);
    }
  }
  const onCancel = (e)=>{
    e.preventDefault();
    e.stopPropagation();

  }

  return (
    <>
      <Seccion
        txtgradoValue={txtseccion}
        onChange={onChangeHandler}
        errorTxtseccion=''
        onConfirmClick={onConfirm}
        onCancelClick={onCancel}
      />
    </>
  )
}

export default seccionPage;