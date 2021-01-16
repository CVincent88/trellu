import './TaskList.css'
import { useState } from 'react'
import Task from './Task'
import TaskForm from './TaskForm'


function TaskContainer({title}) {

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
    <div className="taskList">
      <h2>{title}</h2>
      <TaskForm registerNewTask={_registerNewTask}/>
      {tasks.map((task) => (
        <Task key={task.id} taskText={task.text} />
      ))}
    </div>
  )
}

export default TaskContainer