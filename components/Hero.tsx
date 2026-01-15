import React from 'react';
import { IMAGES } from '../constants';

interface HeroProps {
  onOpenEnrollment: () => void;
  onOpenVisit: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenEnrollment, onOpenVisit }) => {
  return (
    <section className="relative min-h-[100dvh] pt-24 pb-12 md:pt-32 bg-[#5B2DFF] flex items-center justify-center overflow-hidden">
      {/* Decorative Background Elements */}
      <div
        className="absolute top-0 right-0 w-24 h-24 md:w-48 md:h-48 z-0 border-l-4 border-b-4 border-black pointer-events-none opacity-30 md:opacity-100"
        style={{ backgroundImage: 'conic-gradient(black 90deg, transparent 90deg 180deg, black 180deg 270deg, transparent 270deg)', backgroundSize: '24px 24px' }}
      ></div>
      <div
        className="absolute bottom-0 left-0 w-24 h-24 md:w-48 md:h-48 z-0 border-t-4 border-r-4 border-black pointer-events-none opacity-30 md:opacity-100"
        style={{ backgroundImage: 'conic-gradient(black 90deg, transparent 90deg 180deg, black 180deg 270deg, transparent 270deg)', backgroundSize: '24px 24px' }}
      ></div>

      {/* Floating Shapes - Hidden on mobile for cleaner look */}
      <div className="absolute top-32 left-10 w-40 h-40 bg-black rounded-full border-4 border-white animate-pulse hidden xl:block shadow-neo"></div>
      <div className="absolute bottom-1/4 right-20 text-[10rem] leading-none font-black text-black select-none hidden xl:block rotate-12 drop-shadow-lg opacity-80 pointer-events-none">X</div>
      <div className="absolute top-1/3 right-1/4 w-20 h-20 bg-black border-4 border-white transform rotate-45 hidden lg:block shadow-neo"></div>

      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

      <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center gap-8 md:gap-12 mt-4 md:mt-0">
        <div className="flex-1 text-center md:text-left w-full">
          <div className="inline-block bg-black text-white px-3 py-1 md:px-4 text-xs md:text-sm font-bold uppercase mb-4 md:mb-6 transform -rotate-2 border-2 border-white shadow-md">
            Sem Desculpas
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[0.9] tracking-tighter text-[#FFF200] mb-4 drop-shadow-[3px_3px_0_rgba(0,0,0,1)] md:drop-shadow-[4px_4px_0_rgba(0,0,0,1)]">
            TREINO NÃO É OPÇÃO
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-8 tracking-tight">
            É COMPROMISSO.
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start w-full sm:w-auto">
            <button
              onClick={onOpenEnrollment}
              className="bg-black text-white text-base md:text-lg font-bold uppercase px-6 py-3 md:px-8 md:py-4 rounded-xl border-4 border-white shadow-neo-white hover:shadow-neo-white-sm hover:translate-x-[3px] hover:translate-y-[3px] transition-all w-full sm:w-auto">
              Comece Agora
            </button>
            <button
              onClick={onOpenVisit}
              className="bg-white text-black text-base md:text-lg font-bold uppercase px-6 py-3 md:px-8 md:py-4 rounded-xl border-4 border-black shadow-neo hover:shadow-neo-hover hover:translate-x-[3px] hover:translate-y-[3px] transition-all w-full sm:w-auto">
              Agendar Visita
            </button>
          </div>
        </div>

        <div className="flex-1 relative w-full max-w-sm md:max-w-xl mx-auto md:mx-0 mt-8 md:mt-0">
          <div className="relative z-10 rounded-2xl border-4 border-black bg-white p-2 shadow-neo rotate-2 hover:rotate-0 transition-transform duration-500">
            <div
              className="aspect-[4/5] w-full bg-cover bg-center rounded-xl border-2 border-black grayscale contrast-125"
              style={{ backgroundImage: `url('${IMAGES.HERO}')` }}
            ></div>
          </div>
          <div className="absolute -bottom-6 -left-4 md:-bottom-10 md:-left-10 w-20 h-20 md:w-24 md:h-24 bg-black border-4 border-white rounded-full flex items-center justify-center z-20 rotate-[-15deg] shadow-neo animate-bounce duration-[3000ms]">
            <span className="font-black text-white text-center text-[10px] md:text-xs leading-tight">HARD<br />CORE<br />ONLY</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;