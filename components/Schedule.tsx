import React, { useState } from 'react';
import { SCHEDULE_DAYS, SCHEDULE_DATA } from '../constants';

const Schedule: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('Todos');

  const filters = [
    { name: 'Todos', label: 'Todos' },
    { name: 'Cross', label: 'Cross' },
    { name: 'Lutas', label: 'Lutas' },
    { name: 'Yoga', label: 'Yoga' },
    { name: 'HIIT', label: 'HIIT' }
  ];

  const filterClass = (className: string) => {
    if (activeFilter === 'Todos') return true;
    if (activeFilter === 'Cross') return className.includes('Cross');
    if (activeFilter === 'Lutas') return className.includes('Boxe');
    if (activeFilter === 'Yoga') return className.includes('Yoga');
    if (activeFilter === 'HIIT') return className.includes('HIIT');
    return false;
  };
  return (
    <section className="py-16 md:py-24 bg-white border-b-4 border-black relative overflow-hidden scroll-mt-28" id="schedule">
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-8 md:mb-16">
          <div className="relative">
            <div className="absolute -top-4 -left-4 md:-top-6 md:-left-6 text-6xl md:text-9xl text-accent-yellow opacity-100 rotate-12 z-0 pointer-events-none">
              <span className="material-symbols-outlined text-[80px] md:text-[120px] font-black drop-shadow-[4px_4px_0_#000] text-accent-yellow text-stroke-3 select-none">star</span>
            </div>
            <h2 className="font-poppins text-4xl sm:text-6xl md:text-8xl font-black uppercase text-white italic tracking-tighter relative z-10 transform -rotate-2 drop-shadow-[4px_4px_0_#000] md:drop-shadow-[6px_6px_0_#000] text-stroke-3">
              Grade de<br />Horários
            </h2>
          </div>
          <div className="flex flex-wrap gap-2 md:gap-4 justify-start lg:justify-end w-full lg:w-auto">
            {filters.map((filter) => (
              <button
                key={filter.name}
                onClick={() => setActiveFilter(filter.name)}
                className={`flex-1 sm:flex-none px-4 py-2 md:px-6 md:py-3 text-sm md:text-base font-black uppercase border-4 border-black shadow-neo-sm transition-all rounded-lg ${activeFilter === filter.name
                  ? 'bg-black text-white translate-y-1 shadow-none'
                  : 'bg-white text-black hover:bg-accent-yellow hover:-translate-y-1 hover:shadow-neo'
                  }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        <div className="border-4 border-black bg-white p-2 md:p-4 shadow-neo rounded-xl overflow-hidden relative">
          <div className="absolute -right-2 top-10 z-20 hidden xl:block">
            <div className="bg-black text-white p-2 font-black uppercase text-center transform rotate-12 border-2 border-white shadow-lg">
              VAGAS<br />LIMITADAS
            </div>
            <span className="material-symbols-outlined text-6xl text-black absolute -left-8 top-10 transform -rotate-45">arrow_back</span>
          </div>

          <div className="overflow-x-auto pb-4 no-scrollbar -mx-2 px-2 md:mx-0 md:px-0">
            {/* Scroll hint for mobile */}
            <div className="md:hidden text-xs font-bold text-gray-500 uppercase mb-2 text-right flex items-center justify-end gap-1">
              Arraste para o lado <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </div>

            <div className="min-w-[1000px] lg:min-w-[1200px] grid grid-cols-[60px_repeat(7,_1fr)] md:grid-cols-[80px_repeat(7,_1fr)] gap-2 md:gap-4">
              {/* Header Row */}
              <div className="p-2 flex items-end justify-center">
                <span className="material-symbols-outlined text-3xl md:text-4xl">schedule</span>
              </div>
              {SCHEDULE_DAYS.map((day) => (
                <div key={day} className="text-center font-black text-lg md:text-2xl uppercase border-b-4 border-black pb-2">{day}</div>
              ))}

              {/* Data Rows */}
              {SCHEDULE_DATA.map((row, index) => (
                <React.Fragment key={index}>
                  <div className="font-black text-base md:text-xl flex items-center justify-center border-r-4 border-black pr-2">{row.time}</div>
                  {SCHEDULE_DAYS.map((day) => {
                    const classData = row.days[day];
                    if (classData && filterClass(classData.name)) {
                      return (
                        <div key={`${day}-${index}`} className={`${classData.color} p-2 md:p-3 border-2 md:border-4 border-black shadow-[2px_2px_0_#000] md:shadow-[4px_4px_0_#000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all cursor-pointer group rounded-lg`}>
                          <div className={`${classData.textColorClass} font-black text-xs md:text-lg leading-none mb-1 uppercase truncate`}>{classData.name}</div>
                          <div className={`${classData.subTextColorClass} text-[10px] md:text-xs font-bold uppercase truncate`}>{classData.trainer}</div>
                        </div>
                      );
                    } else {
                      return <div key={`${day}-${index}`}></div>;
                    }
                  })}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;