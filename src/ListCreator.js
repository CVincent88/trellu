import ListForm from './ListForm'
import styled from 'styled-components'

const Container = styled.div`
  background-color: rgba(255, 255, 255, 0.623);
  margin: 10px;
  padding: 10px;
  border-radius: 10px 10px;
  min-width: 50vw;
  @media (min-width: 550px){
    min-width: 40vw
  };
  @media (min-width: 768px){
    min-width: 30vw
  };
  @media (min-width: 900px){
    min-width: 20vw
  }
`;

function ListCreator({registerNewList}) {
  return(
    <Container>
      <ListForm registerNewList={registerNewList}/>
    </Container>
  )
}

export default ListCreator