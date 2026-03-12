"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function AddressPage() {

  const router = useRouter()

  const [form, setForm] = useState({
    name:"",
    email:"",
    phone:"",
    city:"",
    state:"",
    pincode:""
  })

  const handleSubmit = (e) => {
    e.preventDefault()

    if(form.phone.length !== 10){
      alert("Phone must be 10 digits")
      return
    }

    router.push("/payment")
  }

  return (
    <div className="p-10">

      <h1 className="text-2xl font-bold mb-4">Shipping Address</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-96">

        <input placeholder="Full Name" required
        onChange={(e)=>setForm({...form,name:e.target.value})}/>

        <input placeholder="Email" required type="email"
        onChange={(e)=>setForm({...form,email:e.target.value})}/>

        <input placeholder="Phone"
        onChange={(e)=>setForm({...form,phone:e.target.value})}/>

        <input placeholder="PIN Code"
        onChange={(e)=>setForm({...form,pincode:e.target.value})}/>

        <input placeholder="City"
        onChange={(e)=>setForm({...form,city:e.target.value})}/>

        <input placeholder="State"
        onChange={(e)=>setForm({...form,state:e.target.value})}/>

        <button className="bg-green-600 text-white p-2">
          Continue to Payment
        </button>

      </form>

    </div>
  )
}