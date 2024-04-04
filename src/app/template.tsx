
import { Inter } from "next/font/google";
import { CoFooter, CoNavbar, CoPreloader, PageCodeWrap } from "@/devlink";
// import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CoPreloader />
      <PageCodeWrap />
      <CoNavbar
        linkAbout={{ href: '/about' }}
        linkContact={{ href: '/contact' }}
        linkServices={{ href: '/#services' }}
        linkWork={{ href: '/portfolio' }} />
      {children}
      <CoFooter />
    </>
  )
}