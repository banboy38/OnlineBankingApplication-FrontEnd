import { useRouter } from "next/router"
import { useForm } from "react-hook-form"


export default function NewPassword(){
    const router=useRouter()
    const {register, handleSubmit} = useForm()
    const submit = (formData, event) =>{
        if(!formData.newpassword){
            document.getElementById("wrongfPass").classList.remove("hidden")
        }
        else{
            document.getElementById("wrongfPass").classList.add("hidden")
        }

        if(!formData.confirmpassword){
            document.getElementById("wrongfConfirm").classList.remove("hidden")
        }
        else{
            document.getElementById("wrongfConfirm").classList.add("hidden")
        }
    }

    return(
        <>
            <form onSubmit={handleSubmit(submit)} className="box1">
                <div className="box w-[90%] md:w-[45%]">
                      <div className="font-semibold text-2xl">Set New Password</div>
                      
                      <div id="wrongfPass" className="w-[69%] hidden text-xs mb-[-2.5rem] text-red-400">Please enter password</div>
                      <input type="password" className="w-[70%] mb-[-2rem]" placeholder="New Password" {...register("newpassword")} id="newpassword"/>

                      <div id="wrongfConfirm" className="w-[69%] hidden text-xs mb-[-2.5rem] text-red-400">Please confirm password</div>
                      <input type="password" className="w-[70%]" placeholder="Confirm Password" {...register("confirmpassword")} id="confirmpassword"/>
                      
                      <div className="btn">
                        <button className="forgotPassword" onClick={()=>{router.push('/verification')}}>Back</button>
                        <button className="submit">Submit</button>
                      </div>
                </div>


            </form>
        
        
        </>
    )
}