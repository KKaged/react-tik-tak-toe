import { useState } from "react"

export default function Player({ InitialName , symbol, isActive}) {
    const [playerName, setPlayerName] = useState(InitialName)
    const [isEditing, setIsEditing] = useState(false)
    const handleEditClick = () => {
      setIsEditing((editing) => !editing) // easy way to toggle a boolean

    }
    const handleNameChange = (event) => {
      setPlayerName(event.target.value) //target is the input element, therefor we can get/change the value of the input
    }

    let editablePlayerName = <span className="player-name" >{playerName}</span>

    if (isEditing) {
      editablePlayerName = <input type="text" required value={playerName} onChange={handleNameChange}/>
    }

  return (
    <li className={isActive ? 'active' : undefined}>
      <span className='player'>
        {editablePlayerName}
        {/* {isEditing ? (
        <>
        <input type="text" required value={name}/>
        <span className='player-symbol'>{symbol}</span>
        </>
        ) : (
        <>
        <span className="player-name" >{name}</span>
        <span className='player-symbol'>{symbol}</span>
        </>
        )} */}
      </span>
      <button onClick={handleEditClick}>{!isEditing ? 'Edit': 'Save'}</button>
    </li>
  )
}   