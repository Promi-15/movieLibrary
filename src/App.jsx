import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import ListedBooks from "./Pages/ListedMovies"
import PagesToRead from "./Pages/PagesToRead"
import Login from "./Pages/Login"
import Registration from "./Pages/Registration"
import Navbar from "./Components/Navbar"
import Description from "./Pages/Description"
import { useState } from "react"
import Swal from "sweetalert2"
import ListedMovies from "./Pages/ListedMovies"

const App = () => {
  const [watchMovies, setToWatchMovie] = useState([]);
  const [wishList, setWishList] = useState([]);
  const addToWatch = (movie) => {
    setToWatchMovie((prev) => [...prev, movie]);
    Swal.fire({
      title: "Successfully added to watched lists",
      icon: "success",
      draggable: true
    });
  };

  const addToWishList = (movie) => {
    setWishList((prev) => [...prev, movie]);
    Swal.fire({
      title: "Successfully added to wish lists",
      icon: "success",
      draggable: true
    });
  }

  return (
    <div className="  mt-2  rounded-2xl ">
       <BrowserRouter >
      <Navbar/>
      <Routes>
        <Route path="/" element= {<Home/>} />
          <Route path="/listedBooks" element={<ListedMovies watchMovies={ watchMovies} wishList={wishList} />} />
        <Route path="/pagesToReload" element= {<PagesToRead/>} />
          <Route path="/description/:id" element={<Description addToWatch={ addToWatch} addToWishList={addToWishList} />  }  />
        <Route path="/login" element= {<Login/>} />
        <Route path="/registration" element= {<Registration/>} />
        
      </Routes>
    </BrowserRouter>
   </div>
  )
}

export default App
