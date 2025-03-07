import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import  SideNavbar  from "@/components/Header/SideNavbar";
import "@fortawesome/fontawesome-svg-core/styles.css";
import BottomNavbar from "@/components/Header/BottomNav";
import Footer from "@/components/footer/Footer";



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Extechnology",
  description: "Perfect IT Solution",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <main>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            themes={["dark", "light"]}
          >
            <SideNavbar />
            {children}
            <BottomNavbar/>
            <Footer/>
          </ThemeProvider>
        </main>
      </body>
    </html>
  );
}
