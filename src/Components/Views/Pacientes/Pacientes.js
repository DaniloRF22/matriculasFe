import Nav from "../../UX/Nav/Nav";
import Page from "../../UX/Page/Page";
import  { Link } from   "react-router-dom";

const Pacientes = ({pacientes})=>{
  return (
    <Page header={<h2>Pacientes</h2>} footer={<Nav/>}>
      {
        pacientes.map((o)=>{
          return <PacientesItem key={o._id} paciente={o} />
        })
      }
    </Page>
  );
}

const PacientesItem = ({paciente})=>{
  return (
    <section>
      <Link to={`/pacientes/${paciente._id}`}>
        {paciente.nombres} {paciente.apellidos}
      </Link>
    </section>
  );
}

export default Pacientes;
