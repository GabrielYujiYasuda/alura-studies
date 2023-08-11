import React from "react";
import style from "./List.module.scss";

function List() {
  const tasks = [
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
  ];

  return (
    <aside className={style.listaTarefas}>
      <h2></h2>
      <ul className="">
        {tasks.map((t, i) => (
          <li key={i} className={style.item}>
            <h3>{t.task}</h3>
            <span>{t.time}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default List;
