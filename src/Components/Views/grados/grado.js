import Page from "../../UX/Page/Page";
import Input from "../../UX/Forms/Input";
import { PrimaryButton } from "../../UX/Forms/Button";
import Nav from "../../UX/Nav/Nav";
const Grado = ({
  txtgradoValue,
  onChange: onChangeHandler,
  errorTxtgrado,
  onConfirmClick,
  onCancelClick
})=> {
  return (
    <Page header={(<h2>&nbsp;Ingresar Grados</h2>)} footer={<Nav />}>
      <section>
        <Input
          label="Grado"
          type="text"
          name="txtgrado"
          placeholder="Grado"
          value={txtgradoValue}
          error={errorTxtgrado}
          onChange={onChangeHandler}
        />
        <PrimaryButton onClick={onConfirmClick}>
          Ingresar grado
        </PrimaryButton>
      </section>
    </Page>
  );
}

export default Grado;