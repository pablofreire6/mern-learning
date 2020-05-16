import React from "react";

const Project = ({ project }) => {
  return (
    <li>
      <button type="button" className="btn btn-blank">
        {project.nameProject}
      </button>
    </li>
  );
};

export default Project;
