import React from 'react'
import Serch from '../components/Serch'
import PosterCard from '../components/SeccionMovie'
import SeccionMovie from '../components/SeccionMovie'
import { NavBar } from '../components/NavBar'
import { useEffect, useState } from "react";
import Seccionmov from '../components/Seccionmov'

const Home = () => {
  /*const[CommingSoonMovie,setCommimgSoonMovie]=useState([]);
  axios=await.CommingSoonMovie.get('https://api.themoviedb.org/3/movie/now_playing?api_key=')*/

  // const [dogs, setDogs] = useState("");
  // // console.log(dogs);
  // useEffect(() => {
  //   fetch("https://api.thecatapi.com/v1/images/search")
  //     .then((response) => response.json())
  //     .then((data) => setDogs(data));
  // }, []);

  /*const [posters, setPosters] = useState([])
  console.log(posters)
  useEffect(() => {
    fetch("")
    .then((response) => response.json())
    .then((data) => setPosters(data));
  }, [])*/



  return (
    <div>
      <Serch/>

      {/* <SeccionMovie poster = {posters}/> */}
      <SeccionMovie title={"New Movies"}/>
      <Seccionmov title={"Comming Soon"}/>
     
      <SeccionMovie title={"Top Movie"}/>
      <SeccionMovie title={"Accion Movie"}/>
     


      <NavBar/>
    </div>
  )
}

export default Home
