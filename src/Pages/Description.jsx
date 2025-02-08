import { useEffect, useState } from "react"
import { data, useParams } from "react-router-dom"


const Description = () => {
 
  const { id } = useParams()
  const [movie, setMovie] = useState(null)
  useEffect(() => {
    fetch("/public/movies.json")
      .then((res) => (res.json()))
      .then((movies) => {
        const foundMovie = movies.find((m) => m.id.toString() === id); // Ensure ID type matches (e.g. string)
        setMovie(foundMovie || null);
    })
  }, [id])
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
      </div>
    </div>
  )
}

export default Description
