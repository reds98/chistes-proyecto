import React,{useContext} from 'react'
import ChistesContext from './contexts/ChistesProvider'
export default function Chiste() {
  const informacionContexto=useContext(ChistesContext)

  async function actualizarChiste(){
    const resultado=await informacionContexto.conseguirChiste()
    console.log(resultado)
    informacionContexto.setChiste(resultado)
  }
  return (
    <div className='bg-white w-1/3 flex  flex-col rounded-xl  items-center'>
        {informacionContexto.chiste.data ? <h1 className='text-3xl' >{informacionContexto.chiste.data.value}</h1>:null}
        <button onClick={actualizarChiste} className='bg-amber-500 m-10	text-3xl	 rounded-lg  text-neutral-50'>Recargar Chiste</button>
    </div>
  )
}
