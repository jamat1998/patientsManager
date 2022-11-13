import ListPatients from "./ListPatients";
import { useState, useEffect } from "react";
import Header from "./Header";
import Form from "./Form";

function App() {
  const [pacientes, setPacientes] = useState(JSON.parse(localStorage.getItem("pacientes")) ?? []);
  const [paciente, setPaciente] = useState({});
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    localStorage.setItem("pacientes", JSON.stringify(pacientes));
  }, [pacientes]);

  const eliminarPaciente = (id) => {
    const PacientesActualizados = pacientes.filter(
      (paciente) => paciente.id !== id
    );
    setPacientes(PacientesActualizados);
  };

  return (
    <div className="mx-16">
      <Header />
      <div className="md:grid grid-cols-2">
        <Form
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}
          editing={editing}
          setEditing={setEditing}
        />
        <ListPatients
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
          editing={editing}
          setEditing={setEditing}
        />
      </div>
    </div>
  );
}
export default App;
