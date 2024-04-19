import banner from "@images/banner.jpg"
import Image from 'next/image';

export default function Home() {
  return (
    <main>
      <div className="flex h-screen ">
        <div className=" w-full ">
          <div className="">
            <Image className="object-cover w-full" src={banner} alt="banner" />
          </div>
          <div className="">
            <p className="text-center">
              здесь будет контент главной страницы
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
