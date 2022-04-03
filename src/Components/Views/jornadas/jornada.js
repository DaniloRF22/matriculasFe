import Page from "../../UX/Page/Page";
import Input from "../../UX/Forms/Input";
import { PrimaryButton } from "../../UX/Forms/Button";
import Nav from "../../UX/Nav/Nav";
const Jornada = ({
  txtjornadaValue,
  onChange: onChangeHandler,
  errorTxtjornada,
  onConfirmClick,
  onCancelClick
})=> {
  return (
    <Page header={(<h2>&nbsp;Ingresar Jornada</h2>)} footer={<Nav />}>
      <section>
        <Input
          label="Jornada"
          type="text"
          name="txtjornada"
          placeholder="Jornada"
          value={txtjornadaValue}
          error={errorTxtjornada}
          onChange={onChangeHandler}
        />
        <PrimaryButton onClick={onConfirmClick}>
          Ingresarjornada
        </PrimaryButton>
      </section>
    </Page>
  );
}

export default Jornada;