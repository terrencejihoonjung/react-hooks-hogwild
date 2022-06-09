import React from 'react'
import Tile from './Tile'

function TileList({hogs}) {
    const hogList = hogs.map (hog =>{
        return <Tile name={hog.name} image={hog.image}></Tile>
    })
  return (
    <div className='ui grid container'>
        {hogList}
    </div>
  )
}

export default TileList