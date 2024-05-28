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
    headers:{ 'content-type': 'application/json',},
    body: JSON.stringify({ email, password }),
  })

  if (response.ok) {
    /*router.push('/profile')*/
    
    const answer : Promise<Auth> = response.json()

    console.log((await answer).token)
    
    return (await answer).token
  } else {
    // Handle errors
    console.log('unsuccses')
    
  }
}