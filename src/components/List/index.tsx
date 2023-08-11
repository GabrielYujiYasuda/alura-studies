import React, { useState } from "react";
import style from "./List.module.scss";
import Item from "./Item";

export default function List() {
  const [tasks, setTasks] = useState([
    {
      task: "React",
      time: "02:00:00",
    },
    {
      task: "Javascript",
      time: "01:00:00",
    },
    {
      task: "C#",
      time: "05:30:12",
    },
  ]);

  return (
    <aside className={style.listaTarefas}>
      <h2
        onClick={() => {
          console.log("CLICKED");
          setTasks([...tasks, { task: "Study state", time: "05:00:00" }]);
        }}
      >
        Daily studies
      </h2>
      <ul className="">
        {tasks.map((t, i) => (
          <Item key="i" {...t} />
        ))}
      </ul>
    </aside>
  );
}
