import { createContext, useState } from "react";
import axios from "axios"
const ChistesContext=createContext();

const ChistesProvider=({children})=>{
    
    const [chiste,setChiste]=useState({})

    async function conseguirChiste(){
       const resultado=await axios.get("https://api.chucknorris.io/jokes/random")
       console.log(resultado)
       return resultado
    }

    return (
        <ChistesContext.Provider value={{chiste,setChiste,conseguirChiste}}>
            
            {children}
        </ChistesContext.Provider>
    )


}
export {ChistesProvider}
export default ChistesContext