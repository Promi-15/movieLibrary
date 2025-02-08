import { useEffect } from "react";
import { useState } from "react"
import MovieCard from "./MovieCard";
// import Description from "../Pages/Description";

const FetchMovies = () => {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        fetch("/public/movies.json")
            .then((res) => (res.json()))
        .then(data => setMovies(data))
    },[])
    

  return (
    <div className="bg-white min-h-screen rounded-2xl ">
      <p className="text-center text-4xl lg:text-7xl mt-5 font-bold">Mo<span className="text-gray-600">vie</span> Lists</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9 mt-10 mx-5 lg:mx-10">
      
      {movies.map((movie) => <MovieCard key={movie.id} movie={ movie}  setMovies={setMovies} />)}
      {/* {movies.map((movie) => <Description key={movie.id} movie={ movie}  setMovies={setMovies} />)} */}
    </div>
    </div>
  )
}

export default FetchMovies
