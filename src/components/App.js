import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS)
  const [cat, setCat] = useState("All")

  function handleNewTask(newTask) {
    setTasks([...tasks, newTask])
  }

  function handleDeleteTask(deletedTaskText) {
    setTasks(
      tasks.filter((task) => task.text !== deletedTaskText)
    )
  }

  const displayedTasks = tasks
  .filter((task) => cat === "All" || task.category === cat)

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter cat = {cat} categories = {CATEGORIES} setCat = {setCat}/>
      <NewTaskForm categories = {CATEGORIES} onAddTask = {handleNewTask}/>
      <TaskList cat = {cat} tasks = {displayedTasks} onDeleteTask = {handleDeleteTask}/>
    </div>
  );
}

export default App;
