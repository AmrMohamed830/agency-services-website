import type { Metadata, Viewport } from "next";
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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
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
      className={`${cairo.variable} font-sans h-full antialiased dark overflow-x-hidden w-full max-w-full`}
    >
      <body className="min-h-full flex flex-col bg-[#060B18] text-[#F8FAFC] font-sans selection:bg-blue-500 selection:text-white relative bg-dark-mesh overflow-x-hidden w-full max-w-full">
        <LanguageProvider>
          <Navbar />
          <main className="flex-1 flex flex-col relative z-10 w-full max-w-full overflow-x-hidden">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}

