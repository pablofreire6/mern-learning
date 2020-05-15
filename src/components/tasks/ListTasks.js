import React, { Fragment } from "react";
import Task from "./Task";

const ListTasks = () => {
  const tasks = [
    { name: "Elegir Plataforma", state: true },
    { name: "Elegir Colores", state: false },
    { name: "Elegir Formas de Pago", state: true },
    { name: "Elegir Hosting", state: false },
  ];
  return (
    <Fragment>
      <h2>Proyecto: Tienda virtual</h2>

      <ul className="listado-tareas">
        {tasks.length === 0 ? (
          <li className="tarea">
            <p>No hay tareas</p>
          </li>
        ) : (
          tasks.map((task, index) => <Task key={index} task={task} />)
        )}
      </ul>
    </Fragment>
  );
};

export default ListTasks;
