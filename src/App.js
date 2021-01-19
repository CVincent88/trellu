import './App.css';
import React, { useState } from 'react'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
// import initialData from './initial-data'
import Header from './Header'
import Column from './Column'
import ListCreator from './ListCreator'

import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  align-items: flex-start;
`;

class InnerList extends React.PureComponent {
  render() {
      const { 
        column, 
        taskMap, 
        index, 
        registerNewTask, 
        deleteElement, 
        toggleMenu, 
        menuToOpen 
      } = this.props
      const tasks = column.tasksIds.map(taskId => taskMap[taskId])
      return (
        <Column 
          column={column} 
          tasks={tasks} 
          index={index} 
          registerNewTask={registerNewTask} 
          deleteElement={deleteElement}
          toggleMenu={toggleMenu}
          menuToOpen={menuToOpen}
        />
      )
  }
}

function App() {

  const initialData = {
    tasks: {

    },
    columns: {
      
    },
    columnOrder: []
  };
  const [data, setData] = useState(initialData);
  const [menuToOpen, setMenuToOpen] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false); 
  

  const toggleMenu = (menuId) => {
    if(isMenuOpen === false){
      setMenuToOpen(menuId)
      setIsMenuOpen(prevState => prevState = !prevState)
    }else{
      setMenuToOpen('')
      setIsMenuOpen(prevState => prevState = !prevState)
    }    
  }

  const registerNewList = (title) => {
    const {columns, columnOrder} = data

    const newColumn = {
      id: `column-${columnOrder.length + 1}`,
      title: title,
      tasksIds: []
    }

    const newColumnOrder = [
      ...columnOrder,
      newColumn.id
    ]

    const newState = {
      ...data,
      columns: {
        ...columns,
        [newColumn.id]: {
          ...newColumn
        }
      },
      columnOrder: newColumnOrder
    }

    setData(prevState => {
      return {...prevState, ...newState}
    })

  }

  const registerNewTask = (newTaskContent, originColumnId) => {

    const {tasks, columns} = data

    const newTask = {
      id: `task-${Object.keys(tasks).length + 1}`,
      content: newTaskContent
    }

    const newTasksIds = [
      ...columns[originColumnId].tasksIds,
      newTask.id
    ]

    const newState = {
      ...data,
      tasks: {
        ...tasks,
        [newTask.id]: {
          id: newTask.id,
          content: newTask.content
        }
      },
      columns: {
        ...columns,
        [originColumnId]: {
          ...columns[originColumnId],
          tasksIds: newTasksIds
        }
      }
    }

    setData(prevState => {
      return {...prevState, ...newState}
    })

  }

  const deleteElement = (type, columnId, taskId) => {
    if(type === 'task'){
      const newTasksList = data.tasks
      delete newTasksList[taskId]

      const newColumnsContent = data.columns
      const index = newColumnsContent[columnId].tasksIds.indexOf(taskId)
      newColumnsContent[columnId].tasksIds.splice(index, 1)

      const newState = {
        ...data,
        tasks: {
          ...newTasksList
        },
        columns: {
          ...newColumnsContent
        }
      }

      setData(prevState => {
        return {...prevState, ...newState}
      })

    }else if(type === 'column'){
      const newColumnList = data.columns;
      delete newColumnList[columnId]

      const newColumnOrder = data.columnOrder
      delete newColumnOrder[columnId]

      const newState = {
        ...data,
        columns: {
          newColumnList
        },
        newColumnOrder
      }

      setData(prevState => {
        return {...prevState, ...newState}
      })
    }
  }

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
        onDragStart={(start, provided) => onDragStart(start, provided)}
        onDragUpdate={(update, provided) => onDragUpdate(update, provided)}
        onDragEnd={(result, provided) => onDragEnd(result, provided)}
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
                    registerNewTask={registerNewTask}
                    deleteElement={deleteElement}
                    toggleMenu={toggleMenu}
                    menuToOpen={menuToOpen}
                  />
                )
              })}
              {provided.placeholder}
              <ListCreator registerNewList={registerNewList} />
            </Container>
          )}
          
        </Droppable>
        
      </DragDropContext>
      
    </div>
  )
}

export default App