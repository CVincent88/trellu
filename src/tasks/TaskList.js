import './TaskList.css'
import { useState } from 'react'
import Task from './Task'
import TaskForm from './TaskForm'

function TaskContainer({title, updateList}) {

  const initialTasks = []
  const initialCount = 0

  const [tasks, setTasks] = useState(initialTasks)
  const [counter, setCounter] = useState(initialCount)
  // const [isMenuDisplayed, setIsMenuDisplayed] = useState(false)
  // const [optionMenuClassName, setOptionMenuClassName] = useState([''])

  // const displayMenu = () => {
  //   if(isMenuDisplayed === true){
  //     setIsMenuDisplayed(prevState => prevState = !prevState)
  //     setOptionMenuClassName(prevClassNames => [...prevClassNames], 'optionContainerVisible')
  //     console.log(isMenuDisplayed)
  //   }
  //   else{
  //     setIsMenuDisplayed(prevState => prevState = !prevState)
  //     setOptionMenuClassName(prevState => prevState = '' )
  //     console.log(isMenuDisplayed)
  //   }
  // }

  const _registerNewTask = (newTaskText, e) => {
    setCounter(prevState => prevState + 1)

    const newTask = {
      id: `task-${counter}`,
      content: newTaskText
    }

    setTasks(previousTasks => [...previousTasks, newTask])

    updateList(newTask.id)
  }

  return(
    <div className="taskListContainer">
      <h2>{title}</h2>
      <TaskForm registerNewTask={_registerNewTask}/>
      {tasks.map((task, index) => (
        <Task key={index} taskText={task.content}/>
      ))}
    </div>
  )
}

export default TaskContainer