import useAxios from "axios-hooks"
import axios from "axios"
import { useEffect, useState } from "react"
import Link from "next/link"

import { useForm } from "react-hook-form"
import { useRouter } from "next/router"

// const [{data, loading, error}, refetch] = useAxios("http://localhost:8080/api/")
//   const [{stuff, loading1, error1}, refetch1] = useAxios("http://localhost:3000/api/hello")

//   console.log(data, stuff)

  // var stuff = null
  

export default function Home(props) { 

  // const [data, setdata] = useState(null)

  // useEffect(() => {
    

  // axios.get('http://localhost:8080/api/')
  // .then((response)=>{
  //   // console.log(response.data)
  //   setdata(response.data)
  // })
  // .catch((error)=>{
  //   // console.log(error);
  // })

  // }, [])
  
  
  // console.log(props)
  // console.log(data)

  const {register, handleSubmit} = useForm()
  const router = useRouter()

  const submit = (formData, event) => {
    event.preventDefault()
    if(!formData.email){
      document.getElementById("wrongEmail").classList.remove("hidden")
    }
    else{
      document.getElementById("wrongEmail").classList.add("hidden")
    }

    if(!formData.password){
      document.getElementById("wrongPass").classList.remove("hidden")
    }
    else{
      document.getElementById("wrongPass").classList.add("hidden")
    }

    if(formData.password && formData.email){
      window.location.reload()
    }


  }


  return (
    <form onSubmit={handleSubmit(submit)} className="w-full h-[100vh] flex flex-col justify-center items-center">
      
      <div className="w-[80%] sm-[60%] md:w-[50%] lg:w-[40%] min-h-[23rem] p-5 ease-in-out duration-500 bg-white rounded flex flex-col justify-center gap-3 items-center shadow-lg">

        <div className="text-2xl font-semibold mb-6">Login</div>

        <div id="wrongEmail" className="w-[69%] hidden text-xs mb-[-0.5rem] text-red-400">Please enter E-mail address.</div>
        <input type="text" className="w-[70%]" id="email" {...register("email")} onFocus={(e)=>{e.target.placeholder = ""}} onBlur={(e)=>{e.target.placeholder="E-Mail"}} placeholder="E-Mail"/>
        
        <div id="wrongPass" className="w-[69%] hidden text-xs mb-[-0.5rem] text-red-400">Please enter Password.</div>
        <input type="password" className="w-[70%]" id="password" {...register("password")} onFocus={(e)=>{e.target.placeholder = ""}} onBlur={(e)=>{e.target.placeholder="Password"}} placeholder="Password"/>

        <div className="w-[69%] text-xs mt-[-0.5rem] text-cyan-600"><Link className="" href={""}>Forgot Password?</Link></div>

        <button className="submit  mt-6">Login</button>
        
      </div>
      
      <div className="text-xs mt-4 text-white">
        First time user? <Link className="text-cyan-800" href="/register">Register</Link>
      </div>

    </form>
  )
}


export async function getServerSideProps(context) {

  return {
    props: {'yagami':'oraon'}, // will be passed to the page component as props
  }
}