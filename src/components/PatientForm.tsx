import React from "react";

const PatientForm: React.FC = () => {
  return (
    <div>
      <h2>Formulario para pacientes</h2>
      <form>
        <label>
          Nombre:
          <input type="text" name="name" />
        </label>
        <label>
          Edad:
          <input type="number" name="age" />
        </label>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default PatientForm;