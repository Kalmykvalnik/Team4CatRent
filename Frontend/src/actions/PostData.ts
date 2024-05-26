export async function POST() {
  const res = await fetch('http://localhost:3001/api/user/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'API-Key': process.env.DATA_API_KEY!,
    },
    body: JSON.stringify({ "email":"vladislav0@gmail.info", "password": "12345" }),
  })
 
  const data = await res.json()
  
  console.log(data)
  return Response.json(data)
}