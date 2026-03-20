import Image from "next/image";
import Menu from "./_components/menu.tsx";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
		<Menu/>
		<h1>Olá. Bem-vindo ao projeto!</h1>
    </div>
  );
}
