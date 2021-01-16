import './ListForm.css'
import { useState } from 'react'

function ListForm({registerNewList}) {

  const [newListTitle, setnewListTitle] = useState('')

  const _submitList = (e, newListTitle) => {
    e.preventDefault()

    registerNewList(newListTitle)

    setnewListTitle( newListTitle = '')
  }

  return(
    <form className='listForm' onSubmit={(e) => _submitList(e, newListTitle)}>
      <input 
        value={newListTitle}
        onChange={(e) => setnewListTitle(e.target.value)}  
        name="NewList"
        type="text"
        placeholder="Titre de la liste"
      />
      <button>Ajouter une liste</button>
    </form>
  )
}

export default ListForm