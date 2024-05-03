import { Inter, PT_Serif } from "next/font/google";

export const FontSans = Inter({ subsets: ["latin"] });

export const FontSansSerif = PT_Serif({
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-sans",
  subsets: ["latin"],
});
