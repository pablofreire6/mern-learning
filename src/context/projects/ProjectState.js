import React, { useReducer } from "react";
import ProjectReducer from "./ProjectReducer";
import { FORM_PROJECT, GET_PROJECTS, ADD_PROJECT } from "../../types";
import { v4 as uuidv4 } from "uuid";

import ProjectContext from "./ProjectContext";

const ProjectState = (props) => {
  const projects = [
    { id: 1, nameProject: "Tienda Virtual" },
    { id: 2, nameProject: "Intranet" },
    { id: 3, nameProject: "Diseño de sitio web" },
  ];

  const initialState = {
    projects: [],
    form: false,
  };

  const [state, dispatch] = useReducer(ProjectReducer, initialState);

  const showForm = () => {
    dispatch({
      type: FORM_PROJECT,
    });
  };

  const getProjects = () => {
    dispatch({
      type: GET_PROJECTS,
      payload: projects,
    });
  };

  const addProject = (project) => {
    project.id = uuidv4();

    dispatch({ type: ADD_PROJECT, payload: project });
  };

  return (
    <ProjectContext.Provider
      value={{
        projects: state.projects,
        form: state.form,
        showForm,
        getProjects,
        addProject,
      }}
    >
      {props.children}
    </ProjectContext.Provider>
  );
};

export default ProjectState;
