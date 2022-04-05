import Page from "../../UX/Page/Page";
import Input from "../../UX/Forms/Input";
import { PrimaryButton } from "../../UX/Forms/Button";
import Nav from "../../UX/Nav/Nav";
const Matricula = ({
  txtidentidadValue,
  txtnombreValue,
  txtgradoValue,
  txtseccionValue,
  txtjornadaValue,
  txthorarioValue,
  txtaulaValue,
  txtnombreMaestroValue,
  onChange: onChangeHandler,
  errorTxtidentidad,
  errorTxtnombre,
  errorTxtgrado,
  errorTxtseccion,
  errorTxtjornada,
  errorTxthorario,
  errorTxtaula,
  errorTxtnombreMaestro,
  onConfirmClick,
  onCancelClick
})=> {
  return (
    <Page header={(<h2>&nbsp;Ingresar Matricula</h2>)} footer={<Nav />}>
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
          label="Nombre del alumno"
          type="text"
          name="txtnombre"
          placeholder="Nombres del alumno"
          value={txtnombreValue}
          error={errorTxtnombre}
          onChange={onChangeHandler}
        />
        <Input
          label="Grado"
          type="text"
          name="txtagrado"
          placeholder="Grado"
          value={txtgradoValue}
          error={errorTxtgrado}
          onChange={onChangeHandler}
        />
        <Input
          label="Seccion"
          type="text"
          name="txtseccion"
          placeholder="Seccion"
          value={txtseccionValue}
          error={errorTxtseccion}
          onChange={onChangeHandler}
        />
        <Input
          label="Jornada"
          type="text"
          name="txtjornada"
          placeholder="Jornada"
          value={txtjornadaValue}
          error={errorTxtjornada}
          onChange={onChangeHandler}
        />
        <Input
          label="Horario"
          type="text"
          name="txthorario"
          placeholder="Horario"
          value={txthorarioValue}
          error={errorTxthorario}
          onChange={onChangeHandler}
        />
          <Input
          label="Aula"
          type="text"
          name="txtaula"
          placeholder="Aula"
          value={txtaulaValue}
          error={errorTxtaula}
          onChange={onChangeHandler}
        />
        <Input
          label="Nombre del maestro"
          type="text"
          name="txtnombreMaestro"
          placeholder="Nombre del maestro"
          value={txtnombreMaestroValue}
          error={errorTxtnombreMaestro}
          onChange={onChangeHandler}
        />
        <PrimaryButton onClick={onConfirmClick}>
          Ingresar matricula
        </PrimaryButton>
      </section>
    </Page>
  );
}

export default Matricula;
