import { useState } from 'react'
import styled from 'styled-components'

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
  width: 100%
`;

const Textarea = styled.input`
  border-radius: 10px 10px;
  padding: 10px;
  border: 0;
  outline: none;
  resize: none;
  font-family: 'Arial';
  margin-bottom: 5px;
  width: 100%
`;

const Button = styled.button`
  width: 100%;
  border-radius: 10px 10px;
  border: 0;
  padding: 5px;
  background-color: rgb(0, 140, 255);
  color: #fff;
  font-size: 18px;
  font-weight: 700;
  box-shadow: ${props => props.mouseDown ? 'inset 1px 1px  3px rgba(0, 0, 0, .5)' : ''}
`;

function TaskForm({registerNewTask, columnId}) {

  const [newTaskText, setNewTaskText] = useState('')
  const [buttonPressed, setButtonPressed] = useState(false)

  const _submitTask = (e, newTaskText, columnId) => {
    e.preventDefault()

    if(newTaskText !== ''){
      registerNewTask(newTaskText, columnId)

      setNewTaskText( newTaskText = '')
    }
  }

  const toggleButtonLook = () => {
    if(buttonPressed === false){
      setButtonPressed(prevState => !prevState)
    }else{
      setButtonPressed(prevState => !prevState)
    }
  }

  return(
    <Form className='form' onSubmit={(e) => _submitTask(e, newTaskText, columnId)}>
      <Textarea 
        value={newTaskText}
        onChange={(e) => setNewTaskText(e.target.value)}  
        name="New task"
        type="text"
        rows={2}
        placeholder="Nouvelle tâche"
      />
      <Button 
        mouseDown={buttonPressed}
        onMouseDown={() => toggleButtonLook()}
        onMouseUp={() => toggleButtonLook()}
        type="submit"
      >
        Ajouter
      </Button>
    </Form>
  )
}

export default TaskForm