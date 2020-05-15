import React, { useReducer } from "react";
import ProjectReducer from "./ProjectReducer";
import { FORM_PROJECT } from "../../types";

import ProjectContext from "./ProjectContext";

const ProjectState = (props) => {
  const initialState = {
    form: false,
  };

  const [state, dispatch] = useReducer(ProjectReducer, initialState);

  const showForm = () => {
    dispatch({
      type: FORM_PROJECT,
    });
  };

  return (
    <ProjectContext.Provider value={{ form: state.form, showForm }}>
      {props.children}
    </ProjectContext.Provider>
  );
};

export default ProjectState;
