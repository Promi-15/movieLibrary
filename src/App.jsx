import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
// import ListedBooks from "./Pages/ListedMovies"
// import PagesToRead from "./Pages/PagesToReload"
import Login from "./Pages/Login"
import Registration from "./Pages/Registration"
import Navbar from "./Components/Navbar"
import Description from "./Pages/Description"
import { useEffect, useState } from "react"
import Swal from "sweetalert2"
import ListedMovies from "./Pages/ListedMovies"
import PagesToReload from "./Pages/PagesToReload"
import Downloads from "./Pages/Downloads"

const App = () => {
  const [watchMovies, setToWatchMovie] = useState(JSON.parse(localStorage.getItem("watchMovies")) || []);
  const [wishList, setWishList] = useState(JSON.parse(localStorage.getItem("wishList")) || []);

  const [downloads, setDownloads] = useState(JSON.parse(localStorage.getItem("downloads")) ||[])
  
  useEffect(() => {
    localStorage.setItem("watchMovies", JSON.stringify(watchMovies));
  }, [watchMovies]);

  useEffect(() => {
    localStorage.setItem("wishList", JSON.stringify(wishList));
  }, [wishList]);
  useEffect(() => {
    localStorage.setItem("downloads", JSON.stringify(downloads));
  }, [downloads]);



  const addToWatch = (movie) => {
    setToWatchMovie((prev) => {
      const updatedList = [...prev, movie];
     
      // updatedLocalStorage();
      return updatedList;
    });
    
    Swal.fire({
      title: "Successfully added to watched lists",
      icon: "success",
      draggable: true
    });
  };

  const addToWishList = (movie) => {
    const isMovieWatched = watchMovies.find((mv) => mv.id === movie.id);
    if (isMovieWatched) {
      Swal.fire({
        title: " Already Watched",
        icon: "error",
        draggable: true
      });
    } else {
      setWishList((prev) => {
        const updatedList = [...prev, movie];
        // updatedLocalStorage();
        return updatedList;
      });
      //local.setItem
    Swal.fire({
      title: "Successfully added to wish lists",
      icon: "success",
      draggable: true
    });
    }
  }
  const addToDownLoad = (movie) => {
    setDownloads((prev) => {
      const update = [...prev, movie]
      return update;
    })
    Swal.fire({
      title: "Successfully added to Download",
      icon: "success",
      draggable: true
    });
 }
  const deleteFromWatchedMovies = (movieId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {

        const updatedMovies = watchMovies.filter((movie) => movie.id !== movieId)
    
    setToWatchMovie(updatedMovies)
    localStorage.setItem("watchedMovies", JSON.stringify(updatedMovies))
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
      }
    });
    
    
  }
  
  const deleteFromWishListMovies = (movieId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {

        const updatedMovies = wishList.filter((movie) => movie.id !== movieId)
    
    setWishList(updatedMovies)
    localStorage.setItem("wishList", JSON.stringify(updatedMovies))
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
      }
    });
    
    
}

  return (
    <div className="  mt-2  rounded-2xl ">
       <BrowserRouter >
      <Navbar/>
      <Routes>
        <Route path="/" element= {<Home/>} />
          <Route path="/listedBooks" element={<ListedMovies watchMovies={watchMovies} wishList={wishList} deleteFromWatchedMovies={deleteFromWatchedMovies} deleteFromWishListMovies={ deleteFromWishListMovies} />} />
        <Route path="/pagesToReload" element= {<PagesToReload/>} />
          <Route path="/description/:id" element={<Description addToWatch={ addToWatch} addToWishList={addToWishList}  addToDownLoad={addToDownLoad}/>  }  />
        <Route path="/login" element= {<Login/>} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/downloads" element={<Downloads downloads={downloads}/>}></Route>
        
      </Routes>
    </BrowserRouter>
   </div>
  )
}

export default App
