import logoImg from "../assets/logo.jpg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full bg-[#f8f9fa] text-[#001f3f] inter-regular py-3 px-2 md:px-12 flex justify-between items-center shadow-md">
      <div className="text-black font-semibold flex justify-center items-center cursor-pointer">
        <img
          src={logoImg}
          alt="Logo"
          className="inline-block h-[30px] md:h-10 mr-2 filter invert contrast-100"
        />
        <span className="sketch-text text-[18px] md:text-[1.7rem]">Langflow-App</span>
      </div>
      <div className="flex space-x-5 md:space-x-8 justify-center items-center">
        <Link to="/" className="text-gray-400 hover:text-gray-800 text-[16px] md:text-lg hidden md:block">
          Home
        </Link>
        <Link to="/chat" className="text-gray-400 hover:text-gray-800 text-[16px] md:text-lg">
          Chat
        </Link>
        <Link to="/contact-us" className="text-gray-400 hover:text-gray-800 text-[16px] md:text-lg">
          Contact Us
        </Link>
        
        {/* GitHub Button with Logo */}
        <button
          onClick={() => {
            window.open("https://github.com/bisariyon/SuperMindHackathon", "_blank");
          }}
          className="px-4 py-2 rounded-full relative bg-slate-700 text-white text-[16px] md:text-lg hover:shadow-2xl hover:shadow-white/[0.1] transition duration-200 border border-slate-600 flex items-center"
        >
          {/* GitHub Logo */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            fill="white"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M12 2C6.48 2 2 6.48 2 12c0 4.42 3.04 8.16 7.25 9.5.53.1.75-.23.75-.48 0-.26-.01-.94-.01-1.85-3.01.66-3.64-1.43-3.64-1.43-.49-1.25-1.21-1.58-1.21-1.58-1.03-.71.08-.69.08-.69 1.14.08 1.74 1.17 1.74 1.17 1.01 1.71 2.65 1.22 3.29.93.1-.73.39-1.22.72-1.5-2.64-.3-5.43-1.32-5.43-5.9 0-1.3.46-2.36 1.22-3.19-.12-.3-.53-.91-.12-1.86 0 0 1.01-.32 3.3 1.22 1.16-.32 2.42-.48 3.68-.48s2.53.16 3.69.48c2.29-1.54 3.29-1.22 3.29-1.22.41.95.01 1.56-.12 1.86.76.83 1.22 1.89 1.22 3.19 0 4.58-2.8 5.6-5.44 5.9.39.33.74.98.74 1.97 0 1.43-.01 2.58-.01 2.93 0 .26.22.58.75.48C18.96 20.16 22 16.42 22 12c0-5.52-4.48-10-10-10z"
            />
          </svg>
          <span className="relative z-20">Github</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
