// import './App.css';
// import Header from './Header'
// import ListCreator from './ListCreator'
// import TaskList from './tasks/TaskList'

// import { useState } from 'react'

// function App() {

//   const [ToDoLists, setToDoLists] = useState([])
//   const [counter, setCounter] = useState(0)
//   const [tasksId, setTasksId] = useState([])

//   const createNewList = (title) => {
//     setCounter(prevState => prevState + 1)

//     const newList = {
//       id: `list-${counter}`,
//       title: title
//     }

//     setToDoLists(previousLists => [...previousLists, newList])
//   }

//   const updateList = (taskId) => {
//     setTasksId(prevList => [...prevList, taskId])
//     console.log(ToDoLists)
//   }

//   return (
//     <div className="App">
//       <Header />
//       <div className="body">
//         {ToDoLists.map(list => (
//           <TaskList key={list.id} title={list.title} updateList={updateList}/>
//         ))}
//         <ListCreator registerNewList={createNewList} />
//       </div>
//     </div>
//   );
// }

// export default App;


import './App.css';
import React, { useState } from 'react'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import initialData from './initial-data'
import Header from './Header'
import Column from './Column'

import styled from 'styled-components'

const Container = styled.div`
  display: flex;
`;

class InnerList extends React.PureComponent {

  render() {
      const { column, taskMap, index } = this.props
      const tasks = column.tasksIds.map(taskId => taskMap[taskId])
      return <Column column={column} tasks={tasks} index={index} />
  }
}

function App() {

  const [data, setData] = useState(initialData)

  const onDragStart = (start, provided) => {
    provided.announce(`You have lifted the task in position ${start.source.index + 1}`)
  }

  const onDragUpdate = (update, provided) => {
    const message = update.destination
    ? `You have moved the task to position ${update.destination.index + 1}`
    : 'You are currently not over a droppable area';

    provided.announce(message)
  }

  const onDragEnd = (result, provided) => {
    const { destination, source, draggableId, type } = result
    const message = result.destination
    ? `You have moved the task from position
      ${result.source.index + 1} to ${result.destination.index + 1}`
    : `The task has been return to its position of ${result.source.index + 1}`;

    provided.announce(message)

    if(!destination) {
      return
    }

    // If the user dropped the item back at the same spot
    if(destination.droppableId === source.droppableId &&
       destination.index === source.index
    ){
      return
    }

    // User changes column order
    if(type === 'column'){
      const newColumnOrder = Array.from(data.columnOrder)
      newColumnOrder.splice(source.index, 1)
      newColumnOrder.splice(destination.index, 0, draggableId)

      const newState = {
        ...data,
        columnOrder: newColumnOrder
      }

      setData(prevState => {
        return {...prevState, ...newState}
      })
      return
    }

    // User changes task order
    const start = data.columns[source.droppableId];
    const finish = data.columns[destination.droppableId];
    const newTasksIds = Array.from(start.tasksIds);

    // Moving a task within one list
    if(start === finish) {
      newTasksIds.splice(source.index, 1);
      newTasksIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...start,
        tasksIds: newTasksIds
      }

      const newState = {
        ...data,
        columns: {
          ...data.columns,
          [newColumn.id]: newColumn
        }
      }

      setData(prevState => {
        return {...prevState, ...newState}
      })
      return
    }else{
      // Moving a task in another list
      const startTasksIds = Array.from(start.tasksIds)
      startTasksIds.splice(source.index, 1)
      const newStart = {
        ...start,
        tasksIds: startTasksIds
      };

      const finishTasksIds = Array.from(finish.tasksIds)
      finishTasksIds.splice(destination.index, 0, draggableId)
      const newFinish = {
        ...finish,
        tasksIds: finishTasksIds
      };

      const newState = {
        ...data,
        columns: {
          ...data.columns,
          [newStart.id]: newStart,
          [newFinish.id]: newFinish
        }
      }

      setData(prevState => {
        return {...prevState, ...newState}
      })
      
      return
    }

  }

  return(
    <div className="App">
      <Header />
      <DragDropContext 
        onDragStart={(start) => onDragStart(start)}
        onDragUpdate={(update) => onDragUpdate(update)}
        onDragEnd={(result) => onDragEnd(result)}
      >
        <Droppable droppableId="all-columns" direction="horizontal" type="column">
          {(provided) => (
            <Container
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {data.columnOrder.map((columnId, index) => {
                const column = data.columns[columnId]

                return (
                  <InnerList 
                    key={column.id} 
                    column={column} 
                    taskMap={data.tasks} 
                    index={index} 
                  />
                )
              })}
              {provided.placeholder}
            </Container>
          )}
        </Droppable>
      </DragDropContext>

    </div>
  )
}

export default App