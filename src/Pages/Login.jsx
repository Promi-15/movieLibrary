
const Login = () => {
  return (
    <div
  className="hero min-h-screen"
  style={{
    backgroundImage: "url(https://i.ibb.co.com/zVXHJxTt/spider.jpg)",
  }}>
  {/* <div className="hero-overlay bg-opacity-60"></div> */}
  <div className="hero-content border-2 text-neutral-content text-center   bg-white-600 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0  border-gray-100 ">
    <div className="max-w-7xl">
      <h1 className="mb-5 text-3xl font-bold">Login</h1>
          <div className="flex flex-col">
          <input className="bg-transparent" type="text" name="" id="" />
          <input type="password" name="" id="" />
          </div>
          <input type="checkbox" name="" id="" />
          <p>Remember me</p>
          <button className="btn btn-primary">Login</button>
          <p>Don't have an account? <span>Register</span> </p>
    </div>
  </div>
</div>
  )
}

export default Login
