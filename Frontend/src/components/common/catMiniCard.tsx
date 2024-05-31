import Image from "next/image";
import Link from "next/link";



export default function CatMiniCard( {id, name,  src} : catCard) {
  return (
    <div className="grid border-solid border-2 border-black gap-4 p-4 w-[300px]">
      <Link href={`/catalog/${id}`}>
        <Image
          src={src}
          alt="cat_photo"
          height={230}
          width={287}
          className="flex object-cover min-h-[230px] justify-items-center"
        />
      </Link>
      <div className="flex gap-4 justify-between">
        <h2 className="">{name}</h2>
        <Link href={`/catalog/${id}`}>
          <button className="bg-[#0F57C2] hover:bg-blue-900 text-white font-bold py-2 px-4 rounded-lg p-2  ">Подробнее</button>
        </Link>
      </div>
      
    </div>
  );
}