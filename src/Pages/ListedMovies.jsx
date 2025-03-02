// import MovieCard from "../Components/MovieCard"

const ListedMovies = ({ watchMovies, wishList }) => {
  return (
    <div>
      <div>
        <p className="text-center  italic text-4xl font-bold my-10">Watched Movies</p>

        {watchMovies.map((movie) => (
          <div
            key={movie.id}
            className="flex justify-around border-2 p-4 max-w-7xl mx-auto"
          >
            <div>
              <img src={movie.poster} alt="" className="w-32 " />
            </div>
            <div className="w-2/3">
              <p className="text-xl font-bold">Name: {movie.movieName}</p>
              <p className="font-bold italic">By : {movie.director}</p>
              <div>
                <p>
                  {movie.tags.map((tag, index) => (
                    <span key={index}>{tag} </span>
                  ))}
                </p>
                <p>{movie.yearOfRelease}</p>
              </div>
              <hr />
              <div>
                <p>rating : {movie.rating}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div>
      <p className="text-center  italic text-4xl font-bold my-10">Wish Lists</p>
        {wishList.map((movie) => (
          <div
            key={movie.id}
            className="flex justify-around border-2 p-4 max-w-7xl mx-auto"
          >
            <div>
              <img src={movie.poster} alt="" className="w-32 " />
            </div>
            <div className="w-2/3">
              <p className="text-xl font-bold">Name:{movie.movieName}</p>
              <p className="font-bold italic">By:{movie.director}</p>
              <div>
                <p>
                  {movie.tags.map((tag, index) => (
                    <span key={index}>{tag} </span>
                  ))}
                </p>
                <p>{movie.yearOfRelease}</p>
              </div>
              <hr />
              <div>
                <p>rating : {movie.rating}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListedMovies;
