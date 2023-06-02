import React from 'react'
import './SeccionMovie.css'
import { MovieCard } from './MovieCard'
const Seccionmov = ({poster, title}) => {
  
  return (
    <div className="seccion-container">
      {/* <span>{title}</span> */}
      <span className='title'>{title}</span>
      <div className='seccion-slider'>

        {/* {
          poster.map((poster) => {
            return <MovieCard poster={poster} key={poster.id}/>
          })
        } */}

        {/* <MovieCard poster={poster} key={poster.id}/> */}
          <MovieCard image={"public/static/image/5.jpg"}/>
          <MovieCard image={"public/static/image/6.jpg"}/>
          <MovieCard image={"public/static/image/7.jpg"}/>
          <MovieCard image={"public/static/image/8.jpg"}/>

        

        {
          // movies.map((movie) => {
          //   <img src={movie.url} alt="" />
          // })
        }
        
      </div>
    </div>
  )
}

export default Seccionmov
