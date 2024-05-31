import { FormEvent } from 'react'

export default async function registerUser(event: FormEvent<HTMLFormElement>) {
  event.preventDefault()

  const formData = new FormData(event.currentTarget)
  const username = formData.get('username')
  const email = formData.get('email')
  const password = formData.get('password')



  let response = await fetch('http://localhost:3001/api/user/register', {
    //mode: 'no-cors',
    cache: 'no-store',
    method: 'POST',
    headers: { 'content-type': 'application/json', },
    body: JSON.stringify({ username, email, password }),
  })

  if (response.ok) {
    /*router.push('/profile')*/

    const answer: Promise<Reg> = response.json()
    const expires = new Date(Date.now() + 3600000); // Set expiration time to 1 hour from now

    // ...

    //cookies().set('token', (await answer).token, { expires, httpOnly: true });

    console.log((await answer).token)

    document.cookie = `token=${(await answer).token}; path=/; expires=${expires.toUTCString()}; ` //token (await answer).token

    return (await answer).token
  } else {
    // Handle errors
    console.log('unsuccses')

  }
}