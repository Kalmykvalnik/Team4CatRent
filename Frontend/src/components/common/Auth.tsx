import { useState } from "react";
import registerUser from "@/actions/register";
import handleSubmit from "@/actions/login";

const Auth = () => {
  const [isLogin, setLsiLogin] = useState<boolean>(false);
  return (
    <div className="border-solid bg-blue-300 rounded-lg p-2 shadow-xl">
      <h1 className="text-center text-xl">
        {isLogin ? 'Вход' : 'Регистрация'}
      </h1>
      <form onSubmit={isLogin ? handleSubmit : registerUser} className="grid gap-4 md:gap-4 items-start border-solid bg-blue-300 rounded-lg p-2 shadow-xl">
        <input type="text" name="username" className={isLogin? "hidden" : " border-solid border-2 border-black rounded placeholder:text-xs"} placeholder="Имя"></input>
        <input type="text" name="email" className=" border-solid border-2 border-black rounded placeholder:text-xs" placeholder="Логин"></input>
        <input type="password" name="password" className=" border-solid border-2 border-black rounded placeholder:text-xs" placeholder="Пароль"></input>
        <button type="submit" className="bg-[#0F57C2] hover:bg-blue-900 text-white font-bold py-2 px-4 rounded-lg p-2  " /*onClick={() => session = !session}*/>{
          isLogin ? 'Вход' : 'Регистрация'} </button>
      </form>
      <div>
        {isLogin ? (
          <p className="text-xs">Нет аккаунта?&nbsp;
            <button className="hover:underline text-blue-900"
              onClick={() => setLsiLogin(!isLogin)}
            >
              Регистрация
            </button>
          </p>
        ) : (
          <p className="text-xs">Есть аккаунт?&nbsp;
            <button className="hover:underline text-blue-900"
              onClick={() => setLsiLogin(!isLogin)}
            >
              Войти
            </button>
          </p>
        )}
      </div>
    </div>
  )
}

export default Auth