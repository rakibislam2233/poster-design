
import React from 'react';
import { PosterData } from '../../types';

export const MinimalTemplate: React.FC<{ data: PosterData }> = ({ data }) => {
  return (
    <div className="h-full w-full relative flex flex-col p-12 bg-white" style={{ fontFamily: data.fontFamily }}>
      <header className="flex justify-between items-center mb-12">
        <div style={{ transform: `scale(${data.logoScale})` }}>
          <img src={data.logoUrl} className="h-16 object-contain" />
        </div>
        <div className="text-right">
          <p className="text-xs font-black uppercase tracking-widest text-slate-400">Organization</p>
          <p className="text-sm font-bold" style={{ color: data.accentColor }}>{data.organization}</p>
        </div>
      </header>

      <div className="flex-1 flex gap-12 items-center">
        <div className="flex-1 space-y-8">
           <h1 className="text-7xl font-black tracking-tighter leading-none text-slate-900">
             NEW<br/>YEAR<br/>2026
           </h1>
           <div className="h-2 w-24" style={{ backgroundColor: data.accentColor }}></div>
           <p className="text-xl leading-relaxed italic text-slate-600 max-w-sm">
             "{data.quote}"
           </p>
        </div>
        <div className="relative w-80 aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl bg-slate-100 border-8 border-white ring-1 ring-slate-100">
           <img 
            src={data.photoUrl} 
            className="w-full h-full object-cover transition-transform" 
            style={{ 
              transform: `scale(${data.photoScale}) translate(${data.photoX}px, ${data.photoY}px)` 
            }} 
          />
        </div>
      </div>

      <footer className="mt-12 pt-8 border-t border-slate-100 flex justify-between items-end">
        <div>
          <h3 className="text-3xl font-black text-slate-900">{data.scouterName}</h3>
          <p className="text-sm font-bold uppercase tracking-[0.3em]" style={{ color: data.accentColor }}>{data.designation}</p>
        </div>
        <div className="flex items-center gap-2 opacity-30">
          <span className="material-symbols-outlined text-4xl">{data.mainIcon}</span>
          <span className="text-xs font-black uppercase tracking-widest">BE PREPARED</span>
        </div>
      </footer>
    </div>
  );
};
