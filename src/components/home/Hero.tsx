import Link from "next/link"
import { CLUB } from "@/lib/constants"

export default function Hero() {
  return (
    <section className="relative bg-black text-white min-h-[85vh] grid place-items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B6E4F]/60 via-black to-black" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-[#FFD700]/20 rounded-full blur-[80px]" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <div className="inline-block bg-[#FFD700] text-black text-xs font-black px-3 py-1 rounded-full uppercase mb-4">FUFA Big League • 2025/26</div>
          <h1 className="text-6xl md:text-8xl font-black leading-[0.85] tracking-tighter">
            WE ARE<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0B6E4F] to-[#FFD700]">MBALE</span><br/>
            HEROES
          </h1>
          <p className="mt-6 text-zinc-300 max-w-lg text-lg">{CLUB.nickname} — {CLUB.motto}. From Mbale Municipal Stadium to the nation.</p>
          
          <div className="mt-8 flex gap-4">
            <Link href="/fixtures" className="bg-white text-black px-8 py-4 rounded-full font-black uppercase text-sm hover:bg-[#FFD700] transition">Next Match</Link>
            <Link href="/team" className="border border-white/30 px-8 py-4 rounded-full font-black uppercase text-sm hover:bg-white hover:text-black transition">Meet Squad</Link>
          </div>
        </div>
        
        <div className="relative">
          <div className="bg-zinc-900 border border-zinc-800 rounded-[2rem] p-3 rotate-3 shadow-2xl">
            <div className="bg-gradient-to-b from-zinc-800 to-black rounded-[1.5rem] p-8 text-center">
              <div className="w-32 h-32 mx-auto bg-gradient-to-br from-[#0B6E4F] to-black rounded-full grid place-items-center text-4xl font-black border-4 border-[#FFD700]">MH</div>
              <h3 className="mt-6 font-black text-2xl">THE SURGEONS</h3>
              <p className="text-[#FFD700] text-xs font-bold tracking-widest uppercase mt-2">Mbale • Uganda</p>
              <div className="mt-6 grid grid-cols-3 gap-2 text-center">
                <div className="bg-black/50 rounded-xl py-3"><div className="font-black text-xl">12</div><div className="text-[10px] uppercase opacity-60">Titles</div></div>
                <div className="bg-black/50 rounded-xl py-3"><div className="font-black text-xl">1970</div><div className="text-[10px] uppercase opacity-60">Founded</div></div>
                <div className="bg-black/50 rounded-xl py-3"><div className="font-black text-xl">East</div><div className="text-[10px] uppercase opacity-60">Pride</div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}