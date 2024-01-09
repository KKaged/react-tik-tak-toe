import { useState } from "react"

export default function Player({ name, symbol, }) {
    const [isEditing, setIsEditing] = useState(false)
    const handleEdit = () => {
      setIsEditing(true)
      if (isEditing) {
        setIsEditing(false)
      }
    }
  return (
    <li>
      <span className='player'>
        {isEditing ? (
        <>
        <input type="text" />
        <span className='player-symbol'>{symbol}</span>
        </>
        ) : (
        <>
        <span className="player-name">{name}</span>
        <span className='player-symbol'>{symbol}</span>
        </>
        )}
      </span>
      <button onClick={handleEdit}>Edit</button>
    </li>
  )
}   