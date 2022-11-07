import React, {useState} from "react";

function NewTaskForm({categories, onAddTask}) {
  const [selectedText, setSelectedText] = useState("")
  const [selectedCat, setSelectedCat] = useState("Code")




  function onSubmit(e) {
    e.preventDefault()

    let newTask = {
      text: selectedText,
      category: selectedCat,
    }
    onAddTask(newTask)

    setSelectedText("")
    setSelectedCat("Code")
  }

  const catSelections = categories
  .filter((cat) => cat !== "All")

  return (
    <form onSubmit = {(e) => onSubmit(e)} className="new-task-form">
      <label>
        Details
        <input onChange = {(e) => setSelectedText(e.target.value)}
        type="text"
        name="text"
        value = {selectedText}
        />
      </label>
      <label>
        Category
        <select 
        onChange = {(e) => setSelectedCat(e.target.value)}
        name="category"
        value = {selectedCat}
        >
          {catSelections.map((cat) => {
            return (
              <option
              key = {cat}
              > {cat}
              </option>
            )
          }
          )}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
