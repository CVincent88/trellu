import './TaskContainer.css'
import { useState } from 'react'
import Task from './Task'
import Form from './Form'


function TaskContainer() {

  const initialTasks = []
  const initialCount = 0

  const [tasks, setTasks] = useState(initialTasks)
  const [counter, setCounter] = useState(initialCount)

  const _registerNewTask = (newTaskText, e) => {
    setCounter(prevState => prevState + 1)

    const newTask = {
      id: counter,
      text: newTaskText
    }

    setTasks(previousTasks => [...previousTasks, newTask])

  }
  return(
    <div className="taskContainer">
      <Form registerNewTask={_registerNewTask}/>
      {tasks.map((task) => (
        <Task key={task.id} taskText={task.text} />
      ))}
    </div>
  )
}

export default TaskContainer