
import Image from "next/image";
import { ArrowRightIcon } from '@heroicons/react/24/solid'
import Link from "next/link";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gray-50/10">
     <section className="flex flex-col items-center">
     <h1 className="text-9xl font-[poppins] font-bold bg-gradient-to-r from-blue-400 to-pink-400 text-transparent bg-clip-text">StellarScript</h1>
      <p className="text-2xl mt-2 text-gray-500 tracking-wide">Where Ideas Take Flight</p>
      <button > <Link className=" w-max bg-gradient-to-r from-blue-400 to-pink-400 px-5 py-2 flex gap-2 text-white mt-[70px] rounded-[5px]" href={"/login"}>Create your first note <ArrowRightIcon className="h-6 w-6"/> </Link> </button>
      </section> 
    </main>
  );
}