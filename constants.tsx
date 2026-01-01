import { PosterData, PosterVariant } from "./types";

export const DEFAULT_POSTER_DATA: PosterData = {
  scouterName: "MD. ARAFAT HOSSAIN",
  designation: "SENIOR ROVER MATE",
  organization: "THAKURGAON OPEN SCOUT GROUP",
  quote:
    "Wishing everyone a New Year full of adventure, service, friendship and new achievements. Be Prepared! Happy New Year 2026 from Thakurgaon Open Scout Group.",
  photoUrl:
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400",
  logoUrl:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Emblem_of_the_Scouts_Association_of_Bangladesh.svg/1200px-Emblem_of_the_Scouts_Association_of_Bangladesh.svg.png",
  accentColor: "#13ec37",
  secondaryColor: "#fbbf24",
  theme: "light",
  variant: PosterVariant.CLASSIC,
  fontFamily: "Plus Jakarta Sans",
  mainIcon: "https://cdn-icons-png.flaticon.com/512/616/616408.png",
  logoScale: 1,
  photoScale: 1,
  photoX: 0,
  photoY: 0,
  scoutName: "MD. ARAFAT HOSSAIN",
  rank: "SENIOR ROVER MATE",
  year: "2026",
  primaryColor: "#13ec37",
  website: "scout-group.org",
};

export const FONT_OPTIONS = [
  { name: "Display", value: "var(--font-plus-jakarta)" },
  { name: "Elegant Serif", value: "var(--font-playfair)" },
  { name: "Clean", value: "var(--font-inter)" },
  { name: "Bold", value: "var(--font-montserrat)" },
  { name: "Modern", value: "var(--font-space-grotesk)" },
];

export const COLOR_PRESETS = [
  { primary: "#13ec37", secondary: "#fbbf24", label: "Scout Standard" },
  { primary: "#facc15", secondary: "#000000", label: "Golden Night" },
  { primary: "#22d3ee", secondary: "#1e1b4b", label: "Cyber Neon" },
  { primary: "#f43f5e", secondary: "#4c0519", label: "Crimson Royal" },
  { primary: "#00512c", secondary: "#ffffff", label: "Forest Prime" },
  { primary: "#3b82f6", secondary: "#ffffff", label: "Ocean Breeze" },
];

export const SCOUT_TEMPLATES = [
  { id: PosterVariant.CLASSIC, name: "Classic Template" },
  { id: PosterVariant.MODERN, name: "Modern Template" },
  { id: PosterVariant.FESTIVE, name: "Festive Template" },
  { id: PosterVariant.FORMAL, name: "Formal Template" },
  { id: PosterVariant.SCENIC, name: "Scenic Template" },
  { id: PosterVariant.MINIMAL, name: "Minimal Template" },
  { id: PosterVariant.BADGE, name: "Badge Template" },
  { id: PosterVariant.EDITORIAL, name: "Editorial Template" },
];
