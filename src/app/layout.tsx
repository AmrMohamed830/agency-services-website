import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { LanguageProvider } from "@/lib/LanguageContext";
import { agencyConfig } from "@/data/agency";
import "./globals.css";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-cairo",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${agencyConfig.name} (${agencyConfig.arabicName}) | ${agencyConfig.tagline}`,
    template: `%s | ${agencyConfig.name}`,
  },
  description: agencyConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${cairo.variable} font-sans h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-[#030712] text-[#F8FAFC] font-sans selection:bg-blue-500 selection:text-white relative bg-dark-mesh">
        <LanguageProvider>
          <Navbar />
          <main className="flex-1 flex flex-col relative z-10">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
