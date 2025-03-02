import { useEffect, useState } from "react"
import {  Link, useParams } from "react-router-dom"


const Description = ({addToWatch,addToWishList}) => {
 
  const { id } = useParams()
  const [movie, setMovie] = useState(null)
  useEffect(() => {
    fetch("/public/movies.json")
      .then((res) => (res.json()))
      .then((movies) => {
        const foundMovie = movies.find((m) => m.id.toString() === id); // Ensure ID type matches (e.g. string)
        setMovie(foundMovie || null);
      })
  }, [id]);

  

  if (!movie) {
    return <h2>Loading...</h2>; // Optionally show loading until movie is fetched
  }
  const videoUrl = movie.vdo.replace("youtu.be", "www.youtube.com/embed")+"?autoplay=1&mute=1";
  return (
    <div className="text-center py-5 mx-5">
      <h1 className="text-3xl font-bold mb-3 pb-5">{movie.movieName}</h1>
      <div className="max-w-7xl mx-auto rounded-2xl">
      <iframe
          width="100%"
          height="400"
          src={videoUrl}
          title="Movie Trailer"
          frameBorder="0"
          allow="autoplay"
          allowFullScreen
      
        ></iframe>
      </div>
      <div className="border-2 border-gray-600 max-w-7xl mx-auto rounded-2xl p-10 my-10 text-center space-y-3">
        <div className="flex justify-around items-center"> 
        <img className="w-24 text-center rounded-full" src={movie.directorimg} alt="" />
       
        </div>
        <p className="text-2xl font-bold">Director : <span className="font-medium text-xl">{movie.director}</span> </p>
        <p>Production : { movie.production}</p>
       
        <p>Review : {movie.review}</p>
        <p>{movie.tags}</p>
        <p>Year of release : {movie.yearOfRelease}</p>
        <div className="flex gap-10 justify-between text-white font-bold">
          <button className="w-full bg-gradient-to-bl from bg-red-950 to black p-2 rounded-2xl" onClick={() => addToWishList(movie)}>Wish List </button>
          <button className="w-full bg-gradient-to-bl from bg-red-950 to black p-2 rounded-2xl" onClick={() => addToWatch(movie)}>Watched </button>
        </div>
       
        <Link to="/">
        <button className="w-full text-white bg-gradient-to-bl from bg-red-950 to black p-2 rounded-2xl ">Back</button>
        </Link>
      </div>
    </div>
  )
}

export default Description
