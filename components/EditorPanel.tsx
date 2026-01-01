"use client";
import { generateScoutQuoteAction } from "@/app/actions";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import {
  Check,
  Image as ImageIcon,
  Palette,
  Settings2,
  Sparkles,
  Upload,
  Wand2,
  X,
} from "lucide-react";
import React, { useCallback, useState } from "react";
import Cropper from "react-easy-crop";
import { COLOR_PRESETS, FONT_OPTIONS, SCOUT_TEMPLATES } from "../constants";
import { PosterData, PosterVariant } from "../types";

interface EditorPanelProps {
  data: PosterData;
  setData: (data: PosterData) => void;
  variant: PosterVariant;
  setVariant: (v: PosterVariant) => void;
}

const EditorPanel: React.FC<EditorPanelProps> = ({
  data,
  setData,
  variant,
  setVariant,
}) => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [tempImage, setTempImage] = useState<string | null>(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<any>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setData((prev) => {
      const newData = { ...prev, [name]: value };

      // Map old field names to new ones for backward compatibility
      if (name === "scoutName") {
        newData.scouterName = value;
      } else if (name === "rank") {
        newData.designation = value;
      } else if (name === "primaryColor") {
        newData.accentColor = value;
      } else if (name === "scouterName") {
        newData.scoutName = value;
      } else if (name === "designation") {
        newData.rank = value;
      } else if (name === "accentColor") {
        newData.primaryColor = value;
      }

      return newData;
    });
  };

  const handleAIGenerate = async () => {
    setIsGenerating(true);
    try {
      const newQuote = await generateScoutQuoteAction(
        data.scouterName,
        data.designation
      );
      setData({ ...data, quote: newQuote });
    } catch {
      alert("AI failed. Try again.");
    }
    setIsGenerating(false);
  };

  const onCropComplete = useCallback(
    (_croppedArea: any, croppedAreaPixels: any) => {
      setCroppedAreaPixels(croppedAreaPixels);
    },
    []
  );

  const getCroppedImg = async (
    imageSrc: string,
    pixelCrop: any
  ): Promise<string> => {
    const image = await new Promise<HTMLImageElement>((resolve) => {
      const img = new Image();
      img.onload = () => resolve(img);
      img.src = imageSrc;
    });

    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    if (!ctx) return imageSrc;

    canvas.width = pixelCrop.width;
    canvas.height = pixelCrop.height;
    ctx.drawImage(
      image,
      pixelCrop.x,
      pixelCrop.y,
      pixelCrop.width,
      pixelCrop.height,
      0,
      0,
      pixelCrop.width,
      pixelCrop.height
    );

    return canvas.toDataURL("image/jpeg");
  };

  const handleSaveCrop = async () => {
    if (tempImage && croppedAreaPixels) {
      const croppedImage = await getCroppedImg(tempImage, croppedAreaPixels);
      setData({ ...data, photoUrl: croppedImage });
      setTempImage(null);
    }
  };

  return (
    <Card className="w-full flex flex-col h-220 border-zinc-200  bg-white/50 backdrop-blur-xl overflow-hidden shadow-none">
      {/* Crop Overaly */}
      {tempImage && (
        <div className="absolute inset-0 z-100 bg-zinc-950 flex flex-col">
          <div className="p-4 border-b border-zinc-800 flex justify-between items-center bg-zinc-900">
            <h3 className="font-bold text-white flex items-center gap-2">
              <Settings2 className="w-4 h-4" /> Adjust Portrait
            </h3>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTempImage(null)}
              className="text-zinc-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>
          <div className="flex-1 relative bg-zinc-950">
            <Cropper
              image={tempImage}
              crop={crop}
              zoom={zoom}
              aspect={1}
              onCropChange={setCrop}
              onCropComplete={onCropComplete}
              onZoomChange={setZoom}
              cropShape="round"
              showGrid={false}
            />
          </div>
          <div className="p-6 bg-zinc-900 space-y-6">
            <div className="space-y-3">
              <div className="flex justify-between text-xs font-bold text-zinc-400 uppercase tracking-widest">
                <span>Zoom Level</span>
                <span>{Math.round(zoom * 100)}%</span>
              </div>
              <Slider
                value={[zoom]}
                min={1}
                max={3}
                step={0.1}
                onValueChange={([val]) => setZoom(val)}
                className="py-4"
              />
            </div>
            <Button
              onClick={handleSaveCrop}
              className="w-full h-12 bg-white text-black hover:bg-zinc-200 font-bold rounded-xl transition-all"
            >
              Apply Changes
            </Button>
          </div>
        </div>
      )}

      <Tabs defaultValue="content" className="flex-1 flex flex-col">
        <div className="px-6 pt-6">
          <TabsList className="grid w-full grid-cols-2 h-12 bg-zinc-100 dark:bg-zinc-800/50 p-1 rounded-xl">
            <TabsTrigger
              value="content"
              className="rounded-lg font-bold flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4" /> Content
            </TabsTrigger>
            <TabsTrigger
              value="design"
              className="rounded-lg font-bold flex items-center gap-2"
            >
              <Palette className="w-4 h-4" /> Design
            </TabsTrigger>
          </TabsList>
        </div>

        <div className="flex-1  overflow-y-auto px-6 py-8">
          <TabsContent
            value="content"
            className="mt-0 space-y-8 animate-in fade-in slide-in-from-bottom-2"
          >
            <div className="space-y-4">
              <Label className="text-xs font-black uppercase tracking-widest text-zinc-500">
                Personnel Details
              </Label>
              <Input
                name="scouterName"
                value={data.scouterName}
                onChange={handleInputChange}
                placeholder="Full Name"
                className="h-12 bg-white dark:bg-zinc-800/50 border-zinc-200 dark:border-zinc-700/50 rounded-xl px-4 font-bold"
              />
              <div className="grid grid-cols-2 gap-4">
                <Input
                  name="designation"
                  value={data.designation}
                  onChange={handleInputChange}
                  placeholder="Designation / Title"
                  className="h-12 bg-white dark:bg-zinc-800/50 border-zinc-200 dark:border-zinc-700/50 rounded-xl px-4"
                />
                <Input
                  name="year"
                  value={data.year || "2026"}
                  onChange={handleInputChange}
                  placeholder="Year"
                  className="h-12 bg-white dark:bg-zinc-800/50 border-zinc-200 dark:border-zinc-700/50 rounded-xl px-4"
                />
              </div>
              <Input
                name="organization"
                value={data.organization}
                onChange={handleInputChange}
                placeholder="Organization / Group"
                className="h-12 bg-white dark:bg-zinc-800/50 border-zinc-200 dark:border-zinc-700/50 rounded-xl px-4"
              />
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <Label className="text-xs font-black uppercase tracking-widest text-zinc-500">
                  New Year Quote
                </Label>
              </div>
              <Textarea
                name="quote"
                value={data.quote}
                onChange={handleInputChange}
                placeholder="Write your special 2026 greeting message..."
                className="min-h-30 bg-white dark:bg-zinc-800/50 border-zinc-200 dark:border-zinc-700/50 rounded-xl p-4 leading-relaxed resize-none"
              />
            </div>

            <div className="space-y-4">
              <Label className="text-xs font-black uppercase tracking-widest text-zinc-500">
                Portrait Photo
              </Label>
              <div className="flex gap-4 items-center">
                <div
                  className="group relative size-24 shrink-0 rounded-2xl overflow-hidden border-2 border-dashed border-zinc-300 dark:border-zinc-700 hover:border-primary transition-all cursor-pointer flex items-center justify-center bg-zinc-50 dark:bg-zinc-800/30"
                  onClick={() =>
                    document.getElementById("photo-upload")?.click()
                  }
                >
                  {data.photoUrl ? (
                    <>
                      <img
                        src={data.photoUrl}
                        className="w-full h-full object-cover"
                        alt="Preview"
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <Upload className="w-6 h-6 text-white" />
                      </div>
                    </>
                  ) : (
                    <ImageIcon className="w-8 h-8 text-zinc-400" />
                  )}
                  <input
                    id="photo-upload"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => {
                      if (e.target.files?.[0]) {
                        const reader = new FileReader();
                        reader.onload = (ev) =>
                          setTempImage(ev.target?.result as string);
                        reader.readAsDataURL(e.target.files[0]);
                      }
                    }}
                  />
                </div>
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-bold">Upload your photo</p>
                  <p className="text-xs text-zinc-500">
                    Recommended: Square format, high resolution for best
                    results.
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent
            value="design"
            className="mt-0 space-y-8 animate-in fade-in slide-in-from-bottom-2"
          >
            <div className="space-y-4">
              <Label className="text-xs font-black uppercase tracking-widest text-zinc-500">
                Color Palette
              </Label>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-zinc-50 dark:bg-zinc-800/50 rounded-xl border border-zinc-200 dark:border-zinc-700/50">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-[10px] font-bold text-zinc-400 uppercase">
                      Accent
                    </span>
                    <input
                      type="color"
                      value={data.accentColor}
                      onChange={(e) =>
                        setData({ ...data, accentColor: e.target.value })
                      }
                      className="size-6 rounded-full border-none p-0 cursor-pointer"
                    />
                  </div>
                  <div
                    className="h-2 rounded-full w-full"
                    style={{ backgroundColor: data.accentColor }}
                  />
                </div>
                <div className="p-4 bg-zinc-50 dark:bg-zinc-800/50 rounded-xl border border-zinc-200 dark:border-zinc-700/50">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-[10px] font-bold text-zinc-400 uppercase">
                      Secondary
                    </span>
                    <input
                      type="color"
                      value={data.secondaryColor}
                      onChange={(e) =>
                        setData({ ...data, secondaryColor: e.target.value })
                      }
                      className="size-6 rounded-full border-none p-0 cursor-pointer"
                    />
                  </div>
                  <div
                    className="h-2 rounded-full w-full"
                    style={{ backgroundColor: data.secondaryColor }}
                  />
                </div>
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                {COLOR_PRESETS.map((preset) => (
                  <button
                    key={preset.label}
                    onClick={() =>
                      setData({
                        ...data,
                        accentColor: preset.primary,
                        secondaryColor: preset.secondary,
                      })
                    }
                    className="group relative p-1 rounded-full border border-zinc-200 dark:border-zinc-700 hover:scale-110 transition-transform"
                    title={preset.label}
                  >
                    <div className="flex gap-0.5">
                      <div
                        className="size-6 rounded-full"
                        style={{ backgroundColor: preset.primary }}
                      />
                      <div
                        className="size-6 rounded-full -ml-2"
                        style={{ backgroundColor: preset.secondary }}
                      />
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <Label className="text-xs font-black uppercase tracking-widest text-zinc-500">
                Select Template
              </Label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 ">
                {SCOUT_TEMPLATES.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setVariant(t.id)}
                    className={cn(
                      "flex items-center justify-between px-2 py-2 rounded-xl border border-gray-200 transition-all group",
                      variant === t.id
                        ? "border-primary bg-primary/5 text-primary"
                        : "border-zinc-100 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700"
                    )}
                  >
                    <span
                      className={cn(
                        "text-sm font-bold",
                        variant === t.id
                          ? "text-primary"
                          : "text-zinc-600 dark:text-zinc-400"
                      )}
                    >
                      {t.name}
                    </span>
                    {variant === t.id && (
                      <Check className="w-4 h-4 text-primary" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <Label className="text-xs font-black uppercase tracking-widest text-zinc-500">
                Typography
              </Label>
              <div className="grid grid-cols-2 gap-3">
                {FONT_OPTIONS.map((font) => (
                  <button
                    key={font.value}
                    onClick={() => setData({ ...data, fontFamily: font.value })}
                    style={{ fontFamily: font.value }}
                    className={cn(
                      "p-4 text-left border-2 rounded-xl transition-all",
                      data.fontFamily === font.value
                        ? "border-primary bg-primary/5 text-primary"
                        : "border-zinc-100 dark:border-zinc-800 text-zinc-500"
                    )}
                  >
                    <p className="text-base font-bold leading-none">
                      {font.name}
                    </p>
                    <p className="text-[10px] mt-2 opacity-60">
                      Sample Text 2026
                    </p>
                  </button>
                ))}
              </div>
            </div>
          </TabsContent>
        </div>
      </Tabs>
    </Card>
  );
};

export default EditorPanel;

function Loader2(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
    </svg>
  );
}
