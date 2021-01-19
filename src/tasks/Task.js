import { useState } from 'react'
import { Draggable } from 'react-beautiful-dnd'
import TaskOptionMenu from './TaskOptionMenu'
import optionIcon from '../images/ellipsis-v-solid.svg'
import dragIcon from '../images/grip-lines-solid.svg'
import styled from 'styled-components'


const Container = styled.div`
  background-color: 
    ${props => (
      props.validated 
        ? '#aaaaaa'
        : props.isDragging 
          ? 'lightgreen' 
          : '#ffffff'
       
    )};
  border: 1px solid rgba(0, 0, 0, 0.15);
  width: 100%;
  margin-bottom: 10px;
  padding: 10px 0;
  border-radius: 10px 10px;
  text-align: justify;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

const OptionIcon = styled.img`
  padding: 4px;
  border-radius: 5px 5px;
  cursor: pointer;
  &:hover{
    background-color: rgba(170, 170, 170, 0.562);
  }
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  text-decoration: ${props => (props.validated ? 'line-through' : 'none')};
  margin: 0 10px
`;

const DragHandle = styled.img`
  margin-right: 8px
`;

function Task({index, task, deleteElement, columnId, toggleMenu, menuToOpen}) {

  const [isTaskValidated, setIsTaskValidated] = useState(false)

  const validateTask = (taskId) => {
    setIsTaskValidated(prevState => prevState = !prevState)
    toggleMenu(taskId)
  }

  return(
    <Draggable
      draggableId={task.id}
      index={index}
    >
      {(provided, snapshot) => (
        <Container 
          {...provided.draggableProps}
          ref={provided.innerRef}
          isDragging={snapshot.isDragging}
          aria-roledescription="Press space bar to lift the task"
          validated={isTaskValidated}
        > 
          <Content validated={isTaskValidated}>
            <DragHandle {...provided.dragHandleProps} alt="Drag handle" src={dragIcon}/>
            {task.content}
          </Content>
          <OptionIcon onClick={() => toggleMenu(task.id)} alt="Logo menu" src={optionIcon} />
          <TaskOptionMenu 
            onTaskValidated={validateTask}
            columnId={columnId} 
            taskId={task.id}
            menuToOpen={menuToOpen} 
            deleteElement={deleteElement}
          />
        </Container>
      )}
    </Draggable>
  )
}

export default Task