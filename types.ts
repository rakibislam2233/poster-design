
export enum PosterVariant {
  CLASSIC = "classic",
  MODERN = "modern",
  FESTIVE = "festive",
  FORMAL = "formal",
  SCENIC = "scenic",
  LANDSCAPE = "landscape",
  MINIMAL = "minimal",
  BADGE = "badge",
  EDITORIAL = "editorial",
  VINTAGE = "vintage",
  ROYAL = "royal",
}

export type FontFamily =
  | "Plus Jakarta Sans"
  | "Cinzel"
  | "Newsreader"
  | "Noto Sans";

// Allow string for backward compatibility
export type FontFamilyString = FontFamily | string;

export interface PosterData {
  scouterName: string;
  designation: string;
  organization: string;
  quote: string;
  photoUrl: string;
  logoUrl: string;
  accentColor: string;
  secondaryColor: string;
  theme: "light" | "dark";
  variant: PosterVariant;
  fontFamily: FontFamilyString;
  mainIcon: string;
  photoScale: number;
  photoX: number;
  photoY: number;
  logoScale: number;
  // Backward compatibility fields for templates
  scoutName?: string;
  rank?: string;
  year?: string;
  primaryColor?: string;
  website?: string;
}

export const DEFAULT_POSTER_DATA: PosterData = {
  scouterName: "Md. Rakibul Islam",
  designation: "Rover Scout Leader",
  organization: "Thakurgaon Open Scout Group",
  quote:
    "Wishing you a New Year filled with adventure, service, friendship, and great achievements. Be Prepared for 2026!",
  photoUrl:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCZ-BqNpIT9n-qrjTmuI9RcfmnXYhtNEfdsm-mHl21uTU3QyVV8PTb24XMfWWZZ9ttcuDsqKaCCJyugrJ9SER7EnmFlU17Shy9yQhsM7HqdEolpLGktpAXBwN0TUVWJnFHnie39NzQJsZXEhGTXhS88Mg9xf2xqJ3UWuahIA-MhleO2aN7fvcCQof4W2gm2Uwsa4Uwt5Y6_3eaclNfAWCVrw_5UhpxmAbdZ84R3jerfTXIHo36MHOjF4B9E6FVCjLqcC5JIdg-YsAg",
  logoUrl:
    "https://upload.wikimedia.org/wikipedia/commons/9/99/Emblem_of_the_Scouts_Association_of_Bangladesh.svg",
  accentColor: "#FF0000",
  secondaryColor: "#0000FF",
  theme: "light",
  variant: PosterVariant.CLASSIC,
  fontFamily: "Plus Jakarta Sans",
  mainIcon: "https://cdn-icons-png.flaticon.com/512/616/616408.png",
  photoScale: 1,
  photoX: 0,
  photoY: 0,
  logoScale: 0,
  // Backward compatibility fields
  scoutName: "Md. Rakibul Islam",
  rank: "Rover Scout Leader",
  year: "2026",
  primaryColor: "#FF0000",
  website: "scout-group.org",
};
