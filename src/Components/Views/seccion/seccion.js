import Page from "../../UX/Page/Page";
import Input from "../../UX/Forms/Input";
import { PrimaryButton } from "../../UX/Forms/Button";
import Nav from "../../UX/Nav/Nav";
const Seccion = ({
  txtseccionValue,
  onChange: onChangeHandler,
  errorTxtseccion,
  onConfirmClick,
  onCancelClick
})=> {
  return (
    <Page header={(<h2>&nbsp;Ingresar Seccion</h2>)} footer={<Nav />}>
      <section>
        <Input
          label="Seccion"
          type="text"
          name="txtseccion"
          placeholder="Seccion"
          value={txtseccionValue}
          error={errorTxtseccion}
          onChange={onChangeHandler}
        />
        <PrimaryButton onClick={onConfirmClick}>
          Ingresarseccion
        </PrimaryButton>
      </section>
    </Page>
  );
}

export default Seccion;