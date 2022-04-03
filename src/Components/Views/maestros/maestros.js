import Page from "../../UX/Page/Page";
import Input from "../../UX/Forms/Input";
import { PrimaryButton } from "../../UX/Forms/Button";
import Nav from "../../UX/Nav/Nav";
const Maestro = ({
  txtidentidadValue,
  txtnombresValue,
  txtapellidosValue,
  txtemailValue,
  txttelefonoValue,
  txtdireccionValue,
  txtmateriasValue,
  txtgradosValue,
  onChange: onChangeHandler,
  errorTxtidentidad,
  errorTxtnombres,
  errorTxtapellidos,
  errorTxtemail,
  errorTxttelefono,
  errorTxtdireccion,
  errorTxtmaterias,
  errorTxtgrados,
  onConfirmClick,
  onCancelClick
})=> {
  return (
    <Page header={(<h2>&nbsp;Ingresar Maestro</h2>)} footer={<Nav />}>
      <section>
        <Input
          label="Identidad"
          type="text"
          name="txtidentidad"
          placeholder="Identidad del maestro"
          value={txtidentidadValue}
          error={errorTxtidentidad}
          onChange={onChangeHandler}
        />
        <Input
          label="Nombres"
          type="text"
          name="txtnombres"
          placeholder="Nombres del maestro"
          value={txtnombresValue}
          error={errorTxtnombres}
          onChange={onChangeHandler}
        />
        <Input
          label="Apellidos"
          type="text"
          name="txtapellidos"
          placeholder="Apellidos del maestro"
          value={txtapellidosValue}
          error={errorTxtapellidos}
          onChange={onChangeHandler}
        />
        <Input
          label="Email"
          type="text"
          name="txtemail"
          placeholder="Correo Electronico del maestro"
          value={txtemailValue}
          error={errorTxtemail}
          onChange={onChangeHandler}
        />
        <Input
          label="Telefono"
          type="text"
          name="txttelefono"
          placeholder="Telefono del maestro"
          value={txttelefonoValue}
          error={errorTxttelefono}
          onChange={onChangeHandler}
        />
        <Input
          label="Direccion"
          type="text"
          name="txtdireccion"
          placeholder="Direccion del Maestro"
          value={txtdireccionValue}
          error={errorTxtdireccion}
          onChange={onChangeHandler}
        />
          <Input
          label="Materias"
          type="text"
          name="txtmaterias"
          placeholder="Materias del maestro"
          value={txtmateriasValue}
          error={errorTxtmaterias}
          onChange={onChangeHandler}
        />
        <Input
          label="Grados"
          type="text"
          name="txtgrados"
          placeholder="Grados del maestro"
          value={txtgradosValue}
          error={errorTxtgrados}
          onChange={onChangeHandler}
        />
        <PrimaryButton onClick={onConfirmClick}>
          Ingresar maestro
        </PrimaryButton>
      </section>
    </Page>
  );
}

export default Maestro;
