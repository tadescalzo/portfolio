import { useState } from "react"

function Portfolio() {

const [counter, setCounter]= useState(0)


const sums = ( ) =>{
  console.log(counter)
  setCounter(counter + 1)
}

if(true){
    setTimeout(()=>{
        sums()
      },1000) 
}


  return (
    <>
      {
        counter
      }
    </>
  )
}

export default Portfolio
