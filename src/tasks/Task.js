import './Task.css'

function Task({taskText}) {
  return(
    <div className="singleTask">
      <p>{taskText}</p>
    </div>
  )
}

export default Task