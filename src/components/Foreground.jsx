// import { useState } from "react"
import { useRef } from "react"
import { Card } from "./Card.jsx"

export function Foreground(){
// is component ke andar cart aaega 
//data=[
// description,filesize,closeOrdownload,tagdetail
// ]
const ref=useRef(null);
const data=[
    {
        desc:"this is cart which shows content dynamically ",
        filesize:".5mb",
        close:true,
        tag:{
            isOpen:true,//tag dikhana hai ya nhi
            tagTitle:"Download",
            tagColor:"green"
        }
    },   {
        desc:"this is cart which shows content dynamically ",
        filesize:".5mb",
        close:true,
        tag:{
            isOpen:true,//tag dikhana hai ya nhi
            tagTitle:"Download",
            tagColor:"red"
        }
    },   {
        desc:"this is cart which shows content dynamically ",
        filesize:".5mb",
        close:true,
        tag:{
            isOpen:true,//tag dikhana hai ya nhi
            tagTitle:"Upload",
            tagColor:"blue"
        }
    },
    
    
]
  
return(
<div ref={ref} className=' fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5 '>


{/* <Card/> */}
{data.map((el,idx)=>{
return <Card data={el} key={idx} reference={ref}/>
})}

  
</div>

)

}

