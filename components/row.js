import axios from "axios"

export default function Row({sid='0', fname='John', lname='Doe', mno='000'}){

    function handleAccept(e){
        // console.log("http://localhost:8080/api/admin/servicerequests/"+)
        axios.get("http://localhost:8080/api/admin/servicerequests/"+sid)
        .catch((err)=>{console.log(err)})
    }

    function handleReject(e){
        axios.delete("http://localhost:8080/api/admin/servicerequests/"+sid)
        .catch((err)=>{console.log(err)})
    }
    

    return(
        <div className="flex  gap-3 w-full text-center">
            <div className="w-10 bg-stone-100 p-2">{sid}</div>
            <div className="w-1/5 bg-stone-100 p-2">{fname}</div>
            <div className="w-1/5 bg-stone-100 p-2">{lname}</div>
            <div className="w-1/5 bg-stone-100 p-2">{mno}</div>
            <button className="submit w-1/5" onClick={handleAccept}>Accept</button>
            <button className="forgotPassword w-1/5" onClick={handleReject}>Reject</button>
        </div>
    )
}