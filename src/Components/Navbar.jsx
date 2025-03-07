import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const link = (
    <>
      <li className="text-white font-light "> <NavLink className={({ isActive }) =>
          isActive ? "text-blue-500 font-bold border-b-2 border-blue-500 " : "text-light"
        } to="/">Home</NavLink> </li>
      <li className="text-white font-light "><NavLink className={({ isActive }) =>
          isActive ? "text-blue-500 font-bold border-b-2 border-blue-500" : "text-light"
        } to="/listedBooks">Lists of  movies</NavLink> </li>
      <li className="text-white font-light "><NavLink className={({ isActive }) =>
          isActive ? "text-blue-500 font-bold border-b-2 border-blue-500" : "text-light"
        } to="/pagesToReload">Pages TO Load</NavLink></li>
      <li className="text-white font-light "><NavLink className={({ isActive }) =>
          isActive ? "text-blue-500 font-bold border-b-2 border-blue-500" : "text-light"
        } to="/downloads">Download</NavLink></li>
    </>
  );
  return (
    <div className="navbar bg-gradient-to-l from-black to bg-red-900 shadow-sm ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-gradient-to-l from-amber-950 to bg-red-900 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {link}
          </ul>
        </div>
        <p className=" text-xl font-black italic underline ">MO<span className="font-bold text-white">VI</span>ES</p>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{link}</ul>
      </div>
      <div className="navbar-end gap-10">
        <Link className=" btn-outline  bg-gradient-to-tl from-blue-600 to-black text-white font-bold py-2 px-4 rounded-lg cursor-pointer" to="/login">Login</Link>
        <Link className=" btn-outline  bg-gradient-to-tl from-blue-600 to-black text-white font-bold py-2 px-4 rounded-lg cursor-pointer" to="/registration">Sign up</Link>
      </div>
    </div>
  );
};

export default Navbar;
