import './Form.css'
import { useState } from 'react'

function Form({registerNewTask}) {

  const [newTaskText, setNewTaskText] = useState('')

  const _submitTask = (e, newTaskText) => {
    e.preventDefault()

    registerNewTask(newTaskText)

    setNewTaskText( newTaskText = '')
  }

  return(
    <form className='form' onSubmit={(e) => _submitTask(e, newTaskText)}>
      <input 
        value={newTaskText}
        onChange={(e) => setNewTaskText(e.target.value)}  
        name="New task"
        type="text"
      />
      <button>Add</button>
    </form>
  )
}

export default Form