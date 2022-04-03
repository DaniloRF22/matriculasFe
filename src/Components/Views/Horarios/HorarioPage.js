import Horario from './Horarios';
import { useState } from 'react';
import { privateAxios } from '../../../Lib/apiClient';

const horarioPage = ()=>{
  const [txthorario, setTxthorario] = useState('');
  const onChangeHandler = ({target: {name, value}})=>{
    switch (name) {
      case 'txthorario':
        setTxthorario(value);
        break;
    }
  }
  const onConfirm = async (e)=>{
    e.preventDefault();
    e.stopPropagation();
    try{
      const data = await privateAxios.post(
        'api/v1/horario/new',
        {
          hora: txthorario,
        }
      );
      console.log('Horario Request: ', data)
    } catch(ex) {
      console.log('Error on Horario submit', ex);
    }
  }
  const onCancel = (e)=>{
    e.preventDefault();
    e.stopPropagation();

  }

  return (
    <>
      <Horario
        txthorarioValue={txthorario}
        onChange={onChangeHandler}
        errorTxthorario=''
        onConfirmClick={onConfirm}
        onCancelClick={onCancel}
      />
    </>
  )
}

export default horarioPage;