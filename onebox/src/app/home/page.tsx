import Image from "next/image";
import def from "../../../public/Frame 2087326090.png"

export default function  HomeScreen (){
    return <>
    <div className ="flex justify-center items-center" style={{width:"100%",height:"100%"}}>
    <Image src={def} style={{width:"58%"}}></Image>
    
    </div>
    </>
}