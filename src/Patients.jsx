import { confirm } from "react-alert-confirm";
import "react-alert-confirm/dist/index.css";
function Patients({
  paciente,
  setPaciente,
  eliminarPaciente,
  setEditing,
  editing,
}) {
  const handlerDelete = async () => {
    await confirm({
      title: "Eliminar Paciente",
      content: "Deseas eliminar este paciente?",
      okText: "Eliminar",
      cancelText: "Cancelar",
      maskClosable: true,
      onOk: () => {
        eliminarPaciente(paciente.id);
      },
    });
  };

  return (
    <div className="bg-white mt-3 ml-5 p-5 rounded-lg shadow-md">
      <div className="my-2">
        <p className="font-bold text-gray-700 uppercase inline">Nombre: {""}</p>
        <span>{paciente.Mascota}</span>
      </div>
      <div className="my-2">
        <p className="font-bold text-gray-700 inline uppercase">
          Paciente: {""}
        </p>
        <span>{paciente.Propietario}</span>
      </div>
      <div className="my-2">
        <p className="font-bold text-gray-700 inline uppercase">Email: {""}</p>
        <span>{paciente.Email}</span>
      </div>
      <div className="my-2">
        <p className="font-bold text-gray-700 inline uppercase">
          Fecha de Alta: {""}
        </p>
        <span>{paciente.Alta}</span>
      </div>
      <div className="my-2">
        <p className="font-bold text-gray-700 inline uppercase">
          Sintomas: {""}
        </p>
        <span>{paciente.Sintomas}</span>
      </div>

      <div className="flex justify-between">
        <button
          onClick={() =>{
            setEditing(true)
            setPaciente(paciente)}
          } 
          className="bg-indigo-600 rounded-lg text-white px-6 uppercase font-bold hover:bg-indigo-500 mt-2"
          type="button"
        >
          Editar
        </button>

        <button
          onClick={handlerDelete}
          className="bg-red-600 rounded-lg text-white px-6 uppercase font-bold py-2 hover:bg-red-500 mt-2"
          type="button"
        >
          Eliminar
        </button>
      </div>
    </div>
  );
}

export default Patients;
