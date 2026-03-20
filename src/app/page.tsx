"use client";
import Link from "next/link";
import {useState} from "react";

export default function HomePage() {
	const [conteudo, setConteudo] = useState("");
	const [num, setNum] = useState(1);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
			<div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
				<p>Alerta #{num}</p>
				<input type="text" className="bg-white-100-border" onChange={(item)=> {
					setConteudo(item.target.value);
				}}/>
				<button onClick={()=>{
					setNum(num + 1);
					alert(conteudo);
				}}>Adicionar</button>
			</div>
    </main>
  );
}
