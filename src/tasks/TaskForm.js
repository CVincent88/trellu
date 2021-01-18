import './TaskForm.css'
import { useState } from 'react'

function TaskForm({registerNewTask}) {

  const [newTaskText, setNewTaskText] = useState('')

  const _submitTask = (e, newTaskText) => {
    e.preventDefault()

    if(newTaskText !== ''){
      registerNewTask(newTaskText)

      setNewTaskText( newTaskText = '')
    }
  }

  return(
    <form className='form' onSubmit={(e) => _submitTask(e, newTaskText)}>
      <textarea 
        value={newTaskText}
        onChange={(e) => setNewTaskText(e.target.value)}  
        name="New task"
        type="text"
        rows={2}
      />
      <button className="validateButton">Ajouter</button>
    </form>
  )
}

export default TaskForm