import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

// ✅ Initialize Playfair Display for headers
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
});

// ✅ Initialize Inter for body text (global)
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Greenfield International School",
  description: "Excellence in Education - Modern Learning Experience",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* Apply Inter globally */}
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}