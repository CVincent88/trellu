import React from 'react'
import { Droppable, Draggable } from 'react-beautiful-dnd'
import Task from './tasks/Task'
import TaskForm from './tasks/TaskForm'
import styled from 'styled-components'
import optionIcon from './images/ellipsis-v-solid.svg'
import ColumnOptionMenu from './ColumnOptionMenu' 

const Header = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  justify-content: space-between;
  position: relative;
  width: 100%
`;

const Options = styled.div`
  display: flex;
  align-items: center;
`;

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
  min-width: 20vw;
`;

const OptionIcon = styled.img`
  padding: 4px;
  border-radius: 5px 5px;
  cursor: pointer;
  &:hover{
    background-color: rgba(170, 170, 170, 0.562);
  }
`;

const TaskList = styled.div`
  background-color: ${props => (props.isDraggingOver ? '#00000026' : 'transparent')};
  transition: background-color .3s;
  width: 100%;
  border-radius: 10px 10px;
  min-height: 50px;
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
    const { 
      tasks, 
      deleteElement, 
      columnId, 
      validateTask, 
      menuToOpen,
      toggleMenu
    } = this.props

    return(
      tasks.map((task, index) =>
        <Task 
          key={task.id} 
          task={task} 
          index={index} 
          deleteElement={deleteElement} 
          columnId={columnId}
          validateTask={validateTask}
          menuToOpen={menuToOpen}
          toggleMenu={toggleMenu}
        />
      )
    )
  }
}

function Column({column, tasks, index, registerNewTask, deleteElement, toggleMenu, validateTask, menuToOpen}) {
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
          <Header {...provided.dragHandleProps}>
            <Title>{column.title}</Title>
            <Options>
              <OptionIcon onClick={() => toggleMenu(column.id)} alt="Logo menu" src={optionIcon} />
              <ColumnOptionMenu 
                columnId={column.id}
                menuToOpen={menuToOpen} 
                deleteElement={deleteElement}
              />
            </Options>
          </Header>
          <TaskForm registerNewTask={registerNewTask} columnId={column.id}/>
          <Droppable droppableId={column.id} type="task">
            {(provided, snapshot) => (
              <TaskList 
                ref={provided.innerRef}
                {...provided.droppableProps}
                isDraggingOver={snapshot.isDraggingOver}
              >
                <InnerList 
                  tasks={tasks} 
                  deleteElement={deleteElement} 
                  columnId={column.id}
                  validateTask={validateTask}
                  menuToOpen={menuToOpen}
                  toggleMenu={toggleMenu}
                />
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