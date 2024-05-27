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
        <div>
          {payload.product.map((object: Product) =>

            <li key={object.id}>{object.name}</li>

          )
            //payload.product[0].name
          }
        </div>

      </div>
    </main>
  );
}
