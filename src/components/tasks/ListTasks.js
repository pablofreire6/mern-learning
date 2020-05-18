import React, { Fragment } from "react";
import Task from "./Task";
import ProjectContext from "../../context/projects/ProjectContext";
import TaskContext from "../../context/tasks/TaskContext";

const ListTasks = () => {
  const projectContext = React.useContext(ProjectContext);
  const taskContext = React.useContext(TaskContext);

  const { project, deleteProject } = projectContext;
  const { tasksProject } = taskContext;

  if (!project) return <h2>Selecciona un proyecto</h2>;

  const [currentProject] = project;

  const handleDeleteProject = () => {
    deleteProject(currentProject.id);
  };
  return (
    <Fragment>
      <h2>Proyecto: {currentProject.nameProject}</h2>

      <ul className="listado-tareas">
        {tasksProject.length === 0 ? (
          <li className="tarea">
            <p>No hay tareas</p>
          </li>
        ) : (
          tasksProject.map((task, index) => <Task key={index} task={task} />)
        )}
      </ul>

      <button
        type="button"
        className="btn btn-eliminar"
        onClick={handleDeleteProject}
      >
        Eliminar Proyecto &times;
      </button>
    </Fragment>
  );
};

export default ListTasks;
