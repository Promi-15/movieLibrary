import { useEffect } from "react";
import { useState } from "react";
import MovieCard from "./MovieCard";

const FetchMovies = () => {
  const [movies, setMovies] = useState([]);
  const [showAll, setShowAll] = useState(false);
  useEffect(() => {
    fetch("movies.json")
      .then((res) => res.json())
      .then((data) => setMovies(data));
  }, []);

  return (
    <div className="bg-white min-h-screen rounded-2xl  ">
      <p className="text-center text-4xl lg:text-7xl mt-5 font-bold italic">
        Mo<span className="text-gray-600">vie</span> Lists
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9 mt-10 mx-5 lg:mx-10">
        {movies.slice(0, showAll ? movies.length : 6).map((movie) => (
          <MovieCard key={movie.id} movie={movie} setMovies={setMovies} />
        ))}
      </div>
      {!showAll && movies.length > 6 && (
        <div className="text-center mt-6">
          <button
            onClick={() => setShowAll(true)}
            className="bg-gray-900 text-white px-6 py-2 rounded-lg hover:bg-gray-700"
          >
            Show More
          </button>
        </div>
      )}
      {showAll && movies.length > 6 && (
        <div className="text-center mt-6">
          <button
            onClick={() => setShowAll(false)}
            className="bg-gray-900 text-white px-6 py-2 rounded-lg hover:bg-gray-700"
          >
            Show less
          </button>
        </div>
      )}
    </div>
  );
};

export default FetchMovies;
