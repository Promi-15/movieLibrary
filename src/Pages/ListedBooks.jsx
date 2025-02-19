// import MovieCard from "../Components/MovieCard"

const ListedBooks = ({ watchMovies }) => {
  return (
    <div>
      <div>
        <p className="text-center">Watched Movies</p>
        {/* <ul>
        {watchMovies.length > 0 ? (
          watchMovies.map((movie, index) => (
            <li key={index} className="border p-2 rounded-lg my-2">
              {movie.movieName}
            </li>
          ))
        ) : (
          <p>No watched movies yet.</p>
        )}
      </ul> */}
       
          {
            watchMovies.map((movie) => (
              <div key={movie.id} className="flex justify-around border-2 p-4 max-w-7xl mx-auto">
                <div>
                  <img src={movie.poster} alt="" className="w-32 " />
                </div>
                <div className="w-2/3">
                  <p>{movie.movieName}</p>
                  <p>by:{movie.director}</p>
                  <div>
                  <p>{movie.tags.map((tag, index) => (
                    <span key={index}>{tag} </span>
                  ))}</p>
                    <p>{movie.yearOfRelease }</p>
                  </div>
                  <hr />
                  <div>
                    <p>rating : { movie.rating}</p>
                  </div>
                </div>
            </div>
          ))
          }
          
        
      </div>
      <div>Wishlist</div>
    </div>
  );
};

export default ListedBooks;
