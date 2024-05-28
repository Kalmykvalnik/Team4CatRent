import LoginTST from '@/components/login'
import LoginForm from '@/components/login';

export default async function Login() {
  return (
    <main className=" bg-white">
      <div className="">

        <div className="flex h-screen justify-center ">
          <div>
            <LoginForm></LoginForm>
          </div>
        </div>
      </div>
    </main>
  );
}