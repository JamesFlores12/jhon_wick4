import React from 'react'
import './SeccionMovie.css'
import { MovieCard } from './MovieCard'
const Seccion = ({poster, title}) => {
  
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
          <MovieCard image={"public/static/image/9.jpg"}/>
          <MovieCard image={"public/static/image/10.jpg"}/>
          <MovieCard image={"public/static/image/11.jpg"}/>
          <MovieCard image={"public/static/image/12.jpg"}/>

        

        {
          // movies.map((movie) => {
          //   <img src={movie.url} alt="" />
          // })
        }
        
      </div>
    </div>
  )
}

export default Seccion
