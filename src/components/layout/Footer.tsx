import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-black text-white border-t-4 border-[#114b8d]">
      <div className="max-w-[1300px] mx-auto px-4 py-10 grid md:grid-cols-4 gap-8">
        {/* CLUB LOGO */}
        <div className="flex gap-3">
          <div className="w-12 h-12 relative bg-white rounded-full p-1 flex-shrink-0">
            <Image src="/logo.png" alt="Mbale Heroes Club Logo" fill className="object-contain" />
          </div>
          <div>
            <div className="font-black text-sm text-[#facc15]">MBALE HEROES FC</div>
            <div className="text-[10px] opacity-60">BAKHEBI • THE SURGEONS</div>
            <div className="text-[11px] opacity-70 mt-2 leading-5">Mbale Municipal Stadium<br/>10,000 Capacity • Est. 1960<br/>2x Uganda Cup Winners</div>
          </div>
        </div>

        <div className="text-[11px] leading-7">
          <b className="text-[#facc15]">CLUB</b><br/>
          <Link href="/club" className="opacity-70 hover:text-[#facc15]">History 1960-2025</Link><br/>
          <Link href="/team" className="opacity-70 hover:text-[#facc15]">First Team</Link><br/>
          <Link href="/fixtures" className="opacity-70 hover:text-[#facc15]">Fixtures & Results</Link><br/>
          <Link href="/news" className="opacity-70 hover:text-[#facc15]">News</Link>
        </div>

        <div className="text-[11px] leading-7">
          <b className="text-[#facc15]">FANS</b><br/>
          <Link href="/tickets" className="opacity-70 hover:text-[#facc15]">Buy Tickets</Link><br/>
          <Link href="/shop" className="opacity-70 hover:text-[#facc15]">Official Shop</Link><br/>
          <a href="https://wa.me/256700568634" target="_blank" className="opacity-70 hover:text-[#facc15]">WhatsApp Channel</a>
        </div>

        {/* DEVELOPER LOGO - TALENT256 */}
        <div className="bg-white rounded-[1.2rem] p-4 text-black">
          <div className="text-[9px] font-black tracking-[0.2em] opacity-50">WEBSITE DEVELOPED BY</div>
          <a href="https://wa.me/256700568634" target="_blank" className="mt-3 flex gap-3 items-center">
            <div className="w-[60px] h-[60px] relative flex-shrink-0">
              <Image src="/tdev.png" alt="Talent256 Developer Logo" fill className="object-contain" />
            </div>
            <div>
              <div className="font-black text-[14px] leading-none text-[#0a1931]">TALENT256</div>
              <div className="font-bold text-[10px] tracking-widest text-[#c4a46a]">GROUP LIMITED</div>
              <div className="text-[8px] opacity-60 mt-1">EST 2025</div>
            </div>
          </a>
          <a href="https://wa.me/256700568634" target="_blank" className="mt-3 block bg-[#0a1931] text-white text-center py-2.5 rounded-full font-black text-[10px]">CHAT DEVELOPER → +256 700 568634</a>
          <div className="mt-2 text-[8px] opacity-50 text-center">Click to message on WhatsApp</div>
        </div>
      </div>

      <div className="border-t border-white/10 py-4 text-center text-[10px] opacity-40">
        © 2025 Mbale Heroes FC • Club Logo: /logo.png • Developer: Talent256 Group Ltd /tdev.png • +256700568634
      </div>
    </footer>
  )
}