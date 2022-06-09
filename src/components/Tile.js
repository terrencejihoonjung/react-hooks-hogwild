import React,{useState} from 'react'
import hogs from '../porkers_data'
import TileDetails from './TileDetails'



function Tile({name, image, specialty, greased, medal, weight}) {
    const[isClicked, setIsClicked] = useState(false)
    function handleClick(){
        setIsClicked(!isClicked)
    };
  return (
    <li onClick={handleClick} className='ui eight wide column'>
        <h3>{name}</h3>
        <img className='minPigTile' src={image} alt={name}></img>
        {isClicked ? < TileDetails 
        specialty ={specialty}
        greased = {greased}
        medal = {medal} 
        weight = {weight}/> : null}
    </li>
  )
}

export default Tile