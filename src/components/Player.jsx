import { useState } from "react"

export default function Player({ name , symbol, }) {
    const [isEditing, setIsEditing] = useState(false)
    const handleEditClick = () => {
      setIsEditing((editing) => !editing) // easy way to toggle a boolean

    }

    let playerName = <span className="player-name" >{name}</span>

    if (isEditing) {
      playerName = <input type="text" required value={name}/>
    }

  return (
    <li>
      <span className='player'>
        {playerName}
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