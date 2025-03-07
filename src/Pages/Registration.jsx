import { useState } from "react";
import { FaRegSadCry } from "react-icons/fa";
import { PiSmileyDuotone } from "react-icons/pi";
import { Link } from "react-router-dom";

const Registration = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="bg-gradient-to-l from bg-red-950 to to-black min-h-screen">
      <div>
        <p className="text-white text-center text-5xl italic font-bold pt-10">
          Sign In
        </p>
      </div>
      <div className="p-5 lg:p-20 my-5 border-2 rounded-tl-4xl h-full w-full bg-clip-padding backdrop-filter backdrop-blur-lg opacity-90 border-gray-100 max-w-2xl mx-auto space-y-5 bg-white/10">
        <div className="text-center flex flex-col space-y-5">
          <div className="flex flex-col lg:flex-row justify-evenly gap-3">
            <div className="flex flex-col text-left">
              <label htmlFor="firstName" className="text-white mb-1">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                className="px-10 py-2 rounded-3xl bg-gray-400"
                placeholder="Enter first name"
              />
            </div>
            <div className="flex flex-col text-left">
              <label htmlFor="lastName" className="text-white mb-1">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                className="py-2 px-10 rounded-3xl bg-gray-400"
                placeholder="Enter last name"
              />
            </div>
          </div>

          <div className="flex flex-col text-left relative items-center">
            <label htmlFor="password" className="text-white mb-1">
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              className="p-2 rounded-3xl w-full bg-gray-400"
              placeholder="Enter password"
            />
            <p
              className="absolute mt-10 right-3 flex items-center text-xl text-red-950 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaRegSadCry /> : <PiSmileyDuotone />}
            </p>
          </div>

          <button className="w-full bg-gradient-to-bl from bg-gray-400 to to-gray-500 p-2 rounded-3xl font-bold">
            Submit
          </button>
        </div>

        <div className="flex justify-between gap-2 text-white">
          <div className="flex gap-2">
            <input type="checkbox" id="rememberMe" />
            <label htmlFor="rememberMe">Remember me?</label>
          </div>
          <p className="italic">Forgot password?</p>
        </div>

        <p className="text-white text-center">
          Already Have An Account?{" "}
          <span className="text-blue-500">
            <Link to={"/login"}>Login</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Registration;
