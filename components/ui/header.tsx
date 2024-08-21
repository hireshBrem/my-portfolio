import ThemeToggle from "./theme-toggle";
import Image from "next/image";
import UserImg from "@/public/images/user-image.jpg";
import HeaderImg01 from "@/public/images/header-image-01.jpg";
import HeaderImg02 from "@/public/images/header-image-02.jpg";
import HeaderImg03 from "@/public/images/header-image-03.jpg";

export default function Header() {
  return (
    <header className="text-center pt-6">
        {/* Dark mode toggle */}
        <ThemeToggle />
        {/* Intro */}
        <div className="mb-10">
        <Image
          className="inline-flex rounded-full shadow-lg mb-4"
          src={UserImg}
          width={48}
          height={48}
          alt="Hiresh Bremanand"
          priority
        />
        <div className="mb-5">
          <h1 className="font-inter-tight font-bold text-gray-800 dark:text-gray-100 text-2xl mb-1">
            Hiresh Bremanand
          </h1>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Tech enthusiast from UK 🇬🇧
          </p>
        </div>
        <a
          className="btn-sm text-gray-200 dark:text-gray-800 bg-gradient-to-r from-gray-800 to-gray-700 dark:from-gray-300 dark:to-gray-100 dark:hover:bg-gray-100 shadow relative before:absolute before:inset-0 before:rounded-[inherit] before:bg-[linear-gradient(45deg,transparent_25%,theme(colors.white/.2)_50%,transparent_75%,transparent_100%)] dark:before:bg-[linear-gradient(45deg,transparent_25%,theme(colors.white)_50%,transparent_75%,transparent_100%)] before:bg-[length:250%_250%,100%_100%] before:bg-[position:200%_0,0_0] before:bg-no-repeat before:[transition:background-position_0s_ease] hover:before:bg-[position:-100%_0,0_0] hover:before:duration-[1500ms]"
          href="https://studiaai.com"
          target="_blank"
        >
          Building Studia
        </a>
      </div>
      <div className="group flex justify-center gap-4">
        <Image
          className="rounded-xl even:rotate-2 odd:-rotate-2 group-hover:rotate-0 transition duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] shadow-lg"
          src={HeaderImg01}
          width={245}
          height={160}
          alt="Header 01"
          priority
        />
        <Image
          className="rounded-xl even:rotate-2 odd:-rotate-2 group-hover:rotate-0 transition duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] shadow-lg"
          src={HeaderImg02}
          width={245}
          height={160}
          alt="Header 02"
          priority
        />
        <Image
          className="rounded-xl even:rotate-2 odd:-rotate-2 group-hover:rotate-0 transition duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] shadow-lg"
          src={HeaderImg03}
          width={245}
          height={160}
          alt="Header 03"
          priority
        />
      </div>
    </header>
  );
}
