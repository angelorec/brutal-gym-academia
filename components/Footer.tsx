import React from 'react';
import { NAV_LINKS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-gray-800 pt-12 md:pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-12 text-white">
          <div className="col-span-1 sm:col-span-2 md:col-span-2">
            <div className="flex items-center gap-3 mb-4 md:mb-6">
              <div className="w-10 h-10 bg-accent-yellow text-black flex items-center justify-center rounded-lg border-2 border-white">
                <span className="material-symbols-outlined text-2xl">fitness_center</span>
              </div>
              <h3 className="text-2xl font-black uppercase">Academia Neo Brutal</h3>
            </div>
            <p className="text-gray-400 font-medium max-w-sm">
              Raw. Unfiltered. Aggressive. <br />
              Construindo lendas desde 2023.
            </p>
          </div>
          <div>
            <h4 className="text-accent-pink font-bold uppercase mb-4 text-lg">Links Rápidos</h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-400 hover:text-white hover:underline decoration-accent-yellow decoration-2 font-medium">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-accent-yellow font-bold uppercase mb-4 text-lg">Contato</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-gray-400">
                <span className="material-symbols-outlined text-sm">location_on</span>
                Rua da Força, 666 - Centro
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <span className="material-symbols-outlined text-sm">call</span>
                (11) 99999-9999
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <span className="material-symbols-outlined text-sm">mail</span>
                contato@neobrutal.com
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500 font-bold uppercase text-center md:text-left">
          <p>© 2024 Academia Neo Brutal. Todos os direitos reservados.</p>
          <div className="flex gap-4">
            {['Instagram', 'Facebook', 'Twitter'].map(social => (
              <a key={social} href="#" className="hover:text-white transition-colors">{social}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;