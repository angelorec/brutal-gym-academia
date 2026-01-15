import React, { useState } from 'react';
import { NAV_LINKS } from '../constants';

interface NavbarProps {
  onOpenEnrollment: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onOpenEnrollment }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };



  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b-4 border-black px-4 md:px-6 py-3 md:py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 md:w-10 md:h-10 bg-black flex items-center justify-center rounded-lg shrink-0">
            <span className="material-symbols-outlined text-white text-xl md:text-3xl">fitness_center</span>
          </div>
          <h1 className="text-xl md:text-2xl font-black tracking-tighter uppercase sm:block">NEO BRUTAL</h1>
        </div>

        <div className="hidden lg:flex items-center gap-6 xl:gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-black font-bold text-sm uppercase hover:underline decoration-4 ${link.decoration} underline-offset-4 transition-all`}
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={onOpenEnrollment}
            className="hidden sm:block bg-primary text-white font-bold text-sm uppercase px-4 md:px-6 py-2 md:py-2.5 rounded-lg border-2 border-black shadow-neo-sm hover:shadow-neo-hover hover:translate-x-[1px] hover:translate-y-[1px] transition-all active:translate-x-[3px] active:translate-y-[3px] active:shadow-none">
            MATRICULE-SE
          </button>

          <button
            className="lg:hidden text-black p-1 md:p-2"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined text-3xl md:text-4xl">menu</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-b-4 border-black p-4 shadow-neo flex flex-col gap-4 animate-in slide-in-from-top-2 duration-200">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-black font-bold text-lg uppercase py-3 border-b-2 border-gray-100 last:border-0"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={() => {
              setIsMobileMenuOpen(false);
              onOpenEnrollment();
            }}
            className="bg-primary text-white font-bold text-lg uppercase px-6 py-4 rounded-lg border-2 border-black shadow-neo-sm w-full mt-2">
            MATRICULE-SE AGORA
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;