import HeartIcon from "@/components/common/heartIcon"
import cardinal from "@images/cardinal.png"
import Image from 'next/image';

const name = "Кардинал"

const characteristics = {
  1: "Возраст ~ 3 года",
  2: "Кот",
  3: "Добрый",
  4: "Среднешерстный",
  5: "Спокойный",
  6: "Обработан от паразитов"
}

const cost = 500

const characteristics2 = [
  "Возраст ~ 3 года",
  "Кот",
  "Добрый",
  "Среднешерстный",
  "Спокойный",
  "Обработан от паразитов"
]

const myComponentList = characteristics2.map((obj: any, index) => (
  <li key={index}>✓ {obj}</li>
));


export default function CatCard() {
  return (
    <div className="bg-white">
      <div className="flex  justify-center m-6">
        <div className="p-6 border-solid border-2 border-black mx-8 w-3/5 h-min">
          <div className="flex items-start gap-8">
            <Image
              alt="Cat"
              className="aspect-square rounded-lg object-cover border dark:border-gray-800 flex-1"
              height={305}
              src={cardinal}
              width={381}
            />
            <div className="grid gap-8 text-sm flex-1 ">
              <h2 className="font-semibold text-lg text-center">{name}</h2>
              <ul className="grid grid-cols-1 gap-3 text-sm text-tertiary marker:text-2xl">
                {myComponentList}
              </ul>
            </div>
          </div>
          <div className="grid gap-8 text-sm leading-loose py-6">
            <p >
              Наш Кардинал — кот широкой души. А это значит, он готов стать для своего человека всем. Лучшим другом. Лучшим помощником и вдохновителем. Лучшим антистрессом и антихмурином.
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