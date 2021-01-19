import { useState } from 'react'
import styled from 'styled-components'

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Input = styled.input`
  width: 100%;
  border-radius: 10px 10px;
  padding: 10px;
  border: 0;
  outline: none;
  resize: none;
  font-family: 'Arial';
  margin: 5px 0;
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

function ListForm({registerNewList}) {

  const [newListTitle, setnewListTitle] = useState('')
  const [buttonPressed, setButtonPressed] = useState(false)

  const _submitNewList = (e, newListTitle) => {
    e.preventDefault()

    if(newListTitle !== ''){
      registerNewList(newListTitle)
      setnewListTitle( newListTitle = '')
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
    <Form onSubmit={(e) => _submitNewList(e, newListTitle)}>
      <Input 
        value={newListTitle}
        onChange={(e) => setnewListTitle(e.target.value)}  
        name="NewList"
        type="text"
        placeholder="Titre de la liste"
      />
      <Button 
        className="validateButton"
        mouseDown={buttonPressed}
        onMouseDown={() => toggleButtonLook()}
        onMouseUp={() => toggleButtonLook()}
      >
        Ajouter une liste
      </Button>
    </Form>
  )
}

export default ListForm