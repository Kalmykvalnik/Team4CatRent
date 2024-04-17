import Content from "@/components/cat_card";
import Footer from "@/components/footer";
import Header from "@/components/header";

export default function Home() {
  return (
    <main className=" bg-white">
      <div className="">
        <Header></Header> 
      <div className="flex h-screen justify-center ">
        <Content></Content>
      </div>
        <Footer></Footer>
      </div>
    </main>
  );
}
