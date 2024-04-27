export async function GetData()  {
  const res = await fetch("http://localhost:3001/products");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  console.log("getData")
  return res.json()
}