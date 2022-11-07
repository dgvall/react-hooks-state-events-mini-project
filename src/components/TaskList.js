import React from "react";
import Task from "./Task"

function TaskList({cat, tasks, onDeleteTask}) {

  const tasksDisplayed = tasks.map((task) => {
    return(
    <Task
    key = {task.text}
    category = {task.category}
    text = {task.text}
    onDeleteTask = {onDeleteTask}
    />
    )
  })

  return (
    <div className="tasks">
      {tasksDisplayed}
    </div>
  );
}

export default TaskList;
