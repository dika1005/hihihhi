"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";


export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  return (
    <nav className="flex items-center justify-between p-4 bg-gray-800 text-white">
    <h1>NAVBAR</h1>
    <div>
          <ul className="flex ml-5">
      <Link href="/">
        <li className={`mr-6 ${pathname === "/" ? "text-blue-300" : "text-white"} cursor-pointer`}>Home</li>
      </Link>
      <Link href="/about">
        <li className={`mr-6 ${pathname === "/about" ? "text-blue-300" : "text-white"} cursor-pointer`}>About</li>
      </Link>
      <Link href="/about/profile">
        <li className={`mr-6 ${pathname === "/about/profile" ? "text-blue-300" : "text-white"} cursor-pointer`}>Profile</li>
      </Link>
    </ul>
    </div>
    <div>
      <button 
      className="bg-blue-500 rounded-md px-3 text-sm h-7 cursor-pointer" 
      onClick={() => router.push("/login")}
      >
        Login
      </button>
    </div>
    </nav>
  );
}