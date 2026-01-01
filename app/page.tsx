"use client";

import { toPng } from "html-to-image";
import { Download, Loader2, Sparkles } from "lucide-react";
import { useRef, useState } from "react";
import EditorPanel from "../components/EditorPanel";
import PosterCanvas from "../components/PosterCanvas";
import { Button } from "../components/ui/button";
import { DEFAULT_POSTER_DATA } from "../constants";
import { PosterData, PosterVariant } from "../types";

export default function Home() {
  const [posterData, setPosterData] = useState<PosterData>(DEFAULT_POSTER_DATA);
  const [variant, setVariant] = useState<PosterVariant>(
    DEFAULT_POSTER_DATA.variant
  );
  const [isDownloading, setIsDownloading] = useState(false);
  const posterRef = useRef<HTMLDivElement>(null);

  const handleDownload = async () => {
    if (posterRef.current === null) return;
    setIsDownloading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      const dataUrl = await toPng(posterRef.current, {
        cacheBust: true,
        pixelRatio: 4,
        quality: 1,
      });
      const link = document.createElement("a");
      link.download = `ScoutStudio-2026-${posterData.scouterName.replace(
        /\s+/g,
        "-"
      )}.png`;
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error("Download error", err);
      alert("High resolution rendering failed. Please try again.");
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F9FAFB] dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 transition-colors duration-500 overflow-x-hidden">
      {/* Background Decorative Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-[10%] -right-[10%] w-[40%] h-[40%] blur-[120px] opacity-20 animate-pulse"
          style={{ backgroundColor: posterData.accentColor }}
        />
        <div
          className="absolute -bottom-[10%] -left-[10%] w-[40%] h-[40%] blur-[120px] opacity-20 animate-pulse"
          style={{
            backgroundColor: posterData.secondaryColor,
            animationDelay: "1s",
          }}
        />
      </div>

      <header className="sticky top-0 z-50 w-full bg-white/70 dark:bg-zinc-950/70 backdrop-blur-xl border-b border-zinc-200 dark:border-zinc-800">
        <div className="max-w-450 mx-auto px-6 py-4 flex flex-col gap-5 md:flex-row items-center justify-between">
          <div className="flex items-center gap-4">
            <div>
              <h1 className="text-xl font-bold tracking-tight">
                TOSG Photo Frame
              </h1>
              <p className="text-[10px] font-medium text-zinc-500 uppercase tracking-[0.2em]">
                2026 Greeting Engine
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Button
              onClick={handleDownload}
              disabled={isDownloading}
              className="h-11 px-8 rounded-xl font-bold transition-all hover:scale-105 active:scale-95 shadow-lg shadow-primary/20"
              style={{
                backgroundColor: posterData.accentColor,
                color: "#fff",
              }}
            >
              {isDownloading ? (
                <Loader2 className="w-4 h-4 animate-spin mr-2" />
              ) : (
                <Download className="w-4 h-4 mr-2" />
              )}
              {isDownloading ? "PREPARING..." : "DOWNLOAD POSTER"}
            </Button>
          </div>
        </div>
      </header>

      <main className="relative z-10 flex-1 flex flex-col lg:flex-row items-start justify-center gap-12 p-6 lg:p-12 max-w-400 mx-auto w-full">
        {/* Canvas Section */}
        <div className="flex flex-col items-center gap-8 w-full lg:flex-1 sticky lg:top-32">
          <div className="relative group/canvas w-full max-w-125 max-h-220  shadow-2xl shadow-black/10 rounded-2xl overflow-hidden ring-1 ring-zinc-200 dark:ring-zinc-800">
            <div ref={posterRef} className="w-full h-full">
              <PosterCanvas data={posterData} variant={variant} />
            </div>
          </div>
        </div>

        {/* Editor Section */}
        <div className="w-full lg:w-112.5 shrink-0">
          <EditorPanel
            data={posterData}
            setData={setPosterData}
            variant={variant}
            setVariant={setVariant}
          />
        </div>
      </main>

      <footer className="mt-auto py-8 border-t border-zinc-200 dark:border-zinc-800 text-center">
        <p className="text-xs text-zinc-500 font-medium">
          &copy; 2025-2026 Scout Poster Studio. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
