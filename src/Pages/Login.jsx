import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="bg-gradient-to-l from bg-red-950 to to-black min-h-screen ">
      <div>
        <p className="text-white text-center text-5xl italic font-bold pt-10">
          Login
        </p>
      </div>
      <div className="p-5 lg:p-20 my-5 border-2 rounded-tl-4xl h-full w-full   bg-clip-padding backdrop-filter  backdrop-blur-lg opacity-90  border-gray-100 max-w-2xl mx-auto space-y-5 bg-white/10">
        {/* <div className="hero-overlay bg-opacity-60"></div> */}
        <div className="text-center flex flex-col space-y-5">
          <input
            type="text"
            className="p-2 rounded-3xl bg-gray-400"
            name=""
            id=""
            placeholder="user name"
          />
          <div className="flex relative">
            <input
              type={showPassword ? "text" : "password"}
              className="p-2 rounded-3xl w-full bg-gray-400"
              name=""
              id=""
              placeholder="password"
            />
          
             <label
              className="swap swap-flip absolute inset-y-0 right-3 flex items-center text-2xl text-red-950 cursor-pointer"
            >
              <input
                type="checkbox"
                onChange={() => setShowPassword(!showPassword)}
                checked={showPassword}
              />
              <div className="swap-on">😈</div> {/* Visible password */}
              <div className="swap-off">😇</div> {/* Hidden password */}
            </label>
           
          </div>
          <button className="w-full bg-gradient-to-bl from bg-gray-400 to to-gray-500 p-2 rounded-3xl font-bold">
            Submit
          </button>
        </div>
        <div className="flex justify-between gap-2 text-white">
          <div className="flex gap-2">
            <input type="checkbox" name="" id="" />
            <p>Remember me?</p>
          </div>
          <p className="italic">Forgot password?</p>
        </div>
        <p className="text-white text-center">
          Do Not Have An Account ?{" "}
          <span className="text-blue-500">
            <Link to={"/registration"}>Register</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
