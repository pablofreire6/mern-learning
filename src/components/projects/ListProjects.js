import React, { useContext, useEffect } from "react";
import Project from "./Project";

import ProjectContext from "../../context/projects/ProjectContext";

const ListProjects = () => {
  const projectContext = useContext(ProjectContext);
  const { projects, getProjects } = projectContext;

  useEffect(() => {
    getProjects();
  }, []);

  if (projects.length === 0) return null;

  return (
    <ul className="listado-proyectos">
      {projects.map((project, index) => (
        <Project key={index} project={project} />
      ))}
    </ul>
  );
};

export default ListProjects;
