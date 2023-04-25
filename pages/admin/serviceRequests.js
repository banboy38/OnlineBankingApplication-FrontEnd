import axios from "axios"
import Row from "@/components/row";
import useAxios from "axios-hooks";
import { useState } from "react";
export default function ServiceRequest(){

    const [data, setdata] = useState(null)

    axios.get("http://localhost:8080/api/admin/servicerequests")
    .then(res => {
        setdata(res)
    })
    .catch(err => {
        console.error(err); 
    })
    
    const[{stuff,loading, error}] = useAxios("http://localhost:8080/api/admin/servicerequests")
    
    // console.log(stuff)
    // console.log(data)
    
    // setdata(stuff)



    if(data && data.data)
        return(
            <div className="w-full flex py-20 flex-col justify-center items-center">
        
                <div className="w-[80%] min-h-[75vh] p-5 pt-10 ease-in-out duration-500 bg-white rounded flex flex-col justify-start gap-3 items-center shadow-lg">
                    
                <div className="flex  gap-3 w-full text-center">
                    <div className="w-10 bg-slate-300 font-semibold p-2">ID</div>
                    <div className="w-1/5 bg-slate-300 font-semibold p-2">First Name</div>
                    <div className="w-1/5 bg-slate-300 font-semibold p-2">Last Name</div>
                    <div className="w-1/5 bg-slate-300 font-semibold p-2">Mobile Number</div>
                    <div className="w-[31rem] bg-slate-300 font-semibold p-2">Action</div>
                    {/* <div className="w-2/5 bg-stone-100 p-2">Action</div> */}

                </div>
                    
                    {data.data.map((item)=>{
                            return(
                                // <div>{item.requestId}</div>
                                <Row key={item.requestId} sid={item.requestId} fname={item.user.firstName} lname = {item.user.lastName} mno={item.user.mobileNumber}/>
                            )
                    })}
                </div>
            </div>
        )
    else{
        return(
            <div className="w-full h-[100vh] flex flex-col justify-center items-center">
        
                <div className="w-[80%] sm-[70%] md:w-[70%] lg:w-[70%] min-h-[23rem] p-5 ease-in-out duration-500 bg-white rounded text-xl flex flex-col justify-center gap-3 items-center shadow-lg">
                    <div className="font-semibold">Loading...</div>
                </div>
            </div>
        )
    }
}

