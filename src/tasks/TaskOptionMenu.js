import styled from 'styled-components'

const Container = styled.div`
  background-color: rgb(255, 255, 255);
  display: flex;
  flex-direction: column;
  position: absolute;
  right: -70px;
  z-index: 999;
  visibility: ${props => (props.taskId === props.menuToOpen ? 'visible' : 'hidden')};
`;

const Button = styled.button`
  background-color: #fff;
  padding: 5px;
  border: 0;
  &:hover{
    background-color: rgba(190, 190, 190, 0.438);
  }
`;

function TaskOptionMenu({taskId, columnId, menuToOpen, onTaskValidated, deleteElement}) {  

  return(
    <Container taskId={taskId} menuToOpen={menuToOpen}>
      <Button onClick={() => onTaskValidated(taskId)}>Valider</Button>
      <Button onClick={() => deleteElement('task', columnId, taskId)}>Supprimer</Button>
    </Container>
  )
}

export default TaskOptionMenu