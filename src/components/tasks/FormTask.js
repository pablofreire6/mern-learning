import React from "react";
import ProjectContext from "../../context/projects/ProjectContext";

const FormTask = () => {
  const projectContext = React.useContext(ProjectContext);
  const { project } = projectContext;

  if (!project) return null;

  const [currentProject] = project;

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="formulario">
      <form onSubmit={onSubmit}>
        <div className="contenedor-input">
          <input
            type="text"
            className="input-text"
            placeholder="Nombre Tarea..."
            name="nombre"
          />
        </div>

        <div className="contenedor-input">
          <input
            type="submit"
            className="btn btn-primario btn-block"
            value="Agregar Tarea"
          />
        </div>
      </form>
    </div>
  );
};

export default FormTask;
