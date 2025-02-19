import Banner from "../Components/Banner"
import CompatibilityAd from "../Components/CompatibilityAd"

import FetchMovies from "../Components/FetchMovies"
import Footer from "../Components/Footer"
import MovieBanner from "../Components/MovieBanner"
import Treanding from "../Components/Treanding"


const Home = () => {
  return (
    
    <div >
      <Banner />
      <FetchMovies />
      <MovieBanner />
      <Treanding />
      <CompatibilityAd />
      <Footer/>
     </div>
    
  )
}

export default Home
