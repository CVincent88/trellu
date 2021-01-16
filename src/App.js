import './App.css';
import ListCreator from './ListCreator'
import TaskList from './tasks/TaskList'

import { useState } from 'react'

function App() {

  const [ToDoLists, setToDoLists] = useState([])
  const [counter, setCounter] = useState(0)

  const createNewList = (title) => {
    setCounter(prevState => prevState + 1)

    const newList = {
      id: counter,
      title: title
    }

    setToDoLists(previousLists => [...previousLists, newList])
  }

  return (
    <div className="App">
      {ToDoLists.map(list => (
        <TaskList key={list.id} title={list.title} />
      ))}
      <ListCreator registerNewList={createNewList} />
    </div>
  );
}

export default App;
