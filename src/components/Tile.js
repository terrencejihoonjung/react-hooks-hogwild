import React from 'react'

function Tile({name,image}) {
  return (
    <li className='ui eight wide column'>
        <h3>{name}</h3>
        <img className='minPigTile' src={image} alt={name}></img>
    </li>
  )
}

export default Tile