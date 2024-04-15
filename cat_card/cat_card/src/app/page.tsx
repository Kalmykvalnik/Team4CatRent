import HeartIcon from "@/components/HeartIcon";


export default function Home() {
  return (
    <main className="">
      <div>
        <div className="flex items-start gap-6">
          <img
            alt="Cat"
            className="aspect-square rounded-lg object-cover border dark:border-gray-800"
            height={150}
            src="https://avatars.mds.yandex.net/i?id=3f8cff41185438aff3ae0d5ac9566f58_l-5234292-images-thumbs&n=13"
            width={150}
          />
          <div className="grid gap-2 text-sm">
            <h2 className="font-semibold text-lg">Whiskers</h2>
            <dl className="grid grid-cols-2 gap-1 text-sm text-tertiary">
              <div className="font-medium">Age</div>
              <div className="text-right">3 years</div>
              <div className="font-medium">Character</div>
              <div className="text-right">Playful</div>
              <div className="font-medium">Color</div>
              <div className="text-right">Tabby</div>
              <div className="font-medium">Status</div>
              <div className="text-right">Available</div>
            </dl>
          </div>
        </div>
        <div className="grid gap-4 text-sm leading-loose">
          <p>
            Meet Whiskers, the feline companion you've been waiting for. With a soft coat of tabby fur and eyes that
            sparkle with curiosity, Whiskers is as charming as can be.
          </p>
          <p>
            This cat is the purr-fect addition to your home, bringing joy and warmth with every whisker twitch and tail
            swish. Whether you're looking for a cuddly friend to curl up with or a playful pal to chase after, Whiskers
            is ready to make your days brighter.
          </p>
        </div>
        <form className="grid gap-4 md:gap-0 items-start">
          <div className="flex flex-col gap-1 min-[400px]:flex-row justify-around">
            <div>
              стоимость:
            </div>
            <div className="flex items-center gap-2">
              <input className="w-36" id="date" placeholder="Select date" type="datetime-local" />
            </div>
            <div className="flex items-center gap-2">
            <button className="btn btn-primary">Primary</button>
            <HeartIcon className="w-4 h-4 mr-2" />
            </div>
          </div>
            
        </form>
      </div>
    </main>
  );
}
