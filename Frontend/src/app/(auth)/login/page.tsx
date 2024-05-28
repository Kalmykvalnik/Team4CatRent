import LoginTST from '@/components/login'


import {authConfig} from "../../../actions/PostData";



export default async function Login() {
  return (
    <main className=" bg-white">
      <div className="">

        <div className="flex h-screen justify-center ">
          <div>

            <LoginTST></LoginTST>
          </div>
        </div>
      </div>
    </main>
  );
}
/*
'use client'
import { FormEvent } from 'react'

 
export default function LoginPage() {

 
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
 
    const formData = new FormData(event.currentTarget)
    const email = formData.get('email')
    const password = formData.get('password')

    
 
    let response = await fetch('http://localhost:3001/api/user/login', {
      //mode: 'no-cors',
      method: 'POST',
      headers: new Headers({'content-type': 'application/json'}),
      body: JSON.stringify({ email, password }),
    })
 
    if (response.ok) {
      /*router.push('/profile')*/
      /*
      console.log('succses')
    } else {
      // Handle errors
      console.log('unsuccses')
      
    }
  }
 
  return (
    <form onSubmit={handleSubmit}>
      <input type="email" name="email" placeholder="Email" required />
      <input type="password" name="password" placeholder="Password" required />
      <button type="submit">Login</button>
    </form>
  )
}*/