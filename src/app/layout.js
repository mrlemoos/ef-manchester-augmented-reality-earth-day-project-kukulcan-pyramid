import Footer from "~/components/footer";
import { FontSans } from "~/globals/styles/fonts";
import { cn } from "~/util/css";
import "./globals.css";

const APP_NAME = "X6 C2.2 class @ EF Manchester";

/**
 * @type {import('next').Metadata}
 */
export const metadata = {
  title: APP_NAME,
  description: APP_NAME,
  applicationName: APP_NAME,
  keywords: [
    "X6",
    "C2.2",
    "c2",
    "ef",
    "education first",
    "manchester",
    "project",
    "earth",
    "earth-day",
    "day",
    "england",
    "school",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-GB">
      <body className={cn(FontSans.className, "min-h-screen")}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
