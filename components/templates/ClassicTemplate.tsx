import React from "react";
import { PosterData } from "../../types";
import Image from "next/image";
import logo from "@/assets/logo.png";

export const ClassicTemplate: React.FC<{ data: PosterData }> = ({ data }) => {
  return (
    <div className="h-full w-full relative flex flex-col p-8 overflow-hidden font-display bg-[#fdfdfd]">
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundColor: "#f0fdf4",
          backgroundImage:
            "radial-gradient(#13ec37 0.5px, transparent 0.5px), radial-gradient(#13ec37 0.5px, #f0fdf4 0.5px)",
          backgroundSize: "20px 20px",
          backgroundPosition: "0 0, 10px 10px",
        }}
      ></div>

      <div className="relative z-10 flex justify-between items-start mb-4">
        <div>
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
      </div>

      <div className="text-center mb-5">
        <span className="inline-flex items-center gap-2 rounded-full border border-yellow-500/30 bg-yellow-50 px-3 py-1 text-xs font-bold uppercase tracking-widest text-yellow-600 shadow-sm mb-4">
          <span className="material-symbols-outlined text-sm">celebration</span>
          Celebration
        </span>
        <h2 className="font-black text-5xl tracking-tighter text-green-900 drop-shadow-sm leading-none">
          HAPPY <br />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-yellow-500 to-yellow-700">
            NEW YEAR
          </span>
        </h2>
        <div className="mt-2 flex items-center justify-center gap-4">
          <span className="material-symbols-outlined text-3xl text-yellow-500">
            stars
          </span>
          <span
            className="font-black text-5xl drop-shadow-[0_2px_0_rgba(0,0,0,0.1)]"
            style={{ color: data.accentColor }}
          >
            2026
          </span>
          <span className="material-symbols-outlined text-3xl text-yellow-500">
            stars
          </span>
        </div>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center gap-6">
        <div className="relative">
          <div
            className="absolute -inset-3 animate-pulse rounded-full border-2 border-dashed opacity-30"
            style={{ borderColor: data.accentColor }}
          ></div>
          <div className="relative size-40 rounded-full border-[6px] border-white shadow-2xl overflow-hidden bg-slate-100 ring-4 ring-slate-900/5">
            <img
              src={data.photoUrl}
              alt="Member"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute bottom-1 right-2 size-10 rounded-full bg-green-900 text-white flex items-center justify-center border-2 border-white shadow-lg">
            <span className="material-symbols-outlined text-xl">verified</span>
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-3xl font-bold text-slate-900">
            {data.scouterName}
          </h3>
          <p
            className="text-sm font-bold uppercase tracking-widest text-green-800/70"
            style={{ color: `${data.accentColor}cc` }}
          >
            {data.designation}
          </p>
        </div>
      </div>

      <div className="mt-10">
        <div className="relative overflow-hidden rounded-xl border border-slate-200 bg-white/60 p-6 text-center backdrop-blur-sm shadow-sm">
          <span className="material-symbols-outlined absolute left-2 top-2 text-4xl opacity-10">
            format_quote
          </span>
          <p className="relative z-10 text-base font-medium italic leading-relaxed text-slate-700">
            "{data.quote}"
          </p>
        </div>
      </div>
    </div>
  );
};
