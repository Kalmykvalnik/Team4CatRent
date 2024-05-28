import { FormEvent } from 'react'

export default async function handleSubmit(event: FormEvent<HTMLFormElement>) {
  event.preventDefault()

  const formData = new FormData(event.currentTarget)
  const email = formData.get('email')
  const password = formData.get('password')

  

  let response = await fetch('http://localhost:3001/api/user/login', {
    //mode: 'no-cors',
    cache: 'no-store',
    method: 'POST',
    headers:{ 'Access-Control-Allow-Origin': '*',
              'Access-Control-Allow-Methods':'*',
              'content-type': 'application/json',
              'Access-Control-Allow-Headers': '*', 
              'Content-Type' : 'Authorization',
              'Access-Control-Max-Age':'5'
            },
    body: JSON.stringify({ email, password }),
  })

  if (response.ok) {
    /*router.push('/profile')*/
    
    console.log('succses')
  } else {
    // Handle errors
    console.log('unsuccses')
    
  }
}