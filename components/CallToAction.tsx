import React from 'react';

interface CallToActionProps {
  onOpenEnrollment: () => void;
  onOpenVisit: () => void;
}

const CallToAction: React.FC<CallToActionProps> = ({ onOpenEnrollment, onOpenVisit }) => {
  return (
    <section className="py-16 md:py-24 bg-black relative overflow-hidden scroll-mt-28" id="app">
      <div className="absolute -top-24 -right-24 w-40 h-40 md:w-64 md:h-64 border-[10px] md:border-[20px] border-accent-pink rounded-full opacity-50"></div>
      <div className="absolute bottom-4 left-4 md:bottom-10 md:left-10 text-white opacity-10 text-[6rem] md:text-[12rem] font-black pointer-events-none select-none leading-none">GO</div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <h2 className="text-5xl md:text-8xl font-black text-accent-yellow mb-6 md:mb-8 uppercase leading-none">
          Comece Agora
        </h2>
        <p className="text-white text-lg md:text-2xl font-medium max-w-2xl mx-auto mb-8 md:mb-12">
          O corpo que você quer é construído aqui. Não espere pela próxima segunda-feira.
        </p>
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-center gap-4 md:gap-6 w-full max-w-md md:max-w-none mx-auto">
          <button
            onClick={onOpenEnrollment}
            className="w-full md:w-auto bg-accent-yellow text-black text-lg md:text-xl font-black uppercase px-8 py-4 md:px-12 md:py-5 rounded-xl border-4 border-transparent hover:border-white transition-all shadow-[8px_8px_0px_0px_#ffffff30] hover:shadow-none hover:translate-y-1">
            Matricular-se
          </button>
          <button
            onClick={onOpenVisit}
            className="w-full md:w-auto bg-transparent text-white text-lg md:text-xl font-black uppercase px-8 py-4 md:px-12 md:py-5 rounded-xl border-4 border-white hover:bg-white hover:text-black transition-all">
            Agendar Visita
          </button>
          <button className="w-full md:w-auto bg-transparent text-white text-lg md:text-xl font-black uppercase px-8 py-4 md:px-12 md:py-5 rounded-xl border-4 border-white hover:bg-accent-pink hover:border-accent-pink hover:text-black transition-all flex items-center justify-center gap-2">
            <span className="material-symbols-outlined">chat</span>
            Whatsapp
          </button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;