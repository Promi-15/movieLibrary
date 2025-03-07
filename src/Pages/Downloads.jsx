
const Downloads = ({ downloads }) => {
  // if (!Array.isArray(download) || download.length === 0) {
  //   return <p>No downloads available</p>;
  // }
  console.log(downloads)
  return (
    <div  className="grid grid-cols-4 gap-3    my-10  ">
      {downloads?.map((movie) => (
          <div
            key={movie.id}
           
          >
            <div>
              <img src={movie.poster} alt="" className="w-80 " />
            </div>
            
           
          </div>
        ))}
    </div>
  )
}

export default Downloads
