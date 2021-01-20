import ListForm from './ListForm'
import styled from 'styled-components'

const Container = styled.div`
  background-color: rgba(255, 255, 255, 0.623);
  width: 17vw;
  margin: 10px;
  padding: 10px;
  border-radius: 10px 10px;
  min-width: 17vw;
`;

function ListCreator({registerNewList}) {
  return(
    <Container>
      <ListForm registerNewList={registerNewList}/>
    </Container>
  )
}

export default ListCreator