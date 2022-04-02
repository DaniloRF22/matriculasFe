import Aula from './aulas';
import { useState } from 'react';
import { privateAxios } from '../../../Lib/apiClient';

const AulaPage = ()=>{
  const [txtaula, setTxtaula] = useState('');
  const onChangeHandler = ({target: {name, value}})=>{
    switch (name) {
      case 'txtaula':
        setTxtaula(value);
        break;
    }
  }
  const onConfirm = async (e)=>{
    e.preventDefault();
    e.stopPropagation();
    try{
      const data = await privateAxios.post(
        'api/v1/aulas/new',
        {
          numero: txtaula,
        }
      );
      console.log('Aula Request: ', data)
    } catch(ex) {
      console.log('Error on Aula submit', ex);
    }
  }
  const onCancel = (e)=>{
    e.preventDefault();
    e.stopPropagation();

  }

  return (
    <>
      <Aula
        txtaulaValue={txtaula}
        onChange={onChangeHandler}
        errorTxtaula=''
        onConfirmClick={onConfirm}
        onCancelClick={onCancel}
      />
    </>
  )
}

export default AulaPage;