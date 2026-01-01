
import React from 'react';
import { PosterData } from '../../types';

export const FormalTemplate: React.FC<{ data: PosterData }> = ({ data }) => {
  return (
    <div className="h-full w-full relative flex flex-col p-10 overflow-hidden font-display bg-[#1a1914] text-[#fdf6d8]">
      <div className="absolute inset-0 bg-gradient-to-br from-[#27251c] to-[#12110d] z-0"></div>
      <div className="absolute inset-4 border border-[#bf953f]/30 z-10 pointer-events-none"></div>
      <div className="absolute inset-6 border border-[#5e4d25] z-10 pointer-events-none"></div>
      
      {/* Corner Ornaments */}
      <div className="absolute top-4 left-4 size-10 border-t-2 border-l-2 border-[#bf953f] z-20"></div>
      <div className="absolute top-4 right-4 size-10 border-t-2 border-r-2 border-[#bf953f] z-20"></div>
      <div className="absolute bottom-4 left-4 size-10 border-b-2 border-l-2 border-[#bf953f] z-20"></div>
      <div className="absolute bottom-4 right-4 size-10 border-b-2 border-r-2 border-[#bf953f] z-20"></div>

      <header className="relative z-30 flex justify-between items-start">
        <div className="size-16 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-[#bf953f]/30">
          <span className="material-symbols-outlined text-4xl text-[#bf953f]">local_police</span>
        </div>
        <div className="text-right">
          <h3 className="text-[#d4af37] font-display italic text-xl tracking-wide font-semibold drop-shadow-md">
            {data.organization.split(' ').map((s,i)=><span key={i} className="block">{s}</span>)}
          </h3>
        </div>
      </header>

      <div className="mt-8 mb-4 text-center relative z-30">
        <h2 className="text-[#fdf6d8] text-2xl tracking-[0.2em] font-light font-display uppercase mb-2">Happy New Year</h2>
        <h1 className="text-8xl font-bold tracking-tight leading-none text-transparent bg-clip-text bg-gradient-to-b from-[#bf953f] via-[#fcf6ba] to-[#aa771c] drop-shadow-xl">
          2026
        </h1>
        <div className="h-[2px] w-32 mx-auto bg-gradient-to-r from-transparent via-[#bf953f] to-transparent mt-6"></div>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center relative my-4 z-30">
        <div className="relative">
          <div className="absolute -inset-1 rounded-[50%] bg-gradient-to-br from-[#bf953f] to-[#aa771c] blur opacity-40"></div>
          <div className="relative w-48 h-64 rounded-[50%] overflow-hidden border-4 border-[#bf953f] shadow-2xl">
            <img src={data.photoUrl} alt="Portrait" className="w-full h-full object-cover grayscale-[0.1]" />
          </div>
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-[#1a1914] px-4 py-1 border border-[#bf953f] rounded-full">
            <span className="text-[10px] font-black text-[#bf953f] uppercase tracking-widest">Official Issue</span>
          </div>
        </div>
      </div>

      <div className="mt-auto mb-4 relative z-30 text-center">
         <h3 className="text-3xl font-bold tracking-widest uppercase mb-1">{data.scouterName}</h3>
         <p className="text-[#d4af37] text-lg font-light italic mb-8">{data.designation}</p>
         
         <div className="max-w-xs mx-auto border-t border-[#bf953f]/30 pt-4">
            <p className="text-sm font-display leading-relaxed italic opacity-80">
              "{data.quote}"
            </p>
         </div>
      </div>

      <div className="flex justify-between items-center z-30 mt-4 opacity-50 px-4">
        <div className="text-[9px] uppercase tracking-widest font-bold">Commemorative Series</div>
        <div className="size-16 rounded-full border-2 border-[#800000] flex items-center justify-center rotate-12">
           <div className="text-[8px] font-black text-center text-red-800 leading-none">BE<br/>PREPARED</div>
        </div>
      </div>
    </div>
  );
};
