import { useRouter } from "next/router"

import { useForm } from "react-hook-form"


export default function Verification(){

    const router = useRouter()
    const {register, handleSubmit} = useForm()

    const submit = (formData, event)=>{
        if(!formData.otp){
            document.getElementById("wrongOTP").classList.remove("hidden")
        }
        else{
            document.getElementById("wrongOTP").classList.add("hidden")
        }
    }



    return(
        <>
            <form onSubmit={handleSubmit(submit)} className="box1">
                <div className="box w-[90%] md:w-[45%]">
                      <div className="font-semibold text-2xl">OTP</div>


                      <div id="wrongOTP" className="w-[69%] hidden text-xs mb-[-2.5rem] text-red-400">Please enter OTP</div>                      
                      <input type="text" className="w-[70%]" placeholder="Enter OTP" {...register("otp")} id="otp"/>
                      
                      <div className="btn">
                        <button className="forgotPassword" onClick={()=>{router.push('/forgotPassword')}}>Back</button>
                        <button className="submit">Verify</button>
                      </div>
                </div>


            </form>
        </>
    )
}