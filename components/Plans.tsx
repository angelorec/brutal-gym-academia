import React from 'react';
import { PLANS } from '../constants';

const Plans: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-accent-yellow border-b-4 border-black relative overflow-hidden scroll-mt-28" id="plans">
      <span className="material-symbols-outlined absolute top-12 left-12 text-black text-[6rem] md:text-[10rem] opacity-5 font-bold rotate-12 pointer-events-none select-none">payments</span>
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-black uppercase text-black inline-block bg-white px-4 md:px-6 py-2 border-4 border-black shadow-neo transform -rotate-1">
            Planos de Acesso
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-8 items-start md:items-center">
          {PLANS.map((plan, index) => (
            <div 
              key={plan.name}
              className={`${plan.color} border-4 border-black rounded-2xl p-5 md:p-6 shadow-neo flex flex-col h-full 
                ${plan.highlight ? 'transform scale-100 md:scale-105 z-10 shadow-[8px_8px_0px_0px_#000000] order-first md:order-none' : 'hover:-translate-y-2 transition-transform duration-200'}
              `}
            >
              {plan.highlight && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-accent-pink text-black font-black uppercase px-4 py-1 border-2 border-black rounded-full text-sm whitespace-nowrap shadow-sm">
                  Mais Popular
                </div>
              )}
              
              <div className={`mb-4 ${plan.highlight ? 'text-black md:text-white' : ''} md:${plan.highlight ? 'text-white' : 'text-black'}`}>
                {/* On mobile, highlight plan text might need contrast check if background is dark, but primary color is #5b2eff which is dark, so white text is correct. */}
                <h3 className={`text-xl md:text-2xl font-black uppercase mb-2 ${plan.highlight ? 'text-white' : 'text-black'}`}>{plan.name}</h3>
                <div className={`text-4xl md:text-5xl font-black ${plan.highlight ? 'text-accent-yellow' : ''}`}>
                  R$ {plan.price}
                  <span className={`text-base md:text-lg font-bold ${plan.highlight ? 'text-white' : 'text-gray-500'}`}>/mês</span>
                </div>
              </div>

              <ul className={`flex-1 space-y-3 md:space-y-4 mb-6 md:mb-8 ${plan.highlight ? 'text-white' : ''}`}>
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 font-bold text-xs md:text-sm uppercase text-left">
                    <span className={`material-symbols-outlined rounded-full p-0.5 text-sm shrink-0 ${plan.highlight ? 'bg-white text-black' : 'bg-black text-white'}`}>check</span>
                    {feature}
                  </li>
                ))}
                {!plan.highlight && (
                  <li className="flex items-center gap-3 font-bold text-xs md:text-sm uppercase text-gray-400 line-through opacity-50">
                    <span className="material-symbols-outlined bg-gray-300 text-white rounded-full p-0.5 text-sm shrink-0">close</span>
                     Mais Benefícios
                  </li>
                )}
              </ul>

              <button className={`w-full font-black uppercase py-3 md:py-4 border-4 border-black rounded-xl transition-colors shadow-neo-sm text-sm md:text-base ${plan.buttonColor}`}>
                Assinar {plan.name.split(' ')[0]}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Plans;