import React from 'react';

const About: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white border-b-4 border-black scroll-mt-28" id="about">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
          <div className="w-full md:w-1/3 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase text-black leading-none mb-2 md:mb-6 relative inline-block">
              Sobre a<br />Academia
              <span className="absolute -bottom-2 left-0 w-full h-3 md:h-4 bg-accent-yellow -z-10 transform -rotate-1"></span>
            </h2>
          </div>
          <div className="w-full md:w-2/3">
            <div className="p-6 md:p-8 border-4 border-black rounded-2xl bg-white shadow-neo">
              <p className="text-lg md:text-2xl font-bold leading-relaxed uppercase mb-6 text-justify md:text-left">
                Nós somos crus, não filtrados e agressivos. Sem desculpas, apenas resultados. Esta é a academia para quem está comprometido.
              </p>
              <p className="text-sm md:text-base text-gray-800 font-medium mb-8 text-justify md:text-left">
                Acreditamos que o fitness moderno se tornou muito confortável. Na Neo Brutal, trazemos de volta a essência do treinamento de força. Ferro, suor e determinação. Nossa instalação é projetada para empurrar você além dos seus limites em um ambiente que não pede desculpas por ser intenso.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                {[
                  { val: "24/7", label: "Acesso" },
                  { val: "100+", label: "Máquinas" },
                  { val: "20", label: "Trainers" },
                  { val: "∞", label: "Gains" }
                ].map((stat, idx) => (
                  <div key={idx} className="bg-background-light border-2 border-black p-3 md:p-4 text-center rounded-lg hover:-translate-y-1 transition-transform">
                    <span className="block text-2xl md:text-3xl font-black mb-1">{stat.val}</span>
                    <span className="text-[10px] md:text-xs uppercase font-bold">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;