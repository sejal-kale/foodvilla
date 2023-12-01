import { useState } from "react"
import { DUMMY_DATA } from "../constant"

const Section=({title,des ,isVisible,setIsVisible})=>{
    return (
        <div className="border border-black p-2 m-3">
        <h3 className="font-bold text-xl">{title}</h3>

     
        { isVisible?<button className="cursor-pointer underline" onClick={()=>setIsVisible}>Hide</button>
        :<button className="cursor-pointer underline" onClick={()=>setIsVisible()}>Show</button>}
       { isVisible &&<p>{des}</p>}
           
        
       
       
        </div>
    )
}


const InstaMart=()=>{

    const [visibleSection,setVisibleSection]=useState("about")
      return (<div>
        <h1  className="text-3xl p-2 m-2 font-bold">InstaMart</h1>
        <Section title={"About InstaMart"}
          des={DUMMY_DATA}
            isVisible={visibleSection==="about"}
            setIsVisible={()=>setVisibleSection("about")}
           
          />
        <Section title={"InstaMart Team"} 
         des={DUMMY_DATA}
            isVisible={visibleSection==="team"}
            setIsVisible={()=>setVisibleSection("team")}
            
         />
        <Section title={" Career"} 
         des={DUMMY_DATA}
            isVisible={visibleSection==="career"}
            setIsVisible={()=>setVisibleSection("career")}
         />

    </div>)
}

export default InstaMart;