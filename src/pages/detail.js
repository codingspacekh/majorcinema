import toggleTheme from "../utils/toggleTheme.js"
import sidenav from "../components/sidenav.js"
import displayDetailMovie from "../components/displayDetailMovie.js"
import tabbar from "../components/tabbar.js"
import MOVIES from "../db/data.js"

window.addEventListener('DOMContentLoaded', () => {
  toggleTheme()
  sidenav()

  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get('id'));

  let selectedMovie = MOVIES.find((movie) => movie.id == id) 
  displayDetailMovie(selectedMovie)
  
  tabbar()
  
})