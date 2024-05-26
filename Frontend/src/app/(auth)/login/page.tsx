'use client';
import Link from "next/link";

import {POST} from "../../../actions/PostData";

export default async function Login() {
  return (
    <main className=" bg-white">
      <div className="">

        <div className="flex h-screen justify-center ">
          <div>
            <div className="border-solid bg-blue-300 rounded-lg p-2 shadow-xl">
              <h1 className="text-center text-xl">Вход</h1>

              <form className="grid gap-4 md:gap-4 items-start border-solid bg-blue-300 rounded-lg p-2 shadow-xl">
                <input type="text" className=" border-solid border-2 border-black rounded placeholder:text-xs" placeholder="Логин"></input>
                <input type="password" className=" border-solid border-2 border-black rounded placeholder:text-xs" placeholder="Пароль"></input>
                <button className="bg-[#0F57C2] hover:bg-blue-900 text-white font-bold py-2 px-4 rounded-lg p-2  ">Войти</button>
              </form>
              <p className="text-xs">Нет аккаунта? 
                <Link href="/registration" className="hover:underline text-blue-900"> Регистрация</Link>
              </p>
            </div>
            <button onClick={POST}>kjg</button>
          </div>
        </div>
      </div>
    </main>
  );
}
