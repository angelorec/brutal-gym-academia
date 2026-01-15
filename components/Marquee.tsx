import React from 'react';

const Marquee: React.FC = () => {
  const items = [
    { text: "NO PAIN NO GAIN", color: "text-white", bullet: "text-accent-yellow" },
    { text: "PURE RAW POWER", color: "text-accent-yellow", bullet: "text-white" },
    { text: "BREAK YOUR LIMITS", color: "text-white", bullet: "text-accent-pink" },
    { text: "NEO BRUTAL GYM", color: "text-accent-pink", bullet: "text-white" },
  ];

  const renderContent = () => (
    <>
      {items.map((item, idx) => (
        <div key={idx} className="flex items-center mx-8 md:mx-16">
          <span className={`text-3xl md:text-4xl font-black mr-3 ${item.bullet}`}>•</span>
          <span className={`text-2xl md:text-4xl font-black uppercase whitespace-nowrap ${item.color}`}>
            {item.text}
          </span>
        </div>
      ))}
    </>
  );

  return (
    <div className="bg-black py-4 md:py-6 border-y-4 border-black overflow-hidden flex relative z-20 select-none">
      {/* 
        Using two identical tracks side-by-side in a flex container. 
        Both move left by 100% of their own width.
        This prevents vertical overlapping issues caused by absolute positioning.
      */}
      <div className="animate-marquee flex min-w-full shrink-0 items-center">
        {renderContent()}
        {renderContent()}
        {renderContent()}
        {renderContent()}
      </div>
      <div className="animate-marquee flex min-w-full shrink-0 items-center" aria-hidden="true">
        {renderContent()}
        {renderContent()}
        {renderContent()}
        {renderContent()}
      </div>
    </div>
  );
};

export default Marquee;