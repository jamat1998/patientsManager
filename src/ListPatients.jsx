import Patients from "./Patients";
function ListPatients({ pacientes, setPaciente, eliminarPaciente }) {
  return (
    <div className="h-screen overflow-y-scroll">
      {pacientes && pacientes.length ? (
        <>
          <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
          <p className="text-center mt-5 font-bold mb-7">
            Administra tus {""}
            <span className="text-indigo-600">Pacientes y Citas</span>
          </p>

          {pacientes.map((paciente) => (
            <Patients
              key={paciente.id}
              paciente={paciente}
              setPaciente={setPaciente}
              eliminarPaciente={eliminarPaciente}
            />
          ))}
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
          <p className="text-center mt-5 font-bold mb-7">
            Comienza agregando pacientes {""}
            <span className="text-indigo-600">y apareceran en la lista</span>
          </p>
        </>
      )}
    </div>
  );
}

export default ListPatients;
