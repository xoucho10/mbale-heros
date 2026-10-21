"use client"
// MBALE HEROES FC - FIXTURES PAGE - CLEANED - NO HEADER/FOOTER
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

const LOGO_BLUE = "#114b8d"
const GOLD = "#facc15"

const FIXTURES = [
  { date: "SAT 18 OCT", time: "16:00", comp: "UPL", home: "MBALE HEROES", away: "KCCA FC", venue: "Mbale Municipal Stadium", status: "NEXT", ticket: true, note: "5,000 expected • Kadodi drums" },
  { date: "SAT 25 OCT", time: "15:30", comp: "UPL", home: "BUL FC", away: "MBALE HEROES", venue: "FUFA Technical Centre", status: "AWAY", note: "Away in Jinja" },
  { date: "SAT 01 NOV", time: "16:00", comp: "UPL", home: "MBALE HEROES", away: "SC VILLA", venue: "Mbale Municipal Stadium", status: "HOME", note: "Memorable 2-1 win 2024" },
  { date: "SAT 08 NOV", time: "16:00", comp: "UPL", home: "MBALE HEROES", away: "VIPERS SC", venue: "Mbale Municipal Stadium", status: "HOME", note: "Top of table clash" },
  { date: "SAT 15 NOV", time: "15:00", comp: "UGANDA CUP", home: "Mbale Heroes", away: "TBD", venue: "Mbale Municipal", status: "CUP", note: "2x winners 1976 & 1999" },
  { date: "SAT 22 NOV", time: "16:00", comp: "UPL", home: "Express FC", away: "MBALE HEROES", venue: "Mutessa II Stadium", status: "AWAY", note: "Away in Wankulukuku" },
]

const RESULTS = [
  { date: "12 OCT", comp: "UPL", home: "MBALE HEROES", away: "SC VIPERS", score: "2 - 1", scorers: "D. Kyomuhangi 23', P. Ochan 67' (FK) • 5,200 fans • Unbeaten 8", result: "W", motm: "D. Kyomuhangi" },
  { date: "05 OCT", comp: "UPL", home: "NEC FC", away: "MBALE HEROES", score: "0 - 0", scorers: "Clean Sheet • P. Ochan 5 saves • Away point", result: "D", motm: "P. Ochan" },
  { date: "28 SEP", comp: "UPL", home: "MBALE HEROES", away: "Maroons FC", score: "1 - 0", scorers: "D. Kyomuhangi 89' winner • 4,800 fans", result: "W", motm: "D. Kyomuhangi" },
  { date: "20 SEP", comp: "UPL", home: "UPDF FC", away: "MBALE HEROES", score: "0 - 1", scorers: "S. Mukasa 45+2' header • First away win", result: "W", motm: "S. Mukasa" },
  { date: "13 SEP", comp: "UPL", home: "MBALE HEROES", away: "Kitara FC", score: "2 - 2", scorers: "M. Okello 15', F. Ssentamu 67' • Comeback", result: "D", motm: "M. Okello" },
]

export default function FixturesPage() {
  const [tab, setTab] = useState("fixtures")

  return (
    <div className="bg-[#f8f9fb] text-[#0a1f44] font-sans min-h-screen">
      {/* HERO */}
      <section className="bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#114b8d] to-black opacity-80"></div>
        <div className="relative max-w-[1300px] mx-auto px-4 py-14 md:py-20 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div>
            <div className="text-[10px] font-bold tracking-widest text-[#facc15] uppercase flex items-center gap-2"><span className="w-8 h-px bg-[#facc15]"></span> 2025/26 SEASON • UGANDA PREMIER LEAGUE • EST. 1960 • 2x UGANDA CUP</div>
            <h1 className="font-black text-5xl md:text-[72px] leading-[0.85] tracking-tighter mt-3">FIXTURES<br/><span className="text-[#facc15]">& RESULTS</span></h1>
            <p className="mt-4 text-white/60 text-[13px] max-w-[480px]">All home matches at Mbale Municipal Stadium — 10,000 capacity, home of the Bakhebi since 1975. Hardest place to visit — Micho said 2002. Kadodi drums, 5,000+ fans.</p>
            <div className="mt-4 flex gap-2 text-[10px]"><span className="bg-[#facc15] text-black px-3 py-1 rounded-full font-black">UNBEATEN 8</span><span className="bg-white/10 border border-white/20 px-3 py-1 rounded-full">1ST • 18 POINTS</span><span className="bg-white/10 border border-white/20 px-3 py-1 rounded-full">10K STADIUM</span></div>
          </div>
          <div className="bg-white text-black rounded-2xl p-2 flex gap-2 shadow-2xl">
            <button onClick={()=>setTab("fixtures")} className={`px-6 py-3 rounded-full font-black text-xs ${tab==="fixtures" ? "bg-[#114b8d] text-white" : "bg-zinc-100"}`}>UPCOMING ({FIXTURES.length})</button>
            <button onClick={()=>setTab("results")} className={`px-6 py-3 rounded-full font-black text-xs ${tab==="results" ? "bg-[#114b8d] text-white" : "bg-zinc-100"}`}>RESULTS ({RESULTS.length})</button>
          </div>
        </div>
      </section>

      <section className="max-w-[1300px] mx-auto px-4 py-8 grid md:grid-cols-[1.8fr_0.9fr] gap-6">
        <div className="space-y-4">
          {tab==="fixtures" ? FIXTURES.map((f,i)=>(
            <div key={i} className="bg-white border rounded-[1.5rem] p-5 shadow-sm hover:shadow-lg transition">
              <div className="flex justify-between items-start">
                <div className="flex gap-3 items-center"><div className="bg-black text-white text-[9px] font-black px-3 py-1.5 rounded-full">{f.comp}</div><div className="text-[10px] font-bold opacity-60">{f.date} • {f.time}</div></div>
                <div className={`text-[9px] font-black px-3 py-1 rounded-full ${f.status==="NEXT" ? "bg-[#facc15] text-black border-2 border-black" : f.status==="CUP" ? "bg-[#114b8d] text-white" : "bg-zinc-100"}`}>{f.status} {i===0?"• LIVE SOON":""}</div>
              </div>
              <div className="flex justify-between items-center mt-4 font-black text-[17px]"><span className="flex items-center gap-2"><span className="w-10 h-10 relative"><Image src="/logo.png" alt="" fill className="object-contain" /></span>{f.home}</span><span className="bg-[#facc15] px-4 py-1 rounded-full text-sm">VS</span><span>{f.away}</span></div>
              <div className="mt-3 text-[11px] opacity-70 flex flex-col gap-1"><span>📍 {f.venue} • {f.note}</span></div>
              <div className="mt-4 flex gap-2">{f.ticket ? <Link href="/tickets" className="bg-black text-white px-5 py-2.5 rounded-full font-black text-[10px]">BUY TICKETS →</Link> : <span className="bg-zinc-100 px-5 py-2.5 rounded-full font-black text-[10px] opacity-60">AWAY TICKETS SOON</span>}<Link href="/team" className="bg-[#f8f9fb] border px-5 py-2.5 rounded-full font-black text-[10px]">PREVIEW →</Link></div>
            </div>
          )) : RESULTS.map((r,i)=>(
            <div key={i} className="bg-white border rounded-[1.5rem] p-5 shadow-sm hover:shadow-md transition">
              <div className="flex justify-between items-center"><div className="text-[10px] font-bold opacity-60">{r.date} • {r.comp} • MOTM: {r.motm}</div><div className={`w-7 h-7 grid place-items-center rounded-full text-[11px] font-black ${r.result==="W"?"bg-green-600 text-white": r.result==="D"?"bg-zinc-300":"bg-red-600 text-white"}`}>{r.result}</div></div>
              <div className="flex justify-between items-center mt-3 font-black text-lg"><span>{r.home}</span><span className="bg-black text-white px-5 py-1.5 rounded-full">{r.score}</span><span>{r.away}</span></div>
              <div className="mt-2 text-[11px] opacity-60 leading-5">{r.scorers}</div>
              <div className="mt-3 flex gap-2"><Link href="/news" className="text-[10px] font-black px-3 py-1.5 bg-[#f8f9fb] rounded-full">REPORT →</Link><Link href="/news" className="text-[10px] font-black px-3 py-1.5 bg-[#f8f9fb] rounded-full">HIGHLIGHTS ▶</Link></div>
            </div>
          ))}

          <div className="mt-8 bg-white border-2 rounded-[1.5rem] p-6">
            <h3 className="font-black text-lg">HOME RECORD 2025/26 • MBALE MUNICIPAL STADIUM</h3>
            <p className="text-[11px] opacity-60 mt-1">10,000 capacity • Since 1975 • Renovated 2024 • Hardest place to visit</p>
            <div className="mt-4 grid grid-cols-4 gap-3 text-center"><div className="bg-[#facc15] border-2 border-black rounded-xl p-3"><div className="font-black text-xl">4</div><div className="text-[9px] font-bold">WINS</div></div><div className="bg-[#f8f9fb] border rounded-xl p-3"><div className="font-black text-xl">1</div><div className="text-[9px] opacity-60">DRAWS</div></div><div className="bg-[#f8f9fb] border rounded-xl p-3"><div className="font-black text-xl">0</div><div className="text-[9px] opacity-60">LOSSES</div></div><div className="bg-[#114b8d] text-white rounded-xl p-3"><div className="font-black text-xl">13</div><div className="text-[9px]">POINTS HOME</div></div></div>
          </div>
        </div>

        <div className="space-y-6">
          <div style={{background: LOGO_BLUE}} className="text-white rounded-[1.5rem] p-5"><div className="font-black text-center">LEAGUE TABLE • UPL 2025/26 • 1ST PLACE</div><div className="mt-4 bg-white text-black rounded-xl overflow-hidden text-[11px]"><div className="grid grid-cols-12 bg-black/5 p-2.5 font-black text-[10px]"><span className="col-span-1">#</span><span className="col-span-6">CLUB</span><span>P</span><span>W</span><span>D</span><span>PTS</span></div><div className="grid grid-cols-12 p-2.5 font-black bg-[#facc15]"><span className="col-span-1">1</span><span className="col-span-6 flex gap-1 items-center"><span className="w-4 h-4 relative"><Image src="/logo.png" alt="" fill className="object-contain" /></span>Mbale Heroes</span><span>8</span><span>5</span><span>3</span><span>18</span></div><div className="grid grid-cols-12 p-2.5"><span className="col-span-1">2</span><span className="col-span-6">KCCA</span><span>8</span><span>4</span><span>2</span><span>14</span></div><div className="grid grid-cols-12 p-2.5"><span className="col-span-1">3</span><span className="col-span-6">Vipers</span><span>8</span><span>4</span><span>1</span><span>13</span></div><div className="grid grid-cols-12 p-2.5 border-t"><span className="col-span-1">4</span><span className="col-span-6">BUL</span><span>8</span><span>3</span><span>3</span><span>12</span></div></div><Link href="/tickets" className="mt-4 block text-center bg-[#facc15] text-black py-3 rounded-full font-black text-xs">GET SEASON TICKET UGX 150K →</Link></div>

          <div className="bg-white border rounded-[1.5rem] p-5"><h4 className="font-black text-sm">📍 MBALE MUNICIPAL STADIUM • 10,000</h4><div className="mt-3 h-36 bg-[#114b8d]/10 rounded-xl relative overflow-hidden grid place-items-center"><Image src="/team/full-squad-hero.jpg" alt="" fill className="object-cover opacity-30" /><span className="relative text-3xl">🏟️</span></div><div className="mt-3 text-[11px] leading-6"><b>Capacity:</b> 10,000 • Renovated 2024 for UPL<br/><b>Since:</b> 1975 • Mbale City<br/><b>Home Record 2025/26:</b> 4W 1D 0L • Unbeaten at home<br/><b>Famous:</b> Hardest place to visit - Micho 2002<br/><b>Atmosphere:</b> Kadodi drums • 5,000+ Bakhebi</div><Link href="/club" className="mt-3 block text-center bg-black text-white py-2.5 rounded-full font-black text-[11px]">CLUB HISTORY →</Link></div>

          <div style={{background: GOLD}} className="rounded-[1.5rem] p-5 border-2 border-black"><h4 className="font-black text-sm">🎟️ NEXT MATCH TICKETS • KCCA</h4><div className="mt-2 text-[13px] font-black">MBALE HEROES vs KCCA FC</div><div className="text-[11px] opacity-70">SAT 18 OCT • 16:00 • Municipal Stadium • 5,000 expected</div><div className="mt-3 bg-white rounded-xl p-3 text-[11px]"><div className="flex justify-between"><span>Regular (Kadodi Stand)</span><b>UGX 10K</b></div><div className="flex justify-between mt-2"><span>VIP (Covered)</span><b>UGX 30K</b></div><div className="flex justify-between mt-2"><span>VVIP + Drinks</span><b>UGX 50K</b></div></div><Link href="/tickets" style={{background: LOGO_BLUE}} className="mt-3 block text-white text-center py-3 rounded-full font-black text-xs">BUY TICKETS • +256700568634 →</Link><div className="mt-2 text-[9px] opacity-60 text-center">WhatsApp booking • Momo Pay • At gate</div></div>

          <div className="bg-black text-white rounded-[1.5rem] p-5"><h4 className="font-black text-sm">📺 WATCH • STARTIMES UPL</h4><div className="mt-3 text-[11px] opacity-70 leading-5">All UPL matches live on Sanyuka Prime, FUFA TV. Highlights on YouTube. Follow WhatsApp channel 1,200+ fans for instant goals.</div><a href="https://wa.me/256700568634" target="_blank" className="mt-3 block bg-[#facc15] text-black text-center py-2.5 rounded-full font-black text-[11px]">JOIN WHATSAPP →</a></div>
        </div>
      </section>
    </div>
  )
}