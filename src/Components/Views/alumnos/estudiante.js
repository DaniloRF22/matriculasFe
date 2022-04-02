import Page from "../../UX/Page/Page";
import Input from "../../UX/Forms/Input";
import { PrimaryButton } from "../../UX/Forms/Button";
import Nav from "../../UX/Nav/Nav";
const Estudiante = ({
  txtidentidadValue,
  txtnombre_completoValue,
  txtedadValue,
  txtnombre_encargadoValue,
  txttelefono_encargadoValue,
  txtcorreoValue,
  onChange: onChangeHandler,
  errorTxtidentidad,
  errorTxtnombre_completo,
  errorTxtedad,
  errorTxtnombre_encargado,
  errorTxttelefono_encargado,
  errorTxtCorreo,
  onConfirmClick,
  onCancelClick
})=> {
  return (
    <Page header={(<h2>&nbsp;Ingresar Estudiante</h2>)} footer={<Nav />}>
      <section>
        <Input
          label="Identidad"
          type="text"
          name="txtidentidad"
          placeholder="Identidad del estudiante"
          value={txtidentidadValue}
          error={errorTxtidentidad}
          onChange={onChangeHandler}
        />
        <Input
          label="Nombre completo"
          type="text"
          name="txtnombre_completo"
          placeholder="Nombre completo del estudiante"
          value={txtnombre_completoValue}
          error={errorTxtnombre_completo}
          onChange={onChangeHandler}
        />
        <Input
          label="Edad"
          type="text"
          name="txtedad"
          placeholder="Edad del estudiante"
          value={txtedadValue}
          error={errorTxtedad}
          onChange={onChangeHandler}
        />
        <Input
          label="Nombre  del encargado"
          type="text"
          name="txtnombre_encargado"
          placeholder="Nombre del encargado"
          value={txtnombre_encargadoValue}
          error={errorTxtnombre_encargado}
          onChange={onChangeHandler}
        />
        <Input
          label="Telefono Encargado"
          type="text"
          name="txttelefono_encargado"
          placeholder="Telefono del encargado"
          value={txttelefono_encargadoValue}
          error={errorTxttelefono_encargado}
          onChange={onChangeHandler}
        />
        <Input
          label="Correo Electrónico"
          type="text"
          name="txtCorreo"
          placeholder="Correo Electrónico"
          value={txtcorreoValue}
          error={errorTxtCorreo}
          onChange={onChangeHandler}
        />
        <PrimaryButton onClick={onConfirmClick}>
          Ingresar estudiante
        </PrimaryButton>
      </section>
    </Page>
  );
}

export default Estudiante;
