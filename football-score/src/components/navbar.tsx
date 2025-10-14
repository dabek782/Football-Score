import logo from "./asset/logo.png"
import "./navbar.css"
function Navbar(){
    return(
    <div className="nav">
       <img src={logo} width="10%" className="img" /> 
       <h1>Football score</h1>
    </div>
    )
}
export default Navbar