
import React from 'react';
import { PosterData } from '../../types';

export const ScenicTemplate: React.FC<{ data: PosterData }> = ({ data }) => {
  return (
    <div className="h-full w-full relative flex flex-col p-10 overflow-hidden font-display bg-white">
      <div className="absolute inset-0 z-0">
        <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAsrsbNkRn570zdvz4uZxdfFrrRrNW7FE4lLRyRPUjDaaS7D-sK6nmW4Ee-7aI6rfeUkEn27v3bfgNxVJL6LtFMEw6UUPllNqELEs97vOeckL-qVCwnNuT_z-SCE0dLrUM4OxqxDd_NjS82-_K7dulCXZ__0cVMrPw3txrgiaWQAUyXA97L4jzVKrbJBARxpKq2iORY9mmD2sbAqi8Tecg-Lsc4JP3uinT6lLk0tW085b0FSn7tbVHyyGmMTXd6K844IVSbthuAc_8" className="w-full h-full object-cover brightness-50" alt="Scenic" />
      </div>
      <div className="absolute inset-0 bg-green-900/40 mix-blend-overlay z-0"></div>

      <header className="relative z-10 flex flex-col items-center text-center">
         <span className="material-symbols-outlined text-6xl text-white opacity-80 mb-2">landscape</span>
         <h3 className="text-white text-2xl font-bold uppercase tracking-[0.3em] leading-tight">
            {data.organization}
         </h3>
         <div className="h-px w-32 bg-white/30 mt-4"></div>
      </header>

      <div className="flex-1 flex flex-col items-center justify-center gap-10 relative z-10">
         <div className="text-center space-y-4">
            <h1 className="text-6xl font-black text-white leading-none tracking-tighter drop-shadow-2xl">
               HAPPY <br/> <span className="text-green-400">NEW YEAR</span>
            </h1>
            <div className="text-9xl font-black text-transparent stroke-white" style={{ WebkitTextStroke: '2px white' }}>
               2026
            </div>
         </div>

         <div className="flex items-center gap-6">
            <div className="relative">
              <div className="size-48 rounded-full border-4 border-white shadow-2xl overflow-hidden backdrop-blur-sm bg-white/10">
                <img src={data.photoUrl} alt="Portrait" className="w-full h-full object-cover" />
              </div>
              <span className="material-symbols-outlined absolute -bottom-2 -right-2 text-green-400 text-4xl drop-shadow-lg rotate-12">spa</span>
            </div>
            <div className="text-left text-white drop-shadow-lg">
               <h3 className="text-3xl font-bold leading-none mb-2">{data.scouterName}</h3>
               <p className="text-lg font-medium tracking-widest uppercase opacity-70 italic">{data.designation}</p>
            </div>
         </div>
      </div>

      <footer className="mt-auto relative z-10">
         <div className="bg-black/40 backdrop-blur-xl rounded-2xl p-6 border border-white/10 text-center">
            <p className="text-white text-base font-medium italic leading-relaxed">
               "{data.quote}"
            </p>
         </div>
         <div className="mt-8 flex justify-between items-center px-4">
            <span className="text-[10px] text-white/40 uppercase tracking-widest font-black">Variant Scenic V2</span>
            <div className="text-white/80 font-bold tracking-[0.5em] text-sm uppercase">BE PREPARED</div>
         </div>
      </footer>
    </div>
  );
};
