import { useState } from "react"

function Light(){

    const[color, setColor] =useState("")

    const handleOn=()=>{

        setColor("yellow")

    }

    const handleOff=()=>{

        setColor("white")

    }
    return <div className="flex justify-center mt-[80px]"> 
       <div>
        <div style={{backgroundColor:color}}  className="border-2 border-black w-[300px] h-[300px] rounded-full "></div>
    
        <button className="bg-red-500 text-white text-3xl px-3 py-2 ml-20 rounded mt-[20px]" onClick={handleOn} >ON</button>
        <button className="bg-red-500 text-white text-3xl rounded px-3 py-2 ml-3" onClick={handleOff} >OFF</button>
        
        
        
        </div>
    </div>
}

export default Light
