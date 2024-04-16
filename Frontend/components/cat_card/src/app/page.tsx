import HeartIcon from "@/components/HeartIcon";

const name = "Кардинал"

const characteristics = {
  1:"Возраст ~ 3 года",
  2:"Кот",
  3:"Добрый",
  4:"Среднешерстный",
  5:"Спокойный",
  6:"Обработан от паразитов"
}


export default function Home() {
  return (
    <main className="">
      <div className="flex h-screen justify-center ">
        <div className="p-6 border-solid border-2 border-black mx-8 w-3/5 h-min">
          <div className="flex items-start gap-6">
            <img
              alt="Cat"
              className="aspect-square rounded-lg object-cover border dark:border-gray-800 flex-1"
              height={305}
              src="https://avatars.mds.yandex.net/i?id=3f8cff41185438aff3ae0d5ac9566f58_l-5234292-images-thumbs&n=13"
              width={381}
            />
            <div className="grid gap-8 text-sm flex-1 ">
              <h2 className="font-semibold text-lg text-center">{name}</h2>
              <ul className="grid grid-cols-1 gap-2 text-sm text-tertiary marker:text-2xl list-image-checkmark">
                <li className="font-medium">{characteristics[1]}</li>
                <li className="font-medium">{characteristics[2]}</li>
                <li className="font-medium">{characteristics[3]}</li>
                <li className="font-medium">{characteristics[4]}</li>
                <li className="font-medium">{characteristics[5]}</li>
                <li className="font-medium">{characteristics[6]}</li>
              </ul>
            </div>
          </div>
          <div className="grid gap-8 text-sm leading-loose py-6">
            <p >
              Наш Кардинал — кот широкой души. А это значит, он готов стать для своего человека всем. Лучшим другом. Лучшим помощником и вдохновителем. Лучшим антистрессом и антихмурином. 
            </p>
          </div>
          <form className="grid gap-4 md:gap-0 items-start border-solid bg-blue-300 rounded-lg p-2">
            <div className="flex flex-col gap-1 min-[400px]:flex-row justify-around">
              <div>
                <div>стоимость:</div>
                <div>500 р/ч</div>
              </div>
              <div className="grid grid-cols-1 gap-2">
                <div>Выбор даты</div>
                <input className="w-36" id="date" placeholder="Select date" type="datetime-local" />
              </div>
              <div className="flex items-center gap-2">
                <button className="btn btn-primary">Primary</button>
                <HeartIcon className="w-4 h-4 mr-2" />
              </div>
            </div>

          </form>
        </div>
      </div>
    </main>
  );
}
