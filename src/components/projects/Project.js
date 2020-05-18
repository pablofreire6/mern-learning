import React from "react";
import ProjectContext from "../../context/projects/ProjectContext";
import TaskContext from "../../context/tasks/TaskContext";

const Project = ({ project }) => {
  const projectContext = React.useContext(ProjectContext);
  const taskContext = React.useContext(TaskContext);

  const { currentProject } = projectContext;
  const { getTasks } = taskContext;

  const selectProject = (id) => {
    currentProject(id);
    getTasks(id);
  };

  return (
    <li>
      <button
        type="button"
        className="btn btn-blank"
        onClick={() => selectProject(project.id)}
      >
        {project.nameProject}
      </button>
    </li>
  );
};

export default Project;
