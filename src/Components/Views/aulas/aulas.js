import Page from "../../UX/Page/Page";
import Input from "../../UX/Forms/Input";
import { PrimaryButton } from "../../UX/Forms/Button";
import Nav from "../../UX/Nav/Nav";
const Aula = ({
  txtaulaValue,
  onChange: onChangeHandler,
  errorTxtaula,
  onConfirmClick,
  onCancelClick
})=> {
  return (
    <Page header={(<h2>&nbsp;Ingresar Aula</h2>)} footer={<Nav />}>
      <section>
        <Input
          label="Aula"
          type="text"
          name="txtaula"
          placeholder="Aula"
          value={txtaulaValue}
          error={errorTxtaula}
          onChange={onChangeHandler}
        />
        <PrimaryButton onClick={onConfirmClick}>
          Ingresar aula
        </PrimaryButton>
      </section>
    </Page>
  );
}

export default Aula;