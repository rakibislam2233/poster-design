
import React from 'react';
import { PosterData } from '../../types';

export const BadgeTemplate: React.FC<{ data: PosterData }> = ({ data }) => {
  return (
    <div className="h-full w-full relative flex flex-col items-center justify-center p-12 bg-slate-50 overflow-hidden" style={{ fontFamily: data.fontFamily }}>
      {/* Background large icon */}
      <span className="material-symbols-outlined absolute text-[600px] opacity-[0.03] rotate-12" style={{ color: data.accentColor }}>
        {data.mainIcon}
      </span>

      <div className="relative z-10 w-full max-w-lg text-center space-y-8">
        <div className="inline-block px-4 py-1 rounded-full border-2 border-slate-200 text-xs font-bold uppercase tracking-[0.4em] mb-4">
          Happy New Year
        </div>
        
        <h1 className="text-8xl font-black tracking-tighter" style={{ color: data.accentColor }}>2026</h1>

        <div className="relative mx-auto size-72">
          <div className="absolute inset-0 rounded-full border-[12px] border-white shadow-xl bg-white overflow-hidden">
             <img 
              src={data.photoUrl} 
              className="w-full h-full object-cover" 
              style={{ 
                transform: `scale(${data.photoScale}) translate(${data.photoX}px, ${data.photoY}px)` 
              }} 
            />
          </div>
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white px-6 py-2 rounded-xl shadow-lg border border-slate-100 min-w-[200px]">
             <h3 className="text-xl font-black text-slate-900 leading-none">{data.scouterName}</h3>
             <p className="text-[10px] font-bold uppercase tracking-widest mt-1" style={{ color: data.accentColor }}>{data.designation}</p>
          </div>
        </div>

        <div className="pt-8">
          <p className="text-lg italic font-medium leading-relaxed text-slate-700">
            "{data.quote}"
          </p>
        </div>

        <div className="flex flex-col items-center gap-4 pt-4">
          <img src={data.logoUrl} className="h-20 object-contain" style={{ transform: `scale(${data.logoScale})` }} />
          <p className="text-sm font-black uppercase tracking-widest text-slate-400">{data.organization}</p>
        </div>
      </div>
    </div>
  );
};
