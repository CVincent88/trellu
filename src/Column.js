import React from 'react'
import { Droppable, Draggable } from 'react-beautiful-dnd'
import Task from './tasks/Task'
import TaskForm from './tasks/TaskForm'
import styled from 'styled-components'

const Container = styled.div`
  background-color: rgba(255, 255, 255, 0.623);
  border-radius: 10px 10px;
  margin: 10px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-height: 90vh;
  width: 20vw;
`;

const TaskList = styled.div`
  background-color: ${props => (props.isDraggingOver ? '#00000026' : 'transparent')};
  transition: background-color .3s;
  width: 100%;
  border-radius: 10px 10px;
  min-height: 10px;
`;

const Title = styled.h3`
  padding: 8px;
`;

// Class created for performance. It allows us to render a task only if it is the one dragged.
class InnerList extends React.Component {

  shouldComponentUpdate(nextProps){
    if(nextProps.tasks === this.props.tasks){
      return false
    }

    return true
  }

  render() {
    const { tasks, deleteTask, columnId } = this.props
    return(
      tasks.map((task, index) =>
        <Task key={task.id} task={task} index={index} deleteTask={deleteTask} columnId={columnId}/>
      )
    )
  }
}

function Column({column, tasks, index, registerNewTask, deleteTask}) {
  return(
    <Draggable 
      draggableId={column.id}
      index={index}
    >
      {(provided) => (
        <Container          
          {...provided.draggableProps}
          ref={provided.innerRef}
        >
          <Title {...provided.dragHandleProps} >{column.title}</Title>
          <TaskForm registerNewTask={registerNewTask} columnId={column.id}/>
          <Droppable droppableId={column.id} type="task">
            {(provided, snapshot) => (
              <TaskList 
                ref={provided.innerRef}
                {...provided.droppableProps}
                isDraggingOver={snapshot.isDraggingOver}
              >
                <InnerList tasks={tasks} deleteTask={deleteTask} columnId={column.id}/>
                {provided.placeholder}
              </TaskList>
            )}
          </Droppable>
        </Container>
      )}
    </Draggable>
  )
}

export default Column