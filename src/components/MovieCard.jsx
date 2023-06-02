import React from 'react'
import './MovieCard.css'

export const MovieCard = (props) => {
  const actor = props.actor
  const image = props.image
  return (
    <div className='movie-container'>
        {/* <img src={`https://image.tmdb.org/t/p/w500/${ actor.name }`}  /> */}
        <img src={image} alt="Pelicula" />
    </div>
  )
}

