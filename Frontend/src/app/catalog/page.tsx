import { GetProducts } from '@/actions/getProduct'
import CatMiniCard from "@/components/common/catMiniCard";
import { catImg } from "@/components/common/img";

import asign from '@/actions/asign'

export default async function Catalog() {



  const payload = await GetProducts();

  const cats2 = asign(payload, catImg)

  return (
    <main className=" bg-white">
      <div className="flex justify-center h-screen ">
        <div className="flex w-[300px]"></div>
        <div>
          <div className="h-[100px] m-5 ">
            <h1 className="text-center text-3xl border-t-2 border-b-2 border-black p-5">Католог котиков</h1>
          </div>
          <div className="flex flex-wrap justify-center gap-10 m-5">
            {cats2.map((object: catCard) =>
              <div className="" key={object.id}>
                <CatMiniCard id={object.id} name={object.name} src={object.src} description={object.description || 'Default description'} />
              </div>
            )}
          </div>
        </div>
        <div className="flex w-[300px]"></div>
      </div>
    </main>
  );
}
