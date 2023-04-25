import { useRouter } from "next/router"

export default function NewPassword(){
    const router=useRouter()

    return(
        <>
        <div className="box1">
                <div className="box w-[90%] md:w-[45%]">
                      <div className="font-semibold text-2xl">Set New Password</div>
                      
                      <input type="password" className="w-[70%] mb-[-2rem]" placeholder="New Password" id="newpassword"/>
                      <input type="password" className="w-[70%]" placeholder="Confirm Password" id="confirmpassword"/>
                      
                      <div className="btn">
                        <button className="forgotPassword" onClick={()=>{router.push('/verification')}}>Back</button>
                        <button className="submit">Submit</button>
                      </div>
                </div>


            </div>
        
        
        </>
    )
}