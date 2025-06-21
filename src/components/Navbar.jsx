import { useState } from "react";
// import logo from "../assets/BavithSuvarnaLogo.png";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="mb-5 py-6 px-4 relative">
  <div className="flex items-center justify-between max-w-screen-xl mx-auto">
    {/* Left: Logo and My Portfolio Text */}
    <div className="flex flex-shrink-0 items-center">
      {/* <img className="mx-2 w-12" src={logo} alt="logo" /> */}
      <span className="text-3xl text-white font-bold ml-2">My Portfolio</span>
    </div>

    {/* Desktop Links */}
    <div className="hidden md:flex m-8 items-center justify-center gap-12 text-2xl text-white">
      <a href="#journey" className="hover:text-purple-400 transition font-semibold text-white">Journey</a>
      <a href="#projects" className="hover:text-purple-400 transition font-semibold text-white">Projects</a>
      <a href="#technologies" className="hover:text-purple-400 transition font-semibold text-white">Experience</a>
      <a href="#contact" className="hover:text-purple-400 transition font-semibold text-white">Contact</a>
    </div>

    {/* Hamburger */}
    <div className="md:hidden z-50 pr-4">
      <button onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>
    </div>
  </div>

  {/* Mobile Menu */}
  {menuOpen && (
    <div className="absolute top-full right-0 left-0 bg-neutral-900 flex flex-col items-center gap-6 py-6 text-xl font-semibold text-white md:hidden">
      <a href="#journey" onClick={() => setMenuOpen(false)} className="hover:text-purple-400 transition">Journey</a>
      <a href="#projects" onClick={() => setMenuOpen(false)} className="hover:text-purple-400 transition">Projects</a>
      <a href="#technologies" onClick={() => setMenuOpen(false)} className="hover:text-purple-400 transition">Experience</a>
      <a href="#contact" onClick={() => setMenuOpen(false)} className="hover:text-purple-400 transition">Contact</a>
    </div>
  )}
</nav>

  );
};

export default Navbar;
