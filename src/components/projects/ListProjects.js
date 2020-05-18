import React from "react";
import Project from "./Project";

import ProjectContext from "../../context/projects/ProjectContext";

const ListProjects = () => {
  const projectContext = React.useContext(ProjectContext);
  const { projects, getProjects } = projectContext;

  React.useEffect(() => {
    getProjects();
  }, []);

  if (projects.length === 0)
    return <p>No hay proyectos, comienza creando uno</p>;

  return (
    <ul className="listado-proyectos">
      {projects.map((project, index) => (
        <Project key={index} project={project} />
      ))}
    </ul>
  );
};

export default ListProjects;
