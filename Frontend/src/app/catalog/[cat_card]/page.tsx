import HeartIcon from "@/components/common/heartIcon"
import { GetProduct } from '@/actions/getProduct'

import Gallery from '@/components/common/slider'

type Props = {
  params: {
    cat_card: string
  }
}



const name = "Кардинал"

const characteristics = [
  {par: "Возраст ~ 3 года"},
  {par: "Кот"},
  {par: "Добрый"},
  {par: "Среднешерстный"},
  {par: "Привит"},
  {par: "Обработан от паразитов"}
]

const cost = 500

const description = {
  description :"Наш Кардинал — кот широкой души. А это значит, он готов стать для своего человека всем. Лучшим другом. Лучшим помощником и вдохновителем. Лучшим антистрессом и антихмурином."
}

const myComponentList = characteristics.map((obj: any, index) => (
  <li key={index}>✓ {obj.par}</li>
));



export default async function CatCard(cat_card: Props) {
  const id = cat_card.params.cat_card

  //console.log(typeof(id.toString()))

  const payload = await GetProduct(id);
  //console.log(payload)

  return (
    <div className="bg-white h-screen">
      <div className="flex  justify-center m-6">
        <div className="p-6 border-solid border-2 border-black mx-8 w-3/5 h-min">
          <div className="flex items-start gap-8">
            <div className="h-full">
              <Gallery></Gallery>
            </div>
            <div className="grid gap-8 text-sm flex-1 ">
              <h2 className="font-semibold text-lg text-center">{payload.name}</h2>
              <ul className="grid grid-cols-1 gap-3 text-sm text-tertiary marker:text-2xl">
                {myComponentList}
              </ul>
            </div>
          </div>
          <div className="grid gap-8 text-sm leading-loose py-6">
            <p >
              {payload.description}
            </p>
          </div>
          <form className="grid gap-4 md:gap-0 items-start border-solid bg-blue-300 rounded-lg p-2 shadow-xl">
            <div className="flex flex-col gap-1 min-[400px]:flex-row justify-around">
              <div>
                <div>Cтоимость:</div>
                <div className="flex gap-2">
                  <div>{cost}</div>
                  <div> р/ч</div>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-2">
                <div>Выбор даты</div>
                <input className="w-36" id="date" placeholder="Select date" type="datetime-local" />
              </div>
              <div className="flex items-center gap-2">
                <button className="bg-[#0F57C2] hover:bg-blue-900 text-white font-bold py-2 px-4 rounded-lg">
                  В карзину
                </button>
                <button>
                  <HeartIcon className="w-4 h-4 mr-2" />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className=" text-center gap-10">
        <button className="hover:underline">Отзывы</button>
      </div>
    </div>
  );
}