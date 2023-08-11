import React from "react";
import style from "./List.module.scss";
import Item from "./Item";

export default function List() {
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
      <ul className="">
        {tasks.map((t, i) => (
          <Item key="i" {...t} />
        ))}
      </ul>
    </aside>
  );
}
