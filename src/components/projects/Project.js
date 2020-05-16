import React from "react";
import ProjectContext from "../../context/projects/ProjectContext";

const Project = ({ project }) => {
  const projectContext = React.useContext(ProjectContext);
  const { currentProject } = projectContext;

  return (
    <li>
      <button
        type="button"
        className="btn btn-blank"
        onClick={() => currentProject(project.id)}
      >
        {project.nameProject}
      </button>
    </li>
  );
};

export default Project;
