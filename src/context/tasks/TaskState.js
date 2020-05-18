import React from "react";

import TaskContext from "./TaskContext";
import TaskReducer from "./TaskReducer";
import { TASKS_PROJECT, ADD_TASK } from "../../types/index";

const TaskState = (props) => {
  const initialState = {
    tasks: [
      { name: "Elegir Plataforma", state: true, projectId: 1 },
      { name: "Elegir Colores", state: false, projectId: 2 },
      { name: "Elegir Formas de Pago", state: true, projectId: 1 },
      { name: "Elegir Hosting", state: false, projectId: 4 },
    ],
    tasksProject: null,
  };

  const [state, dispatch] = React.useReducer(TaskReducer, initialState);

  const getTasks = (projectId) => {
    dispatch({ type: TASKS_PROJECT, payload: projectId });
  };

  const addTask = (task) => {
    dispatch({ type: ADD_TASK, payload: task });
  };

  return (
    <TaskContext.Provider
      value={{
        tasks: state.tasks,
        tasksProject: state.tasksProject,
        getTasks,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
};

export default TaskState;
