import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa6";
import { BiLogoGmail  } from "react-icons/bi";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-gray-900 shadow-md rounded-b-3xl text-white">
      <div
        className="text-2xl font-extrabold tracking-wider cursor-pointer select-none
                      bg-clip-text text-gray-200
                      hover:brightness-110 transition-all duration-300"
      >
        Vahidifar
      </div>

      <ul className="flex items-center gap-6 text-3xl">
        <li>
          <a
            href="https://github.com/Poison021"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white hover:scale-110 transition-transform duration-300"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
        </li>
        <li>
          <a
            href="https://t.me/mohamadreza_vahidifar"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-blue-400 hover:scale-110 transition-transform duration-300"
            aria-label="Telegram"
          >
            <FaTelegram />
          </a>
        </li>
        <li>
          <a
            href="mailto:mohamdrezavahidifar82@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#C5221F] hover:scale-110 transition-transform duration-300"
            aria-label="Telegram"
          >
            <BiLogoGmail />
          </a>
        </li>
      </ul>
    </nav>
  );
}
