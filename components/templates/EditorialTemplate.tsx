
import React from 'react';
import { PosterData } from '../../types';

export const EditorialTemplate: React.FC<{ data: PosterData }> = ({ data }) => {
  return (
    <div className="h-full w-full relative flex flex-col bg-white overflow-hidden" style={{ fontFamily: data.fontFamily }}>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50"></div>
      
      <div className="relative z-10 grid grid-cols-2 h-full">
        <div className="p-12 flex flex-col justify-between">
           <div>
              <img src={data.logoUrl} className="h-16 mb-12 object-contain" style={{ transformOrigin: 'left center', transform: `scale(${data.logoScale})` }} />
              <h2 className="text-8xl font-black italic tracking-tighter leading-[0.85] text-slate-900 mb-8">
                THE<br/>YEAR<br/>OF<br/><span style={{ color: data.accentColor }}>SCOUT</span>
              </h2>
           </div>
           
           <div className="space-y-6">
              <div className="h-1 w-20 bg-slate-900"></div>
              <p className="text-lg font-medium leading-relaxed italic text-slate-600">
                "{data.quote}"
              </p>
              <div>
                <p className="text-xs font-black uppercase tracking-widest text-slate-400">Published for</p>
                <p className="text-sm font-bold uppercase">{data.organization}</p>
              </div>
           </div>
        </div>

        <div className="relative p-12 flex flex-col items-center justify-center">
           <div className="absolute top-12 right-12 flex items-center gap-2">
             <span className="material-symbols-outlined text-4xl" style={{ color: data.accentColor }}>{data.mainIcon}</span>
             <span className="text-6xl font-black text-slate-200">2026</span>
           </div>

           <div className="relative w-full aspect-[4/5] rounded-[2rem] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.2)]">
              <img 
                src={data.photoUrl} 
                className="w-full h-full object-cover" 
                style={{ 
                  transform: `scale(${data.photoScale}) translate(${data.photoX}px, ${data.photoY}px)` 
                }} 
              />
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
                 <h3 className="text-3xl font-black text-white">{data.scouterName}</h3>
                 <p className="text-sm font-bold uppercase tracking-widest text-white/70">{data.designation}</p>
              </div>
           </div>
           
           <div className="mt-12 text-center">
             <p className="text-[10px] font-black tracking-[0.5em] text-slate-300 uppercase">Be Prepared • Service • Adventure</p>
           </div>
        </div>
      </div>
    </div>
  );
};
