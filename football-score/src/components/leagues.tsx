import "./leagues.css"
import "/node_modules/flag-icons/css/flag-icons.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Champions from "./asset/championslogo.png"
function Leagues(){
    return(
        <div className="selector">
        <button className="Champions"><img src={Champions} className="champions" />Champions League</button>
        <button className="England"> <span className="fi fi-gb-eng"></span>Premier League </button>
        <button className="Italy"><span className="fi fi-it"></span>Serie A</button>
        <button className="Germany"> <span className="fi fi-de"></span>Bundesliga</button>
        <button className="Spain"><span className="fi fi-es"></span>La liga</button>
        <button className="France"><span className="fi fi-fr"></span>Ligue 1</button>
        <button className="Other"><i className="bi bi-arrow-down"></i></button>
        </div>
    )
}
export default Leagues