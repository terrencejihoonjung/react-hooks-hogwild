import React from 'react'
import Tile from './Tile'

function TileList({hogs}) {
    const hogList = hogs.map (hog =>{
        return <Tile
        name={hog.name} 
        image={hog.image} 
        specialty={hog.specialty}
        greased={hog.greased}
        weight={hog.weight}
        medal ={ hog['highest medal achieved']}
        ></Tile>
    })
  return (
    <ul className='ui grid container'>
        {hogList}
    </ul>
  )
}

export default TileList