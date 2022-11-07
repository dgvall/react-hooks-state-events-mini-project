import React from "react";

function Task({category, text, onDeleteTask}) {

  // handle delete bring down from app

  function deleteTask () {
    onDeleteTask(text)
  }

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button onClick = {deleteTask} className="delete">X</button>
    </div>
  );
}

export default Task;
