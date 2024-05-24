import { GetProducts } from '@/actions/getProduct'


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
        {payload.result.map((object: Product) =>
          <ul>
            <li>{object.name}</li>
          </ul>
        )
        //payload.status
        }
      </div>
    </main>
  );
}
