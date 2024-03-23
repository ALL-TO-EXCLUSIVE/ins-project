"use client"
import Image from "next/image";
import React from "react";
import { signIn, useSession } from "next-auth/react"
import { useRouter } from "next/navigation";

const login = () => {


  const { status } = useSession();

  const router = useRouter();

  if (status === "loading") {
    return <div className={" h-screen w-full flex items-center justify-center"}> <p className="text-5xl font-[poppins] font-bold bg-gradient-to-r from-blue-400 to-pink-400 text-transparent bg-clip-text">Loading...</p> </div>;
  }

  if (status === "authenticated") {
    router.push("/dashboard")
  }

  return (
    <div
      className={`
        w-full h-screen flex flex-col items-center justify-center gap-10`
      }
    >
      <div className="fixed h-5 w-screen top-[0px] bg-gradient-to-r from-blue-400 to-pink-400 ">
      </div>
      <h1 className="text-7xl font-[poppins] font-bold bg-gradient-to-r from-blue-400 to-pink-400 text-transparent bg-clip-text">
        StellarScript
      </h1>
      <div className="h-[1.5px] w-[50%] bg-gray-200"></div>
      <div className="flex flex-col items-center justify-center gap-7">
        <h1 className="font-bold text-4xl">Sign in to your account</h1>
        <button onClick={() => signIn("google")} className="px-5 py-3 text-xl border flex justify-center items-center gap-4 border-slate-200 dark:border-slate-700 rounded-lg text-slate-700 dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-slate-300 hover:shadow transition duration-150">
          <Image
            height={50}
            width={50}
            className="w-8 h-8"
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            loading="lazy"
            alt="google logo"
          />
          <span>Login with Google</span>
        </button>
      </div>
    </div>
  );
};

export default login;
