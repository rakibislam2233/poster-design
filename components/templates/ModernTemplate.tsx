import React from "react";
import { PosterData } from "../../types";
import Image from "next/image";
import logo from "@/assets/logo.png";
export const ModernTemplate: React.FC<{ data: PosterData }> = ({ data }) => {
  return (
    <div className="h-full w-full relative flex flex-col p-10 overflow-hidden font-display bg-white">
      {/* Geometric background elements */}
      <div
        className="absolute top-0 right-0 w-2/3 h-1/2 bg-slate-50 triangle-top-right opacity-50"
        style={{ clipPath: "polygon(100% 0, 0 0, 100% 100%)" }}
      ></div>
      <div
        className="absolute bottom-0 left-0 w-1/2 h-1/3 opacity-30"
        style={{
          backgroundColor: data.accentColor,
          clipPath: "polygon(0 0, 0 100%, 100% 100%)",
        }}
      ></div>
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #111 1px, transparent 0)",
          backgroundSize: "24px 24px",
        }}
      ></div>

      <header className="relative z-10 flex justify-between items-start">
        <div className="flex flex-col items-center">
          <Image
            src={logo}
            alt="Logo"
            width={80}
            height={80}
            className="object-contain -mt-4"
          />
        </div>
        <div className="text-right">
          <h3
            className="font-black text-lg uppercase leading-tight tracking-tight text-green-900"
            style={{ color: data.accentColor }}
          >
            {data.organization.split(" ").slice(0, 1)}
            <br />
            {data.organization.split(" ").slice(1).join(" ")}
          </h3>
          <div
            className="mt-1 h-1 w-full rounded-full bg-linear-to-r from-transparent"
            style={{
              backgroundImage: `linear-gradient(to right, transparent, ${data.accentColor})`,
            }}
          ></div>
        </div>
      </header>

      <div className="mt-12 text-center relative z-10">
        <div className="inline-block bg-yellow-400 text-green-900 text-[10px] font-black uppercase px-3 py-1 tracking-widest rounded-sm mb-4 transform rotate-1">
          Official Commemoration
        </div>
        <h1 className="text-5xl font-black tracking-tighter leading-none text-slate-900 italic">
          HAPPY NEW YEAR
        </h1>
        <div
          className="text-8xl font-black mt-2 leading-none text-transparent bg-clip-text bg-gradient-to-br from-green-900 via-green-600 to-green-900"
          style={{
            backgroundImage: `linear-gradient(to bottom right, ${data.accentColor}, #000)`,
          }}
        >
          2026
        </div>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center relative my-8">
        <div className="relative">
          <div className="absolute inset-0 transform rotate-12 bg-yellow-500 rounded-xl opacity-20"></div>
          <div className="relative size-60 rounded-xl overflow-hidden shadow-2xl border-8 border-white ring-1 ring-slate-900/10">
            <img
              src={data.photoUrl}
              alt="Portrait"
              className="w-full h-full object-cover grayscale-[0.2]"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
              <h3 className="text-white text-2xl font-bold uppercase tracking-wide leading-tight">
                {data.scouterName}
              </h3>
              <p className="text-yellow-400 text-xs font-bold uppercase tracking-widest">
                {data.designation}
              </p>
            </div>
          </div>
          <div className="absolute -top-4 -right-4 size-12 rounded-full bg-green-500 text-slate-900 flex items-center justify-center shadow-lg transform -rotate-12 border-4 border-white">
            <span className="material-symbols-outlined font-black">
              verified
            </span>
          </div>
        </div>
      </div>

      <footer className="mt-auto pt-6 border-t-2 border-slate-100 flex items-end justify-between relative z-10">
        <div className="max-w-[70%]">
          <p className="text-sm font-bold leading-relaxed text-slate-700 italic border-l-4 border-yellow-500 pl-4">
            "{data.quote}"
          </p>
        </div>
        <div className="flex flex-col items-end opacity-50">
          <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
            BE PREPARED
          </span>
          <span className="text-[9px] font-bold text-slate-300">
            ID: 2026-X-GEN
          </span>
        </div>
      </footer>
    </div>
  );
};
