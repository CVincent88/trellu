import styled from 'styled-components'

const Container = styled.div`
  background-color: rgb(255, 255, 255);
  display: flex;
  flex-direction: column;
  position: absolute;
  right: -70px;
  z-index: 999;
  visibility: ${props => (props.columnId === props.menuToOpen ? 'visible' : 'hidden')};
`;

const Button = styled.button`
  background-color: #fff;
  padding: 5px;
  border: 0;
  &:hover{
    background-color: rgba(190, 190, 190, 0.438);
  }
`;

function ColumnOptionMenu({columnId, menuToOpen, deleteElement}) {  

  return(
    <Container columnId={columnId} menuToOpen={menuToOpen}>
      <Button onClick={() => deleteElement('column', columnId, '')} >Supprimer</Button>
    </Container>
  )
}

export default ColumnOptionMenu