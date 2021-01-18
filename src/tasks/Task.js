import './Task.css'
import { Draggable } from 'react-beautiful-dnd'
// import OptionMenu from './OptionMenu'
import optionIcon from '../images/ellipsis-v-solid.svg'
import styled from 'styled-components'

// import { useState } from 'react'

const Container = styled.div`
  background-color: ${props => (props.isDragging ? 'lightgreen' : '#fff')};
  border: 1px solid rgba(0, 0, 0, 0.15);
  width: 100%;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 10px 10px;
  text-align: justify;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

function Task({index, task, columnId}) {

  // const [menuIsDisplayed, setIsMenuDisplayed] = useState(false)
  // const [optionMenuClassName, setOptionMenuClassName] = useState([''])

  // const displayMenu = () => {
  //   if(menuIsDisplayed === true){
  //     setIsMenuDisplayed(prevState => prevState = false)
  //     setOptionMenuClassName(prevClassNames => [...prevClassNames], 'optionContainerVisible')
  //     console.log(menuIsDisplayed)
  //   }
  //   else{
  //     setIsMenuDisplayed(prevState => prevState = true)
  //     setOptionMenuClassName(prevState => prevState = '' )
  //     console.log(menuIsDisplayed)
  //   } 
  // }
  
  return(
    <Draggable
      draggableId={task.id}
      index={index}
    >
      {(provided, snapshot) => (
        <Container 
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          isDragging={snapshot.isDragging}
          aria-roledescription="Press space bar to lift the task"
        > 
          <p>{task.content}</p>
          <img alt="Logo menu" className="optionIcon" src={optionIcon} />
        </Container>
      )}
    </Draggable>
  )
}

export default Task