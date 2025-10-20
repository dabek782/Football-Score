import axios from 'axios';

import { useEffect, useState, type JSX } from 'react';

const  link = import.meta.env.VITE_URL as string | undefined
const key = import.meta.env.VITE_API as string | undefined
const h = import.meta.env.VITE_HOST as string | undefined
if (!link || !key || !h){
    throw new Error("Missing")
}
const options = {
  method: 'GET',
  url: link,
  headers: {
    'x-rapidapi-key': key,
    'x-rapidapi-host': h
  }
};

export const a =  () : void=> {
   console.log(link, key , h)
}

// export default function TestRequest(){
//     const [result, setResult]= useState<any>(null)
//     const [error , setError]= useState<string | null>(null)
//     const [req_limit , setReq_limit] = useState<number>(1)
//     const [number_req , setNumbe_Req] = useState<number>(0)
//     useEffect (()=>{
//         (async ()=>{
           
//             try{
               
//                 const response = await axios.request(options)
//                 setResult = response.data
//             }
//              catch(err){
//             console.error(err)
//             throw err
//         }
//         setNumbe_Req(number_req+=1)  
//         if (number_req == req_limit){
//             return
//         }       
//     }
    
       
//     )
//     }) 
// }
    

