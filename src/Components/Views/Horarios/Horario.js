import Page from "../../UX/Page/Page";
import Input from "../../UX/Forms/Input";
import { PrimaryButton } from "../../UX/Forms/Button";
import Nav from "../../UX/Nav/Nav";
const Horario = ({
  txthorarioValue,
  onChange: onChangeHandler,
  errorTxthorario,
  onConfirmClick,
  onCancelClick
})=> {
  return (
    <Page header={(<h2>&nbsp;Ingresar Horario</h2>)} footer={<Nav />}>
      <section>
        <Input
          label="Horario"
          type="text"
          name="txthorario"
          placeholder="Horario"
          value={txthorarioValue}
          error={errorTxthorario}
          onChange={onChangeHandler}
        />
        <PrimaryButton onClick={onConfirmClick}>
          Ingresarhorario
        </PrimaryButton>
      </section>
    </Page>
  );
}

export default Horario;