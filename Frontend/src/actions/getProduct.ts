export async function GetProducts(): Promise<Product[]> {

  const res = await fetch('http://localhost:3001/api/products/1', {cache: 'no-store'});

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json()
  return data
}

export async function GetProduct(): Promise<Product> {

  const res = await fetch('http://localhost:3003/api/product/${id}', {cache: 'no-store'});

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json()
  console.log(res)
  return data
}