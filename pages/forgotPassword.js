import { useRouter } from "next/router"
import { useForm } from "react-hook-form"

export default function ForgotPassword(){
    const router= useRouter()
    const {register, handleSubmit} = useForm()

    const submit = (formData, event) =>{
        if(!formData.femail){
            document.getElementById("wrongForgotEmail").classList.remove("hidden")
        }
        else{
            document.getElementById("wrongForgotEmail").classList.add("hidden")
        }
    }

    
    return(
        <>

            <form onSubmit={handleSubmit(submit)} className="box1">
                <div className="box w-[90%] md:w-[45%]">
                      <div className="font-semibold text-2xl">Forgot Password?</div>
                      
                      <div id="wrongForgotEmail" className="w-[69%] hidden text-xs mb-[-2.5rem] text-red-400">Please enter E-mail address.</div>
                      <input type="text" className="w-[70%]" placeholder="Registered E-Mail" {...register("femail")} id="femail"/>
                      
                      <div className="btn">
                        <button className="forgotPassword" onClick={()=>{router.push("/")}}>Back</button>
                        <button className="submit">Submit</button>
                      </div>
                </div>


            </form>


        </>
    )
}