const MovieCard = ({ movie }) => {
  const {
    movieName,
    poster,
    director,
    directorimg,
    review,
    duration,
    rating,
    genre,
    tags,
    production,
    yearOfRelease,
  } = movie;
  return (
    //linear-gradient(to left, rgba(35, 13, 13, 0.8), transparent), 
  //   <div
  //   className="h-[450px] rounded-2xl"
  //   style={{
  //     backgroundImage: `url(${poster})`,
  //     backgroundSize: "contain",
  //     backgroundPosition: "center",
  //     backgroundRepeat: "no-repeat",
  //   }}
  //     >
    
  // </div>
    <div className="flex  relative bg-black h-[260px] rounded-2xl hover:-translate-x-2 hover:translate-y-2.5  hover:shadow-[10px_10px_20px_rgba(0,0,0,2)]">
      <img src={poster} alt="" className="object-cover w-3/4 absolute inset-0 bg-gradient-to-r h-full from-black/80 to-transparent left-0 rounded-2xl opacity-55" />
      <div className="w-1/2  absolute h-full right-0 bg-gradient-to-l from-black via-black/80 to-transparent z-20 rounded-2xl ">
        <h1 className="text-2xl font-bold text-white  mt-10">{movieName}</h1>
        <div className="flex text-white text-sm justify-between  items-center font-bold mr-3 mt-11 ">
          <p>{duration}</p>
          <p>{yearOfRelease}</p>
          <p>{genre }</p>
        </div>
        <div className="flex gap-5 items-center  absolute bottom-2 p-2">
          <p className=" px-7 py-2 w-full font-extralight text-sm   text-white  bg-red-950 rounded-2xl ">Watch Trailer</p>
          <div className="flex items-center gap-2">
            <p className="text-white font-extralight text-sm">{ rating}</p>
          <progress className="progress w-5 text-white" value={rating} max="10"></progress>
          </div>
      </div>
      
      </div>
  </div>
  
  );
};

export default MovieCard;
