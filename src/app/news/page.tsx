"use client"
// MBALE HEROES FC - NEWS PAGE - FULL HISTORY WORTHY - NO HEADER/FOOTER
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

const LOGO_BLUE = "#114b8d"

const NEWS = [
  { id: 1, cat: "MATCH REPORT", title: "Heroes secure 2-1 victory over Vipers at Mbale Municipal — Top of table 18 pts", date: "12 OCT 2025", img: "/team/full-squad-hero.jpg", excerpt: "D. Kyomuhangi strikes twice as Bakhebi go top with 18 points after 8 games, unbeaten run continues. 5,200 fans, Kadodi drums.", featured: true, year: "2025" },
  { id: 2, cat: "ACADEMY", title: "Academy trials attract 200+ talents from Eastern Uganda — Bugisu region", date: "10 OCT 2025", img: "/team/full-squad-hero.jpg", excerpt: "Over 200 young players from Mbale SS, Nkoma SS, Nabumali High turned up at Municipal for 2025/26 intake. 14 promoted since 2020.", featured: false, year: "2025" },
  { id: 3, cat: "CLUB NEWS", title: "New partnership with 10 primary schools to promote football in Mbale City", date: "08 OCT 2025", img: "/team/full-squad-hero.jpg", excerpt: "Mbale Heroes partners with schools to nurture next generation of Heroes — Pride of the East since 1960.", featured: false, year: "2025" },
  { id: 4, cat: "SHOP", title: "Home Kit sold 1,000 units in 3 days — Blue White Army fastest selling ever", date: "05 OCT 2025", img: "/kits/home-kit.png", excerpt: "Blue white stripes kit #114b8d becomes fastest selling in club history. Gofere kit partner since Oct 2024.", featured: false, year: "2025" },
  { id: 5, cat: "INTERVIEW", title: "P. Ochan: 'We are ready for KCCA, we want to stay top' — Captain 5 clean sheets", date: "04 OCT 2025", img: "/players/player-1.png", excerpt: "Captain speaks ahead of top clash — 26y, 5 clean sheets, 22 saves, since 2022 from Mbarara City.", featured: true, year: "2025" },
  { id: 6, cat: "HISTORY", title: "1976 🏆 How Mbale Heroes became first upcountry team to win Uganda Cup", date: "15 JUL 2024 • HISTORY", img: "/team/full-squad-hero.jpg", excerpt: "Gangama United founded early 1960s — Beat Coffee FC 4-2 penalties. Reached Africa Cup Winners Cup 1977 vs Rangers International Nigeria.", featured: true, year: "1976" },
  { id: 7, cat: "HISTORY", title: "1999 🏆 Second Uganda Cup — Beating SC Villa 3-1 semi, Lyantonde final", date: "12 JUL 2024 • HISTORY", img: "/team/full-squad-hero.jpg", excerpt: "Second triumph — qualified for Africa 2000 vs Saint-Louis Seychelles. Only 2x cup winners from Eastern Uganda.", featured: true, year: "1999" },
  { id: 8, cat: "HISTORY", title: "1960s Origins: Gangama United — From Mbale SS, Nkoma SS, Nabumali High", date: "10 JUL 2024 • HISTORY", img: "/team/full-squad-hero.jpg", excerpt: "Founded early 1960s as Gangama United — schools that produced national team players — Became Mbale Heroes, The Surgeons, Bakhebi.", featured: false, year: "1960" },
  { id: 9, cat: "COMEBACK", title: "2024 Promotion after 19 years — Beating Onduparaka 2-1 • Kadodi drums return", date: "05 MAY 2024", img: "/team/full-squad-hero.jpg", excerpt: "49 points 3rd in FUFA Big League — 2-1 vs Onduparaka decisive — Mbale Municipal packed, drums, 19 years wait over. 2-1 vs SC Villa memorable.", featured: false, year: "2024" },
  { id: 10, cat: "LEGACY", title: "Mbale Municipal Stadium — 10,000 capacity since 1975 — Hardest place to visit", date: "01 MAY 2024", img: "/team/full-squad-hero.jpg", excerpt: "Micho said 2002 hardest place to visit — Renovated 2024 for UPL — Kadodi cultural dance — Home record 4W 1D 0L 2025/26.", featured: false, year: "1975" },
  { id: 11, cat: "FAN CULTURE", title: "Kadodi drums & The Surgeons — Why Mbale Heroes called Bakhebi", date: "28 SEP 2025", img: "/team/full-squad-hero.jpg", excerpt: "Bakhebi means surgeons in Lumasaba — Known for cutting opponents — Kadodi traditional drums from Bamasaba culture.", featured: false, year: "2025" },
  { id: 12, cat: "TICKETS", title: "Tickets for KCCA FC clash now on sale — UGX 10K regular — 5,000 expected", date: "02 OCT 2025", img: "/team/full-squad-hero.jpg", excerpt: "Get ticket now and fill Mbale Municipal — WhatsApp booking +256700568634 — Momo Pay, at gate.", featured: false, year: "2025" },
]

export default function NewsPage() {
  const [filter, setFilter] = useState("ALL")
  const cats = ["ALL", "MATCH REPORT", "HISTORY", "ACADEMY", "CLUB NEWS", "FAN CULTURE"]

  const filtered = filter === "ALL" ? NEWS : NEWS.filter(n => n.cat === filter || (filter==="HISTORY" && n.year && ["1960","1976","1999","1975"].includes(n.year)))

  return (
    <div className="bg-[#f8f9fb] text-[#0a1f44] font-sans min-h-screen">
      <section className="bg-black text-white relative">
        <div className="absolute inset-0"><Image src="/team/full-squad-hero.jpg" alt="" fill className="object-cover opacity-30" /><div className="absolute inset-0 bg-gradient-to-r from-[#114b8d] to-black opacity-80"></div></div>
        <div className="relative max-w-[1300px] mx-auto px-4 py-14 md:py-20">
          <div className="text-[10px] font-bold tracking-widest text-[#facc15] uppercase flex items-center gap-2"><span className="w-8 h-px bg-[#facc15]"></span> OFFICIAL NEWS • 64 YEARS • EST. 1960 • 2x UGANDA CUP 1976 & 1999 • 12 STORIES</div>
          <h1 className="font-black text-5xl md:text-[72px] leading-[0.85] tracking-tighter mt-3">LATEST<br/><span className="text-[#facc15]">NEWS</span></h1>
          <p className="mt-4 text-white/60 text-sm max-w-[600px]">From Gangama United 1960s to Pride of the East 2025 — 2 Uganda Cups, Africa campaigns 1977 & 2000, 19 years in lower leagues, promotion 2024. Bakhebi, The Surgeons.</p>
          <div className="mt-8 flex flex-wrap gap-2">
            {cats.map(c => <button key={c} onClick={()=>setFilter(c)} className={`px-5 py-2.5 rounded-full font-black text-[10px] tracking-widest ${filter===c ? "bg-[#facc15] text-black" : "bg-white/10 text-white border border-white/20"}`}>{c}</button>)}
          </div>
        </div>
      </section>

      <section className="max-w-[1300px] mx-auto px-4 py-8 grid md:grid-cols-[1.8fr_0.9fr] gap-6">
        <div className="space-y-6">
          {/* FEATURED - 4 BIG */}
          <div className="grid md:grid-cols-2 gap-4">
            {filtered.filter(n=>n.featured).map(n=>(
              <div key={n.id} className="bg-white border rounded-[1.5rem] overflow-hidden shadow-lg hover:shadow-xl transition">
                <div className="h-[320px] relative bg-[#eef2ff]"><Image src={n.img} alt={n.title} fill className="object-cover" /><div className="absolute top-4 left-4 flex gap-2"><span className="bg-[#facc15] text-black text-[10px] font-black px-4 py-1.5 rounded-full">{n.cat}</span><span className="bg-black/70 text-white text-[9px] px-3 py-1.5 rounded-full">{n.year}</span></div><div className="absolute bottom-0 w-full h-40 bg-gradient-to-t from-black via-black/60 to-transparent" /><div className="absolute bottom-4 left-5 right-5 text-white"><div className="text-[10px] opacity-70">{n.date}</div><div className="font-black text-xl leading-tight mt-1 line-clamp-2">{n.title}</div><div className="text-[11px] opacity-80 mt-2 line-clamp-2">{n.excerpt}</div></div></div>
                <div className="p-4 flex justify-between items-center"><span className="text-xs font-black" style={{color: LOGO_BLUE}}>READ FULL STORY →</span><div className="text-[10px] opacity-50">{n.year==="1976"||n.year==="1999"?"History • 5 min read":"2 min read"}</div></div>
              </div>
            ))}
          </div>

          <h3 className="font-black text-xl mt-8">ALL STORIES • {filtered.length} • 64 YEARS HISTORY</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {filtered.filter(n=>!n.featured).map(n=>(
              <div key={n.id} className="bg-white border rounded-[1.5rem] overflow-hidden shadow-sm hover:shadow-lg transition flex flex-col">
                <div className="h-[200px] relative bg-[#f8f9fb]"><Image src={n.img} alt={n.title} fill className="object-cover" /><div className="absolute top-3 left-3 flex gap-2"><span className="bg-black text-white text-[8px] font-black px-3 py-1 rounded-full">{n.cat}</span><span className="bg-white text-black text-[8px] font-black px-2 py-1 rounded-full">{n.year || n.date.split(" ")[2]}</span></div></div>
                <div className="p-4 flex-1 flex flex-col"><div className="text-[9px] opacity-50 font-bold">{n.date}</div><div className="font-black text-[14px] leading-tight mt-1 line-clamp-2">{n.title}</div><div className="text-[11px] opacity-60 mt-2 line-clamp-2 flex-1">{n.excerpt}</div><div className="mt-3 text-[10px] font-black flex justify-between" style={{color: LOGO_BLUE}}><span>READ MORE →</span><span className="opacity-40">{n.year && parseInt(n.year) < 2000 ? "LEGACY" : "2025"}</span></div></div>
              </div>
            ))}
          </div>

          <div className="mt-10 bg-[#114b8d] text-white rounded-[1.5rem] p-6">
            <h3 className="font-black text-xl">64 YEARS TIMELINE • GANGAMA TO HEROES</h3>
            <div className="mt-5 grid md:grid-cols-4 gap-3 text-[11px]">
              <div className="bg-white/10 rounded-xl p-4"><b>1960s</b><br/>Gangama United founded • Mbale SS, Nkoma SS, Nabumali • Eastern region pioneer</div>
              <div className="bg-[#facc15] text-black rounded-xl p-4"><b>1976 🏆</b><br/>First Uganda Cup vs Coffee FC 4-2 pens • First upcountry winner • 1977 Africa vs Rangers Int Nigeria</div>
              <div className="bg-white text-black rounded-xl p-4"><b>1999 🏆</b><br/>Second Cup vs Lyantonde, beat Villa 3-1 semi • 2000 Africa vs Saint-Louis Seychelles</div>
              <div className="bg-black rounded-xl p-4"><b>2024 ⬆️</b><br/>Promotion after 19 years • 49 pts • Beat Onduparaka 2-1 • Kadodi return • 2-1 vs Villa memorable</div>
            </div>
            <Link href="/club" className="mt-5 inline-block bg-[#facc15] text-black px-6 py-3 rounded-full font-black text-[11px]">FULL HISTORY 1960-2025 →</Link>
          </div>
        </div>

        <div className="space-y-6">
          <div style={{background: LOGO_BLUE}} className="text-white rounded-[1.5rem] p-5"><h4 className="font-black text-sm">📅 NEXT MATCH • KCCA</h4><div className="mt-3 bg-white text-black rounded-xl p-4 text-center"><div className="font-black">MBALE HEROES vs KCCA FC</div><div className="text-[11px] opacity-60 mt-1">SAT 18 OCT • 16:00 • Mbale Municipal • 10,000 capacity • Kadodi</div><div className="mt-2 text-[10px] bg-[#f8f9fb] rounded-full py-1">5,000 expected • UGX 10K regular</div><Link href="/tickets" className="mt-3 block bg-[#facc15] text-black py-2.5 rounded-full font-black text-xs">BUY TICKETS →</Link></div><div className="mt-3 text-[10px] opacity-70">Home record 4W 1D 0L • Unbeaten 8 • Top of table 18 pts</div></div>

          <div className="bg-white border rounded-[1.5rem] p-5"><h4 className="font-black text-sm">🔥 TRENDING • 64 YEARS PRIDE</h4><div className="mt-4 space-y-3">{NEWS.slice(0,5).map(n=><div key={n.id} className="flex gap-3 border-b pb-3 last:border-0"><div className="w-16 h-16 bg-zinc-100 rounded-xl relative overflow-hidden flex-shrink-0"><Image src={n.img} alt="" fill className="object-cover" /><div className="absolute bottom-0 w-full bg-black/70 text-white text-[7px] text-center py-0.5">{n.year}</div></div><div><div className="text-[8px] bg-zinc-100 px-2 py-0.5 rounded-full inline-block font-black">{n.cat}</div><div className="font-bold text-xs leading-tight mt-1 line-clamp-2">{n.title}</div><div className="text-[9px] opacity-50 mt-1">{n.date}</div></div></div>)}</div><Link href="/club" className="mt-4 block text-center bg-black text-white py-2.5 rounded-full font-black text-[10px]">VIEW CLUB HISTORY →</Link></div>

          <div className="bg-[#facc15] rounded-[1.5rem] p-5 border-2 border-black"><h4 className="font-black text-sm">📚 DID YOU KNOW? • LEGACY</h4><div className="mt-3 space-y-2 text-[11px]"><div className="bg-white rounded-xl p-3"><b>First upcountry winner</b><br/>1976 first team outside Kampala to win Uganda Cup</div><div className="bg-white rounded-xl p-3"><b>Bakhebi meaning</b><br/>Surgeons in Lumasaba — cutting opponents since 1960s</div><div className="bg-white rounded-xl p-3"><b>2-1 vs SC Villa</b><br/>Most memorable win 2024/25 UPL despite relegation</div></div></div>

          <div className="bg-black text-white rounded-[1.5rem] p-5"><h4 className="font-black text-sm">💬 WHATSAPP • 1,200+ BAKHEBI</h4><div className="text-[11px] opacity-70 mt-2 leading-5">Join instant news, lineups, goals, Kadodi videos, 64 years stories. Surgeons Army.</div><div className="mt-3 bg-white/10 rounded-xl p-3 text-[10px]">✅ Goal alerts<br/>✅ History stories<br/>✅ Ticket giveaways • 1976 & 1999 memories</div><a href="https://wa.me/256700568634" target="_blank" className="mt-3 block bg-[#facc15] text-black text-center py-2.5 rounded-full font-black text-xs">JOIN CHANNEL • +256700568634 →</a></div>

          <div className="bg-white border rounded-[1.5rem] p-5"><h4 className="font-black text-sm">🏆 HONOURS • 2 CUPS</h4><div className="mt-3 space-y-2"><div className="flex justify-between bg-[#facc15] p-3 rounded-xl font-black text-sm"><span>Uganda Cup</span><span>2 (1976, 1999)</span></div><div className="flex justify-between bg-[#f8f9fb] p-3 rounded-xl text-[11px]"><span>Runners-up</span><span>1993</span></div><div className="flex justify-between bg-[#114b8d] text-white p-3 rounded-xl text-[11px]"><span>Africa Cup Winners Cup</span><span>1977, 2000</span></div></div></div>
        </div>
      </section>
    </div>
  )
}