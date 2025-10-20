import Navbar from "./components/navbar"
import Leagues from "./components/leagues"
import Schedule from "./components/schedule"
import "./app.css"
function App (){
  return( 
    <div className="container">
        <Navbar/>
        <Leagues/>
        <Schedule/>

    </div>

  )
}
export default App