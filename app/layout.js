import "./globals.css";
import { ReactLenis } from "lenis/react";
import { Inter, Crimson_Pro } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const crimson = Crimson_Pro({ subsets: ["latin"], variable: "--font-crimson" });
export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${crimson.variable}`}>
      <body>
        <ReactLenis root options={{ duration: 3, wheelMultiplier: 1.5 }}>
          {children}
        </ReactLenis>
      </body>
    </html>
  );
}
