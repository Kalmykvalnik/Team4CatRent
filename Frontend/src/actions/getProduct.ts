export async function GetProducts(): Promise<Pruducts> {

  const res = await fetch('http://localhost:3003/api/product', {cache: 'no-store'});

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json()
  //console.log(res)
  return data
}

export async function GetProduct(): Promise<Pruduct> {

  const res = await fetch('http://localhost:3003/api/product/${id}', {cache: 'no-store'});

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json()
  //console.log(res)
  return data
}