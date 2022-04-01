import Page from '../UX/Page/Page';
import Nav from '../../UX/Nav/Nav';
const PacienteDetail = ({nombres, apellidos, identidad, telefono, correo})=>{
    return(
        <Page header={(<h2>Detalle del Paciente</h2>)} footer={(<Nav/>)}>
            <section>
                <div>
                    <b>Nombre</b>
                    <i>{nombres}</i>
                </div>
                <div>
                    <b>Apellidos</b>
                    <i>{apellidos}</i>
                </div>
                <div>
                    <b>Identidad</b>
                    <i>{identidad}</i>
                </div>
                <div>
                    <b>Telefono</b>
                    <i>{telefono}</i>
                </div>
                <div>
                    <b>Correo</b>
                    <i>{correo}</i>
                </div>
            </section>
        </Page>
    );
}


export default PacienteDetail;