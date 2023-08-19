import Image from "next/image";
import Link from "next/link";
export default function Navbar() {
  return (
    <div>
      <nav
        className="bg-white fixed w-full
                                z-20 top-0 left-0
                                border-b border-gray-200"
      >
        <div
          className="flex flex-wrap items-center
                                justify-between mx-auto p-2"
        >
          <Image
            src={"/Logo4.png"}
            className="mr-2"
            alt="GFG"
            width={100}
            height={100}
          />
          <span className="self-center text-2xl font-semibold ">
            HighEnd Services
          </span>
          <div
            className="items-center justify-between hidden
                                    w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul
              className="flex flex-col p-4
                                       md:p-0 mt-4 font-medium
                                       border border-gray-100 rounded-lg
                                       bg-gray-50 md:flex-row md:space-x-8
                                       md:mt-0 md:border-0 md:bg-white"
            >
              <li>
                <Link
                  href="/home"
                  className="block py-2 pl-3
                                              pr-4 text-white bg-blue-700
                                              rounded md:bg-transparent
                                              md:text-blue-700 md:p-0"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="block py-2 pl-3
                                              pr-4 text-gray-900 rounded
                                              hover:bg-gray-100
                                              md:hover:bg-transparent
                                              md:hover:text-blue-700 md:p-0"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="block py-2 pl-3
                                              pr-4 text-gray-900 rounded
                                              hover:bg-gray-100
                                              md:hover:bg-transparent
                                              md:hover:text-blue-700 md:p-0"
                >
                  About us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
