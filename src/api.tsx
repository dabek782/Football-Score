import axios from "axios"

const GetData = async () => {
    const url =  'http://site.api.espn.com/apis/site/v2/sports/soccer/rus.1/scoreboard'
    try{
        const res = await axios(url)
        console.log(res.data)
    } catch(e){
        console.error(e)
        throw (e)
    }
    


}

export default GetData