const Banner = () => {
  return (
    <div className="">
      <div
        className="hero min-h-screen mt-5 "
        style={{
          backgroundImage:
            "url(https://i.ibb.co.com/4nFZcnzW/wp9681972-marvel-movie-poster-wallpapers.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60 rounded-2xl"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <p className="text-4xl lg:text-9xl font-bold italic underline ">
              MO<span className="font-bold text-gray-700">VI</span>ES
            </p>
            <p className="mb-5"></p>
            <button className=" btn-dash text-2xl italic">Let's Explore Something New</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
