"use client";

import { cn } from "@/lib/utils";
import React from "react";
import { PosterData, PosterVariant } from "../types";
import { ClassicTemplate } from "./templates/ClassicTemplate";
import { ModernTemplate } from "./templates/ModernTemplate";
import { FestiveTemplate } from "./templates/FestiveTemplate";
import { FormalTemplate } from "./templates/FormalTemplate";
import { ScenicTemplate } from "./templates/ScenicTemplate";
import { MinimalTemplate } from "./templates/MinimalTemplate";
import { BadgeTemplate } from "./templates/BadgeTemplate";
import { EditorialTemplate } from "./templates/EditorialTemplate";

interface PosterCanvasProps {
  data: PosterData;
  variant: PosterVariant;
  id?: string;
}

const PosterCanvas: React.FC<PosterCanvasProps> = ({ data, variant, id }) => {
  // Create a data object that ensures backward compatibility for templates
  const compatibleData = {
    ...data,
    // Ensure backward compatibility for templates that use old field names
    scoutName: data.scoutName || data.scouterName,
    rank: data.rank || data.designation,
    year: data.year || "2026",
    primaryColor: data.primaryColor || data.accentColor,
    secondaryColor: data.secondaryColor,
    fontFamily: data.fontFamily,
    organization: data.organization,
    quote: data.quote,
    photoUrl: data.photoUrl,
    logoUrl: data.logoUrl,
    accentColor: data.accentColor,
    theme: data.theme,
    variant: data.variant,
    mainIcon: data.mainIcon,
    photoScale: data.photoScale,
    photoX: data.photoX,
    photoY: data.photoY,
    logoScale: data.logoScale,
  };

  const dynamicStyle = {
    "--primary-color":
      compatibleData.primaryColor || compatibleData.accentColor,
    "--secondary-color": compatibleData.secondaryColor,
    "--poster-font": compatibleData.fontFamily || "var(--font-plus-jakarta)",
  } as React.CSSProperties;

  const renderTemplate = () => {
    switch (variant) {
      case PosterVariant.CLASSIC:
        return <ClassicTemplate data={compatibleData} />;
      case PosterVariant.MODERN:
        return <ModernTemplate data={compatibleData} />;
      case PosterVariant.FESTIVE:
        return <FestiveTemplate data={compatibleData} />;
      case PosterVariant.FORMAL:
        return <FormalTemplate data={compatibleData} />;
      case PosterVariant.SCENIC:
        return <ScenicTemplate data={compatibleData} />;
      case PosterVariant.MINIMAL:
        return <MinimalTemplate data={compatibleData} />;
      case PosterVariant.BADGE:
        return <BadgeTemplate data={compatibleData} />;
      case PosterVariant.EDITORIAL:
        return <EditorialTemplate data={compatibleData} />;
      default:
        return <ClassicTemplate data={compatibleData} />;
    }
  };

  return (
    <div
      id={id}
      className="poster-canvas-root overflow-hidden rounded-2xl  bg-white"
      style={dynamicStyle}
    >
      {renderTemplate()}
    </div>
  );
};

export default PosterCanvas;
