import "./leagues.css"
import "/node_modules/flag-icons/css/flag-icons.min.css";
function Leagues(){
    return(
        <div className="selector">
        <button className="England"> <span className="fi fi-gb-eng"></span>Premier League </button>
        <button className="Italy"><span className="fi fi-it"></span>Serie A</button>
        <button className="Germany"> <span className="fi fi-de"></span>Bundesliga</button>
        <button className="Spain"><span className="fi fi-es"></span>La liga</button>
        <button className="France"><span className="fi fi-fr"></span>Ligue 1</button>
        </div>
    )
}
export default Leagues