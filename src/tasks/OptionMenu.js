import './OptionMenu.css'

function OptionMenu({containerStyle}) {

  const handleOnClickValidation = () => {
    
  }

  const handleOnClickDelete = () => {

  }

  return(
    <div className={containerStyle + ' optionContainer'}>
      <button className="optionMenuButton" onClick={() => handleOnClickValidation}>Valider</button>
      <button className="optionMenuButton" onClick={() => handleOnClickDelete}>Supprimer</button>
    </div>
  )
}

export default OptionMenu