import "./globals.css";
import { ReactLenis } from "lenis/react";

export default function RootLayout({ children }) {
   return (
      <html lang="en">
         <body>
            <ReactLenis root options={{ lerp: 0.05 }}>
               {children}
            </ReactLenis>
         </body>
      </html>
   );
}
