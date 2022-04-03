import Jornada from './jornada';
import { useState } from 'react';
import { privateAxios } from '../../../Lib/apiClient';

const jornadaPage = ()=>{
  const [txtjornada, setTxtjornada] = useState('');
  const onChangeHandler = ({target: {name, value}})=>{
    switch (name) {
      case 'txtjornada':
        setTxtjornada(value);
        break;
    }
  }
  const onConfirm = async (e)=>{
    e.preventDefault();
    e.stopPropagation();
    try{
      const data = await privateAxios.post(
        'api/v1/jornada/new',
        {
          jornada: txtjornada,
        }
      );
      console.log('Jornada Request: ', data)
    } catch(ex) {
      console.log('Error on Jornada submit', ex);
    }
  }
  const onCancel = (e)=>{
    e.preventDefault();
    e.stopPropagation();

  }

  return (
    <>
      <Jornada
        txtjornadaValue={txtjornada}
        onChange={onChangeHandler}
        errorTxtjornada=''
        onConfirmClick={onConfirm}
        onCancelClick={onCancel}
      />
    </>
  )
}

export default jornadaPage;