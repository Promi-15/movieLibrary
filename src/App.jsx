import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import ListedBooks from "./Pages/ListedBooks"
import PagesToRead from "./Pages/PagesToRead"
import Login from "./Pages/Login"
import Registration from "./Pages/Registration"
import Navbar from "./Components/Navbar"
import Description from "./Pages/Description"
import { useState } from "react"

const App = () => {
  const [watchMovies,setToWatchMovie] = useState([])
  const addToWatch = (movie) => {
    setToWatchMovie((prev) => [...prev, movie]);
  };

  return (
    <div className="  mt-2  rounded-2xl ">
       <BrowserRouter >
      <Navbar/>
      <Routes>
        <Route path="/" element= {<Home/>} />
          <Route path="/listedBooks" element={<ListedBooks watchMovies={ watchMovies} />} />
        <Route path="/pagesToReload" element= {<PagesToRead/>} />
          <Route path="/description/:id" element={<Description addToWatch={ addToWatch} /> }  />
        <Route path="/login" element= {<Login/>} />
        <Route path="/registration" element= {<Registration/>} />
        
      </Routes>
    </BrowserRouter>
   </div>
  )
}

export default App
