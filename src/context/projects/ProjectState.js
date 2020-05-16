import React, { useReducer } from "react";
import ProjectReducer from "./ProjectReducer";
import {
  FORM_PROJECT,
  GET_PROJECTS,
  ADD_PROJECT,
  VALIDATE_FORM,
  CURRENT_PROJECT,
} from "../../types";
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
    errorForm: false,
    project: null,
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

  const showError = () => {
    dispatch({ type: VALIDATE_FORM });
  };

  const currentProject = (projectId) => {
    dispatch({ type: CURRENT_PROJECT, payload: projectId });
  };

  return (
    <ProjectContext.Provider
      value={{
        projects: state.projects,
        form: state.form,
        errorForm: state.errorForm,
        project: state.project,
        showForm,
        getProjects,
        addProject,
        showError,
        currentProject,
      }}
    >
      {props.children}
    </ProjectContext.Provider>
  );
};

export default ProjectState;
