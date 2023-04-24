import Image from "next/image";

import card from '../../public/blue credit card front.svg'
import { useForm } from "react-hook-form"
import axios from "axios";

export default function Payments(){

    const {register, handleSubmit} = useForm()

    const submitTransaction = (formData, event) =>{
        // console.log(formData)
        // console.log('http://localhost:8080/api/transaction/'+formData.payerId+'/newtransaction')
        axios.post('http://localhost:8080/api/transaction/'+formData.payerId+'/newtransaction', {...formData, transactionType:"TRANSFER"})
        .then((res)=>{
            console.log(res)
        })

        window.location.reload()
    }

    return(
        <div className="min-h-[97vh] mt-[3vh] w-full bg-white flex flex-col justify-center items-center">
            
            <div className="font-bold text-4xl w-[75%]">Payment Details</div>
            <div className="flex w-full p-5 justify-center items-center">

                <div className="w-[40%]"><Image priority quality={100} alt={'credit card'} src={card}/></div>

                <form onSubmit={handleSubmit(submitTransaction)} className="w-[50%] flex flex-col justify-evenly items-center gap-5">
                    <input type="text" className="w-[80%]" id="payerId"  {...register("payerId")} onFocus={(e)=>{e.target.placeholder = ""}} onBlur={(e)=>{e.target.placeholder="From Account"}} placeholder="From Account"/>
                    <input type="text" className="w-[80%]" id="payeeId"  {...register("payeeId")} onFocus={(e)=>{e.target.placeholder = ""}} onBlur={(e)=>{e.target.placeholder="To Account"}} placeholder="To Account"/>
                    <input type="text" className="w-[80%]" id="amount"  {...register("amount")} onFocus={(e)=>{e.target.placeholder = ""}} onBlur={(e)=>{e.target.placeholder="Amount"}} placeholder="Amount"/>
                    <input type="text" className="w-[80%]" id="remarks"  {...register("remarks")} onFocus={(e)=>{e.target.placeholder = ""}} onBlur={(e)=>{e.target.placeholder="Remarks (If any)"}} placeholder="Remarks (If any)"/>
                    <div className="flex justify-between items-center w-[80%]"><button className="forgotPassword">Reset</button> <button className="submit w-1/2">Continue</button></div>
                </form>

            </div>

            <div className="flex flex-col w-[75%] text-xs">
                <div className="font-semibold">Instructions:</div>
                <div className="text-slate-400">1. Transactions will be executed on next working day, if they are scheduled for Sundays, National Holidays, NEFT Holidays (as declared by RBI).</div>
                <div className="text-slate-400">2. Timings for NEFT: Monday-Saturday(expect 2nd and 4th Saturdays)- 6:00AM-6:30PM</div>
            </div>

        </div>
    )
}