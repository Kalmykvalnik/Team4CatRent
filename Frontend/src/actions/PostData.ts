'use clients'

import { AuthOptions, Awaitable, RequestInternal, User } from 'next-auth'
import CredentialsProvider  from 'next-auth/providers/credentials'

export async function POST() {
  const res = await fetch('http://localhost:3001/api/user/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'API-Key': process.env.DATA_API_KEY!,
    },
    body: JSON.stringify({ "email": "someemail@mail.ru", "password": "12345" }),
  })

  const data = await res.json()

  console.log(data)
  return Response.json(data)
}

export const authConfig: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',

      credentials: {
        email: { label: 'email', type: 'email', required: true },
        password: { label: 'password', type: 'password', required: true }
      },
      async authorize(credentials, req){
        const res = await fetch('http://localhost:3001/api/user/login', {
          mode: 'no-cors',
          method: 'POST',
          body: JSON.stringify(credentials),
          headers: { "Content-Type": "application/json" }
        })
        const user = await res.json()
  
        // If no error and we have user data, return it
        if (res.ok && user) {
          return user
        }
        // Return null if user data could not be retrieved
        return null
      }
    })
  ]
}