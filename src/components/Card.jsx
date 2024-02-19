import { AiOutlineFileText } from "react-icons/ai";
import { HiDownload } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";

export function Card({data,reference}){
//icon
//text
//footer data
     //icon that differ
     //extra element
     console.log("ref>>",reference);
    return(
        <motion.div drag dragConstraints={reference} whileDrag={ {scale:1.1} } dragElastic={0.3}  dragTransition={{ bounceStiffness: 100, bounceDamping: 10 }} className=" flex-shrink-0 relative w-60 h-72 rounded-[45px] bg-zinc-900/90 px-8 py-10 text-white overflow-hidden  " >

<AiOutlineFileText  style={{
      color: "white",
    }}/>
    <p className=" text-sm mt-5 font-semibold leading-tight ">{data?.desc}</p>

{/* footer data */}
    <div className="  absolute bottom-0 w-full left-0    ">


<div className="  flex  items-center justify-between mb-3 py-3 px-8 w-full ">


    <h1>{data?.filesize}</h1>
    
 
    <span className=" flex items-center justify-center rounded-full w-7 h-7 bg-zinc-600 cursor-pointer ">
{
data?.close?<IoClose />:
<HiDownload size=".7em" color="#ffffff" />
}

    </span>
    


</div >
{/* extra elemet  */}

{
    (data?.tag?.isOpen)&&<div className={`w-full py-4 flex items-center justify-center bg-${data?.tag?.tagColor}-500`}>

    <h3 className=" text-sm font-semibold">{data?.tag?.tagTitle}</h3>
    
    </div>
}



    </div>

</motion.div>

    )


}