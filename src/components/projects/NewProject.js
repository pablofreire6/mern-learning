import React, { Fragment, useState, useContext } from "react";
import ProjectContext from "../../context/projects/ProjectContext";

const NewProject = () => {
  const projectContext = useContext(ProjectContext);
  const { form, showForm } = projectContext;

  const [project, setProject] = useState({
    nombre: "",
  });

  const { nombre } = project;

  const onChangeProject = (e) => {
    setProject({
      ...project,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitProject = (e) => {
    e.preventDefault();
  };

  return (
    <Fragment>
      <button
        type="button"
        className="btn btn-block btn-primario"
        onClick={showForm}
      >
        Nuevo Proyecto
      </button>

      {form ? (
        <form className="formulario-nuevo-proyecto" onSubmit={() => showForm()}>
          <input
            type="text"
            className="input-text"
            placeholder="Nombre Proyecto"
            name="nombre"
            value={nombre}
            onChange={onChangeProject}
          />
          <input
            type="submit"
            className="btn btn-primario btn-block"
            value="Agregar Proyecto"
          />
        </form>
      ) : null}
    </Fragment>
  );
};

export default NewProject;
