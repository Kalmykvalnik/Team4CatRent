import { GetProducts } from '@/actions/getProduct'
import Link from "next/link"


export default async function Catalog() {



  const payload = await GetProducts();

  return (
    <main className=" bg-white">
      <div className="">

        <div className="flex h-screen justify-center ">
          <div>
            <p>
              здесь будет контент окна фильтрации котов
            </p>
          </div>
          <span></span>
        </div>
        <div>
          {payload.map((object: Product) =>

            <li key={object.id}>
              <Link href={`/catalog/${object.id}`}>{object.name}</Link>
            </li>
          )
          }
        </div>

      </div>
    </main>
  );
}
