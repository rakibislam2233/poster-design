import React from "react";
import { PosterData } from "../../types";
import Image from "next/image";
import logo from "@/assets/logo.png";
export const FestiveTemplate: React.FC<{ data: PosterData }> = ({ data }) => {
  return (
    <div className="h-full w-full relative flex flex-col p-10 overflow-hidden font-display bg-[#0a1a0f] text-white">
      <div className="absolute inset-0 bg-linear-to-b from-black/60 via-transparent to-black/80 z-0"></div>
      <div
        className="absolute inset-0 opacity-20 z-0"
        style={{
          backgroundImage:
            'url("https://www.transparenttextures.com/patterns/stardust.png")',
        }}
      ></div>

      {/* Decorative Fireworks SVGs */}
      <div className="absolute top-10 left-4 w-32 h-32 opacity-30 z-0">
        <svg
          className="w-full h-full text-yellow-500 animate-pulse"
          viewBox="0 0 100 100"
        >
          <circle cx="50" cy="50" r="2" fill="currentColor" />
          <path
            d="M50 30 L50 10 M50 70 L50 90 M30 50 L10 50 M70 50 L90 50 M36 36 L22 22 M64 64 L78 78"
            stroke="currentColor"
            strokeWidth="1"
          />
        </svg>
      </div>

      <header className="relative z-10 flex justify-between items-start">
        <Image
          src={logo}
          alt="Logo"
          width={80}
          height={80}
          className="object-contain -mt-4"
        />
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
        <h2 className="text-white text-lg font-bold tracking-[0.4em] uppercase opacity-70 mb-2">
          Happy New Year
        </h2>
        <h1 className="text-9xl font-black italic tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-b from-white via-yellow-200 to-yellow-600 drop-shadow-[0_5px_15px_rgba(255,255,255,0.2)]">
          2026
        </h1>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center relative my-4">
        <div className="relative group">
          <div
            className="absolute -inset-4 rounded-full bg-gradient-to-r from-yellow-500 via-green-500 to-yellow-500 opacity-50 blur-xl animate-spin-slow"
            style={{ animationDuration: "8s" }}
          ></div>
          <div className="relative size-56 rounded-full border-4 border-white overflow-hidden shadow-[0_0_50px_rgba(255,255,255,0.1)]">
            <img
              src={data.photoUrl}
              alt="Member"
              className="w-full h-full object-cover scale-110"
            />
          </div>
          <div className="absolute bottom-4 -right-2 bg-purple-600 rounded-full size-12 flex items-center justify-center border-4 border-[#0a1a0f] shadow-lg">
            <span className="material-symbols-outlined text-2xl font-bold">
              verified
            </span>
          </div>
        </div>
      </div>

      <div className="mt-auto relative z-10 w-full">
        <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 text-center border border-white/10 shadow-2xl">
          <h3 className="text-3xl font-black tracking-tight mb-1 uppercase">
            {data.scouterName}
          </h3>
          <p
            className="text-sm font-bold uppercase tracking-[0.2em] mb-4"
            style={{ color: data.accentColor }}
          >
            {data.designation}
          </p>
          <div className="h-px w-24 bg-white/20 mx-auto mb-4"></div>
          <p className="text-xs md:text-sm font-medium italic opacity-80 leading-relaxed max-w-sm mx-auto">
            "{data.quote}"
          </p>
        </div>
        <div className="mt-6 flex justify-center items-center gap-3 opacity-50">
          <div className="h-px w-10 bg-white"></div>
          <span className="text-[10px] font-black uppercase tracking-[0.4em]">
            Be Prepared
          </span>
          <div className="h-px w-10 bg-white"></div>
        </div>
      </div>
    </div>
  );
};
