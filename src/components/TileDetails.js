import React from 'react'

function TileDetails({specialty, greased, medal, weight}) {
  return (
    <>
        <p>
            specialty: {specialty}
        </p>
        <p>
            greased: {greased}
        </p>
        <p>
            medal: {medal}
        </p>
        <p>
            weight: {weight}
        </p>
    </>
  )
}

export default TileDetails