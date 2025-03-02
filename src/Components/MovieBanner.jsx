

const MovieBanner = () => {
  return (
    <div className="my-20">
    <div
      className="hero h-80 mt-5  rounded-xl"
      style={{
        backgroundImage:
          "url(https://i.ibb.co.com/G4q0Rbfy/banner1.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-60 rounded-2xl"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <p className="text-xl font-bold italic underline ">
           STREAMING NOW
          </p>
          <p className="mb-5"></p>
          <button className=" btn-dash text-2xl italic">Let's Explore Something New</button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default MovieBanner
