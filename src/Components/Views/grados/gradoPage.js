import Grado from './grado';
import { useState } from 'react';
import { privateAxios } from '../../../Lib/apiClient';

const gradoPage = ()=>{
  const [txtgrado, setTxtgrado] = useState('');
  const onChangeHandler = ({target: {name, value}})=>{
    switch (name) {
      case 'txtgrado':
        setTxtgrado(value);
        break;
    }
  }
  const onConfirm = async (e)=>{
    e.preventDefault();
    e.stopPropagation();
    try{
      const data = await privateAxios.post(
        'api/v1/grados/new',
        {
          grado: txtgrado,
        }
      );
      console.log('Grados Request: ', data)
    } catch(ex) {
      console.log('Error on Grados submit', ex);
    }
  }
  const onCancel = (e)=>{
    e.preventDefault();
    e.stopPropagation();

  }

  return (
    <>
      <Grado
        txtgradoValue={txtgrado}
        onChange={onChangeHandler}
        errorTxtgrado=''
        onConfirmClick={onConfirm}
        onCancelClick={onCancel}
      />
    </>
  )
}

export default gradoPage;