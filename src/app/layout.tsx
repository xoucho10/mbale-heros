import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mbale Heroes FC - Pride of the East | Est. 1960",
  description: "Official website of Mbale Heroes FC - The Surgeons, Bakhebi, 2x Uganda Cup Winners",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#f8f9fb]">
        {/* ===== IDENTICAL HEADER ON ALL PAGES - CLUB LOGO ===== */}
        <header className="sticky top-0 z-50 bg-black text-white border-b-4 border-[#114b8d]">
          <div className="bg-[#114b8d] text-white text-[10px] py-1.5 text-center tracking-[0.2em] uppercase font-bold">
            THE PRIDE OF THE EAST • BAKHEBI • MBALE • EST. 1960 • 2x UGANDA CUP WINNERS
          </div>
          <div className="max-w-[1300px] mx-auto px-4 py-3 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3 font-black text-xl tracking-tighter">
              <div className="w-10 h-10 relative bg-white rounded-full p-1">
                <Image src="/logo.png" alt="Mbale Heroes Club Logo" fill className="object-contain" />
              </div>
              <span>MBALE <span className="text-[#facc15]">HEROES</span></span>
            </Link>
            <div className="hidden md:flex items-center gap-6 font-black text-[11px] uppercase tracking-widest">
              <Link href="/" className="opacity-70 hover:text-[#facc15]">Home</Link>
              <Link href="/team" className="opacity-70 hover:text-[#facc15]">Team</Link>
              <Link href="/fixtures" className="opacity-70 hover:text-[#facc15]">Fixtures</Link>
              <Link href="/news" className="opacity-70 hover:text-[#facc15]">News</Link>
              <Link href="/shop" className="opacity-70 hover:text-[#facc15]">Shop</Link>
              <Link href="/club" className="opacity-70 hover:text-[#facc15]">Club</Link>
            </div>
            <Link href="/tickets" className="hidden md:block bg-[#facc15] text-black px-5 py-2.5 rounded-full font-black text-[11px]">Buy Tickets</Link>
          </div>
        </header>

        <main className="flex-1">{children}</main>

        {/* ===== IDENTICAL FOOTER ON ALL PAGES - CLUB LOGO + DEVELOPER LOGO ===== */}
        <footer className="bg-black text-white border-t-4 border-[#114b8d]">
          <div className="max-w-[1300px] mx-auto px-4 py-10 grid md:grid-cols-4 gap-8">
            <div className="flex gap-3">
              <div className="w-12 h-12 relative bg-white rounded-full p-1 flex-shrink-0">
                <Image src="/logo.png" alt="Mbale Heroes Club Logo" fill className="object-contain" />
              </div>
              <div>
                <div className="font-black text-sm text-[#facc15]">MBALE HEROES FC</div>
                <div className="text-[10px] opacity-60">BAKHEBI • THE SURGEONS</div>
                <div className="text-[11px] opacity-70 mt-2 leading-5">Mbale Municipal Stadium<br/>10,000 Capacity • Est. 1960<br/>2x Uganda Cup 1976 & 1999</div>
              </div>
            </div>

            <div className="text-[11px] leading-7">
              <b className="text-[#facc15]">CLUB</b><br/>
              <Link href="/club" className="opacity-70 hover:text-[#facc15]">History 1960-2025</Link><br/>
              <Link href="/team" className="opacity-70 hover:text-[#facc15]">First Team</Link><br/>
              <Link href="/fixtures" className="opacity-70 hover:text-[#facc15]">Fixtures</Link><br/>
              <Link href="/news" className="opacity-70 hover:text-[#facc15]">News</Link>
            </div>

            <div className="text-[11px] leading-7">
              <b className="text-[#facc15]">FANS</b><br/>
              <Link href="/tickets" className="opacity-70 hover:text-[#facc15]">Buy Tickets</Link><br/>
              <Link href="/shop" className="opacity-70 hover:text-[#facc15]">Official Shop</Link><br/>
              <a href="https://wa.me/256700568634" target="_blank" className="opacity-70 hover:text-[#facc15]">WhatsApp Channel</a>
            </div>

            <div className="bg-white rounded-[1.2rem] p-4 text-black">
              <div className="text-[9px] font-black tracking-[0.2em] opacity-50">WEBSITE DEVELOPED BY</div>
              <a href="https://wa.me/256700568634" target="_blank" className="mt-3 flex gap-3 items-center">
                <div className="w-[60px] h-[60px] relative flex-shrink-0">
                  <Image src="/tdev.png" alt="Talent256 Developer Logo" fill className="object-contain" />
                </div>
                <div>
                  <div className="font-black text-[14px] leading-none text-[#0a1931]">TALENT256</div>
                  <div className="font-bold text-[10px] tracking-widest text-[#c4a46a]">GROUP LIMITED</div>
                  <div className="text-[8px] opacity-60 mt-1">EST 2025 • HOLDING COMPANY</div>
                </div>
              </a>
              <a href="https://wa.me/256700568634" target="_blank" className="mt-3 block bg-[#0a1931] text-white text-center py-2.5 rounded-full font-black text-[10px]">
                CHAT DEVELOPER → +256 700 568634
              </a>
            </div>
          </div>
          <div className="border-t border-white/10 py-4 text-center text-[10px] opacity-40">
            © 2025 Mbale Heroes FC • Club Logo: /logo.png • Developer: Talent256 /tdev.png • WhatsApp: +256700568634
          </div>
        </footer>
      </body>
    </html>
  );
}