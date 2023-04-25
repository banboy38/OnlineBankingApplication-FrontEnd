import { useRouter } from "next/router"
export default function ForgotPassword(){
    const router= useRouter()
    return(
        <>

            <div className="box1">
                <div className="box w-[90%] md:w-[45%]">
                      <div className="font-semibold text-2xl">Forgot Password?</div>
                      
                      <input type="text" className="w-[70%]" placeholder="Registered E-Mail" id="femail"/>
                      
                      <div className="btn">
                        <button className="forgotPassword" onClick={()=>{router.push("/")}}>Back</button>
                        <button className="submit">Submit</button>
                      </div>
                </div>


            </div>


        </>
    )
}