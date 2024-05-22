import { GetProducts } from '@/actions/getData'


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
        {/*payload.map((object: any) =>
          <ul>
            <li>{object.status}</li>
          </ul>
        )*/
        payload.status
        }
      </div>
    </main>
  );
}
