import './ListCreator.css'
import ListForm from './ListForm'

function ListCreator({registerNewList}) {
  return(
    <div className="listCreator">
      <ListForm registerNewList={registerNewList}/>
    </div>
  )
}

export default ListCreator