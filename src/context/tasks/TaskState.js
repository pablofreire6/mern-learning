import React from "react";

import TaskContext from "./TaskContext";
import TaskReducer from "./TaskReducer";

const TaskState = (props) => {
  const initialState = {
    tasks: [
      { name: "Elegir Plataforma", state: true, projectId: 1 },
      { name: "Elegir Colores", state: false, projectId: 2 },
      { name: "Elegir Formas de Pago", state: true, projectId: 1 },
      { name: "Elegir Hosting", state: false, projectId: 4 },
    ],
  };

  const [state, dispatch] = React.useReducer(TaskReducer, initialState);

  return (
    <TaskContext.Provider
      value={{
        tasks: state.tasks,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
};

export default TaskState;
