import useAxios from "axios-hooks"
import axios from "axios"
import { useEffect, useState } from "react"
import Link from "next/link"
import { useRouter } from 'next/router'

import { useForm } from "react-hook-form"

export default function Register(props) { 

  const {register, handleSubmit} = useForm()

    // fname mname lname fatherName aadhaar mno email

  const router = useRouter()
  
  const submit = (formData, event) => {
    // event.preventDefault()
    // console.log(formData)

    axios.post("http://localhost:8080/api/user",
    formData
    ).then((res)=>{
      console.log(res)
    })

    router.push('/')



  }

    // axios.post("http://localhost:8080/api/user",
    //     {
    //         "firstName": "Kajal",
    //         "middleName":"Kumari",
    //         "lastName" : "Mahato",
    //         "fatherName":"Papa Mahato",
    //         "aadharNumber":485448281983,
    //         "mobileNumber":98765432112,
    //         "emailID":"kajal_0802@gmail.com"
    //     }
    // ).then((res)=>{
    //     console.log(res)
    // })
    


  return (
    <form onSubmit={handleSubmit(submit)} content="application/json" className="w-full h-[100vh] flex flex-col justify-center items-center">
      
      <div className="w-[80%] sm-[60%] md:w-[50%] lg:w-[40%] min-h-[25rem] ease-in-out duration-500 bg-white p-5 rounded flex flex-col justify-center gap-2 items-center shadow-lg">

        <div className="text-2xl font-semibold mb-3">Register</div>
        
            <input type="text" className="w-[70%]" id="firstName"  {...register("firstName")} onFocus={(e)=>{e.target.placeholder = ""}} onBlur={(e)=>{e.target.placeholder="First Name"}} placeholder="First Name"/>
            <input type="text" className="w-[70%]" id="middleName" {...register("middleName")} onFocus={(e)=>{e.target.placeholder = ""}} onBlur={(e)=>{e.target.placeholder="Middle Name"}} placeholder="Middle Name"/>
            <input type="text" className="w-[70%]" id="lastName" {...register("lastName")} onFocus={(e)=>{e.target.placeholder = ""}} onBlur={(e)=>{e.target.placeholder="Last Name"}} placeholder="Last Name"/>
            <input type="text" className="w-[70%]" id="fatherName" {...register("fatherName")} onFocus={(e)=>{e.target.placeholder = ""}} onBlur={(e)=>{e.target.placeholder="Father's Name"}} placeholder="Father's Name"/>
            <input type="text" className="w-[70%]" id="aadharNumber" {...register("aadharNumber")} onFocus={(e)=>{e.target.placeholder = ""}} onBlur={(e)=>{e.target.placeholder="Aadhaar Number"}} placeholder="Aadhaar Number"/>
            <input type="text" className="w-[70%]" id="mobileNumber" {...register("mobileNumber")} onFocus={(e)=>{e.target.placeholder = ""}} onBlur={(e)=>{e.target.placeholder="Mobile"}} placeholder="Mobile"/>
            <input type="date" className="w-[70%]" id="dateOfBirth" {...register("dateOfBirth")} onFocus={(e)=>{e.target.placeholder = ""}} onBlur={(e)=>{e.target.placeholder="DoB"}} placeholder="DoB"/>
            <input type="text" className="w-[70%]" id="emailID" {...register("emailID")} onFocus={(e)=>{e.target.placeholder = ""}} onBlur={(e)=>{e.target.placeholder="E-Mail"}} placeholder="E-Mail"/>


        <button className="submit  mt-3">Register</button>
        
      </div>
      
      <div className="text-xs mt-4 text-white">
        Already have an account? <Link className="text-cyan-800" href="/">Login</Link>
      </div>

    </form>
  )
}