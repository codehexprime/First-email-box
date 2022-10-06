import React from 'react'
import { useState } from 'react'

export default function Junkbox() {
  const [email, setEmail] = useState("")

  const sendEmail = async (e) => {
    e.preventDefault()

    console.log(email)

  }; 
  return (
    <div classname="--center-all --bg-primary
    --100vh">
    <div classname="--width-500px --card --p
    --bg-light">
      <form classname="--form-control" onSubmit=
      {sendEmail}>
       <input type="email" placeholder="Email" 
       value={email} onChange={(e) => setEmail
        (e.target.value)} />
         <button typeof="submit" className='--btn
         --btn-primary'>Send Email</button>
        </form>
      </div> 
    </div>
  );
  }
