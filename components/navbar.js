import { useRouter } from "next/router"
import { useEffect } from "react"
import Link from "next/link"

export default function Navbar(){
    const router = useRouter()

    const currentRoute = router.pathname.slice(16)


    useEffect(() => {
        if(!currentRoute){
            document.getElementById("detailsBtn").classList.add("text-[#106892]")
            document.getElementById("detailsBtn").classList.add("font-semibold")
        }
        else{
            document.getElementById(currentRoute).classList.add("text-[#106892]")
            document.getElementById(currentRoute).classList.add("font-semibold")
        }
    }, [])
    


    return(
        <div className="w-[70%] h-16 flex justify-evenly items-center bg-white shadow-md">

            <Link href={"/user/dashboard"} id="detailsBtn" className="hover:text-[#106892] hover:cursor-pointer flex justify-center items-center w-[10rem] hover:font-bold ease-in-out duration-300">Account Details</Link>

            <div className="standingLine"></div>
            
            <Link href={"/user/dashboard/transfer"} id="transfer" className="hover:text-[#106892] hover:cursor-pointer flex justify-center items-center w-[10rem] hover:font-bold ease-in-out duration-300">Funds Transfer</Link>
            
            <div className="standingLine"></div>
            
            <Link href={"/user/dashboard/statement"} id="statement" className="hover:text-[#106892] hover:cursor-pointer flex justify-center items-center w-[10rem] hover:font-bold ease-in-out duration-300">Account Statement</Link>

        </div>
    )
}