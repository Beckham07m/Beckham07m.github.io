import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import { navData } from "./Data/DataSkill";

function Navbar() {
  const [nav, setNav] = useState(false);

  return (
    <nav className="flex justify-between items-center w-full h-20 text-white px-4">
      <div>
        <h1 className="text-4xl font-bold font-Marcellus ml-2">Portfolio</h1>
      </div>

      <ul className="hidden md:flex">
        {navData.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer text-2xl text-white hover:scale-105 duration-200"
          >
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-20 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute z-10 top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {navData.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer py-6 text-4xl hover:scale-105 duration-200 "
            >
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={500}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
