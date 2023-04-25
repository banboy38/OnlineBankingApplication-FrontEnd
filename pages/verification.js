import { useRouter } from "next/router"

export default function Verification(){

    const router = useRouter()


    return(
        <>
            <div className="box1">
                <div className="box w-[90%] md:w-[45%]">
                      <div className="font-semibold text-2xl">OTP</div>
                      
                      <input type="text" className="w-[70%]" placeholder="Enter OTP" id="otp"/>
                      
                      <div className="btn">
                        <button className="forgotPassword" onClick={()=>{router.push('/forgotPassword')}}>Back</button>
                        <button className="submit">Verify</button>
                      </div>
                </div>


            </div>
        </>
    )
}