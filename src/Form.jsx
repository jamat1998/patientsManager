import { useState, useEffect } from "react";
import Error from "./Error";
function Form({ pacientes, setPacientes, paciente,setPaciente,setEditing,editing}) {
  const [Mascota, setMascota] = useState("");
  const [Propietario, setPropietario] = useState("");
  const [Email, setEmail] = useState("");
  const [Alta, setAlta] = useState("");
  const [Sintomas, setSintomas] = useState("");
  const [error, setError] = useState(false);

  const generarId = () => {
    let data = Date.now().toString(36);
    let random = Math.random().toString(36).substr(2);
    return data + random;
  };

  useEffect(() => {
    if (Object.entries(paciente).length !== 0) {
      setAlta(paciente.Alta);
      setEmail(paciente.Email);
      setMascota(paciente.Mascota);
      setSintomas(paciente.Sintomas);
      setPropietario(paciente.Propietario);
    }
  }, [paciente]);

  const handlerSubmit = (e) => {
    e.preventDefault();
    if ([Mascota, Propietario, Email, Sintomas, Alta].includes("")) {
      setError(true);
      return;
    }
    setError(false);

    const objPacientes = {
      Mascota,
      Propietario,
      Email,
      Sintomas,
      Alta,
    };

    if (paciente.id) {
      objPacientes.id = paciente.id;

      const PacientesActualizados = pacientes.map((pacienteState) =>
        pacienteState.id === paciente.id ? objPacientes : pacienteState
      );
      setPacientes(PacientesActualizados);
    } else {
      objPacientes.id = generarId();
      setPacientes([...pacientes, objPacientes]);
      setPaciente({})
    }

    //Reiniciar formulario

    setAlta("");
    setEmail("");
    setMascota("");
    setSintomas("");
    setPropietario("");
    setEditing(false)
  };

  return (
    <div>
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
      <p className="text-center mt-5 font-bold">
        Añade Pacientes y {""}
        <span className="text-indigo-600">Administralos</span>
      </p>

      <form
        onSubmit={handlerSubmit}
        className="bg-white p-8 mt-7 mb-7 rounded-lg shadow-md w-full"
      >
        {error && <Error mensaje={"Todos los campos son obligatorios"} />}
        <div>
          <label
            className="block text-gray-700 font-bold uppercase"
            htmlFor="Mascota"
          >
            Nombre Mascota
          </label>
          <input
            onChange={(e) => setMascota(e.target.value)}
            placeholder="Nombre de su Mascota"
            className="placeholder-gray-400 w-full border-2 p-2 mt-2 rounded-lg"
            type=" "
            id="Mascota"
            value={Mascota}
          />
        </div>
        <div className="mt-4">
          <label
            className="block text-gray-700 font-bold uppercase"
            htmlFor="Propietario"
          >
            Nombre Propietario
          </label>
          <input
            onChange={(e) => setPropietario(e.target.value)}
            placeholder="Nombre del Propietario"
            className="placeholder-gray-400 w-full border-2 p-2 mt-2 rounded-lg"
            type="text"
            id="Propietario"
            value={Propietario}
          />
        </div>
        <div className="mt-4">
          <label
            className="block text-gray-700 font-bold uppercase"
            htmlFor="Email"
          >
            Email
          </label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Contacto Propietario"
            className="placeholder-gray-400 w-full border-2 p-2 mt-2 rounded-lg"
            type="email"
            id="Email"
            value={Email}
          />
        </div>
        <div className="mt-4">
          <label
            className="block text-gray-700 font-bold uppercase"
            htmlFor="Alta"
          >
            Alta
          </label>
          <input
            onChange={(e) => setAlta(e.target.value)}
            className="w-full border-2 p-2 mt-2 rounded-lg"
            type="date"
            id="Alta"
            value={Alta}
          />
        </div>
        <div className="mt-4">
          <label
            className="block text-gray-700 font-bold uppercase"
            htmlFor="Sintomas"
          >
            Sintomas
          </label>
          <textarea
            onChange={(e) => setSintomas(e.target.value)}
            value={Sintomas}
            className="w-full border-2 placeholder-gray-400 p-2 mt-2 rounded-lg resize-none"
            name=""
            id="Sintomas"
            cols="30"
            rows="4"
            placeholder="Describe los Sintomas"
          />
        </div>
        <input
          type="submit"
          className="bg-indigo-600 mx-auto w-full p-3 text-white uppercase font-bold hover:bg-indigo-500 mt-2 rounded-lg cursor-pointer transition-all"
          value={editing ? "Editar Paciente" : "Agregar Paciente"}
        />
      </form>
    </div>
  );
}

export default Form;
