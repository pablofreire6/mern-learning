import React, { Fragment } from "react";
import ProjectContext from "../../context/projects/ProjectContext";

const NewProject = () => {
  const projectContext = React.useContext(ProjectContext);
  const { form, errorForm, showForm, addProject, showError } = projectContext;

  const [project, setProject] = React.useState({
    nameProject: "",
  });

  const { nameProject } = project;

  const onChangeProject = (e) => {
    setProject({
      ...project,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitProject = (e) => {
    e.preventDefault();

    if (nameProject === "") {
      showError();
      return;
    }

    addProject(project);

    setProject({
      projectName: "",
    });
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
        <form className="formulario-nuevo-proyecto" onSubmit={onSubmitProject}>
          <input
            type="text"
            className="input-text"
            placeholder="Nombre Proyecto"
            name="nameProject"
            value={nameProject}
            onChange={onChangeProject}
          />
          <input
            type="submit"
            className="btn btn-primario btn-block"
            value="Agregar Proyecto"
          />
        </form>
      ) : null}

      {errorForm ? (
        <p className="mensaje error">El nombre del projecto es obligatorio</p>
      ) : null}
    </Fragment>
  );
};

export default NewProject;
