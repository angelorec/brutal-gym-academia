import React from 'react';
import { MODALITIES } from '../constants';

const Modalities: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-accent-pink border-b-4 border-black scroll-mt-28" id="modalities">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="text-3xl md:text-5xl font-black uppercase text-black mb-8 md:mb-12 text-center drop-shadow-md">Nossas Modalidades</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {MODALITIES.map((item, index) => (
            <div 
              key={index} 
              className="bg-white border-4 border-black p-5 md:p-6 rounded-xl shadow-neo hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all cursor-pointer group flex flex-row sm:flex-col items-center sm:items-start gap-4 sm:gap-0"
            >
              <div className={`w-14 h-14 md:w-16 md:h-16 border-4 border-black rounded-lg flex items-center justify-center sm:mb-6 transition-colors shrink-0 ${item.iconBgClass}`}>
                <span className={`material-symbols-outlined text-3xl md:text-4xl ${item.iconColorClass}`}>{item.icon}</span>
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-black uppercase mb-1 md:mb-2">{item.title}</h3>
                <p className="font-bold text-xs md:text-sm leading-tight text-gray-800">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Modalities;