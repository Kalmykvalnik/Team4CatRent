export async function GetData(rout: string)  {

  const res = await fetch(rout, {cache: 'no-store'});

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  console.log("getData")
  return res.json()
}