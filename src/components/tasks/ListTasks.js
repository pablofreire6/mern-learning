import React, { Fragment } from "react";
import Task from "./Task";
import ProjectContext from "../../context/projects/ProjectContext";

const ListTasks = () => {
  const projectContext = React.useContext(ProjectContext);
  const { project } = projectContext;

  if (!project) return <h2>Selecciona un proyecto</h2>;

  const [currentProject] = project;

  const tasks = [
    { name: "Elegir Plataforma", state: true },
    { name: "Elegir Colores", state: false },
    { name: "Elegir Formas de Pago", state: true },
    { name: "Elegir Hosting", state: false },
  ];
  return (
    <Fragment>
      <h2>Proyecto: {currentProject.nameProject}</h2>

      <ul className="listado-tareas">
        {tasks.length === 0 ? (
          <li className="tarea">
            <p>No hay tareas</p>
          </li>
        ) : (
          tasks.map((task, index) => <Task key={index} task={task} />)
        )}
      </ul>

      <button type="button" className="btn btn-eliminar">
        Eliminar Proyecto &times;
      </button>
    </Fragment>
  );
};

export default ListTasks;
