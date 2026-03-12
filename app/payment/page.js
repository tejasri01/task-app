"use client"
import { useRouter } from "next/navigation"

export default function PaymentPage(){

 const router = useRouter()

 return(

 <div className="p-10">

 <h1 className="text-2xl font-bold">Confirm Payment</h1>

 <p className="mt-4">Click below to simulate payment</p>

 <button
 className="bg-blue-600 text-white px-6 py-2 mt-4"
 onClick={()=>router.push("/success")}
 >
 Pay Securely
 </button>

 </div>

 )
}
