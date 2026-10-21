"use client"
// MBALE HEROES FC - TICKETS PAGE - FULL - NO HEADER/FOOTER - 64 YEARS WORTHY
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

const LOGO_BLUE = "#114b8d"

const TICKETS = [
  { id: "regular", name: "Regular • Kadodi Stand", price: 10000, desc: "Standing • Behind goal • Kadodi drums • 5,000 Bakhebi", popular: false, color: "bg-[#f8f9fb]", perks: ["Standing terrace", "Kadodi drums experience", "Bring flag", "90 mins chant"] },
  { id: "vip", name: "VIP • Covered Stand", price: 30000, desc: "Seated • Covered • Best view • Since 1975 stadium", popular: true, color: "bg-[#facc15] border-2 border-black", perks: ["Covered seating", "Best central view", "Cushioned seat", "Free water", "Meet legends"] },
  { id: "vvip", name: "VVIP • Executive + Drinks", price: 50000, desc: "Executive seats • Drinks • Meet players • Est. 1960 lounge", popular: false, color: "bg-[#114b8d] text-white", perks: ["Executive padded seats", "Drinks included", "Player meet & greet", "1976 & 1999 trophy view", "Parking"] },
]

const UPCOMING = [
  { date: "SAT 18 OCT", time: "16:00", home: "MBALE HEROES", away: "KCCA FC", comp: "UPL • Top of table clash • 5,000 expected", venue: "Mbale Municipal Stadium • 10,000 capacity • Kadodi • Since 1975" },
]

export default function TicketsPage() {
  const [selected, setSelected] = useState("vip")
  const [qty, setQty] = useState(1)

  const currentTicket = TICKETS.find(t=>t.id===selected)!
  const total = currentTicket.price * qty

  return (
    <div className="bg-[#f8f9fb] text-[#0a1f44] font-sans min-h-screen">
      {/* HERO */}
      <section className="bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0"><Image src="/team/full-squad-hero.jpg" alt="" fill className="object-cover opacity-25" /><div className="absolute inset-0 bg-gradient-to-r from-[#114b8d] to-black opacity-85"></div></div>
        <div className="relative max-w-[1300px] mx-auto px-4 py-14 md:py-20 grid md:grid-cols-[1.2fr_0.8fr] gap-8 items-end">
          <div>
            <div className="text-[10px] font-bold tracking-widest text-[#facc15] uppercase">TICKETS • MBALE MUNICIPAL STADIUM • 10,000 CAPACITY • SINCE 1975 • KADODI DRUMS • 64 YEARS • EST. 1960 • 2x UGANDA CUP</div>
            <h1 className="font-black text-5xl md:text-[64px] leading-[0.85] tracking-tighter mt-3">BUY<br/>TICKETS<br/><span className="text-[#facc15]">BAKHEBI</span></h1>
            <p className="mt-4 text-white/70 text-sm max-w-[500px]">Home of The Surgeons since 1975. Hardest place to visit — Micho 2002. Kadodi drums, 5,000+ Bakhebi, 90 mins non-stop. 10,000 capacity, renovated 2024 for UPL. 1976 & 1999 cup winners cheered here.</p>
            <div className="mt-5 flex gap-2 flex-wrap text-[10px]"><span className="bg-[#facc15] text-black px-3 py-1 rounded-full font-black">UNBEATEN HOME 4W 1D</span><span className="bg-white/10 border border-white/20 px-3 py-1 rounded-full">10K STADIUM</span><span className="bg-white/10 border border-white/20 px-3 py-1 rounded-full">KADODI DRUMS</span><span className="bg-white/10 border border-white/20 px-3 py-1 rounded-full">EST. 1960</span></div>
          </div>
          <div className="bg-white text-black rounded-[1.5rem] p-5 shadow-2xl">
            <div className="font-black text-center text-sm">NEXT MATCH • TOP OF TABLE</div>
            <div className="mt-4 bg-[#f8f9fb] rounded-xl p-4 text-center"><div className="font-black text-lg">{UPCOMING[0].home} vs {UPCOMING[0].away}</div><div className="text-[11px] opacity-60 mt-1">{UPCOMING[0].date} • {UPCOMING[0].time} • {UPCOMING[0].comp}</div><div className="text-[10px] mt-2 bg-white border rounded-full py-1">📍 {UPCOMING[0].venue}</div><div className="mt-3 flex justify-center gap-2"><span className="w-10 h-10 relative"><Image src="/logo.png" alt="" fill className="object-contain" /></span><span className="bg-[#facc15] px-3 py-1 rounded-full font-black text-xs">VS</span><span className="w-10 h-10 bg-zinc-200 rounded-full grid place-items-center text-xs font-black">KCCA</span></div></div>
            <div className="mt-4 grid grid-cols-3 gap-2 text-center text-[10px]"><div className="bg-[#facc15] border-2 border-black rounded-xl p-2"><div className="font-black">5,000+</div><div>Expected</div></div><div className="bg-[#114b8d] text-white rounded-xl p-2"><div className="font-black">10K</div><div>Capacity</div></div><div className="bg-black text-white rounded-xl p-2"><div className="font-black">18</div><div>Points 1st</div></div></div>
          </div>
        </div>
      </section>

      <section className="max-w-[1300px] mx-auto px-4 py-8 grid md:grid-cols-[1.7fr_0.9fr] gap-6">
        {/* LEFT - TICKET SELECTION */}
        <div>
          <h2 className="font-black text-2xl">CHOOSE YOUR STAND • 3 TIERS • MBALE MUNICIPAL • SINCE 1975</h2>
          <p className="text-[11px] opacity-60 mt-1">All tickets include Kadodi drums experience • 1976 & 1999 trophy celebration • Est. 1960</p>
          <div className="mt-6 grid md:grid-cols-3 gap-4">
            {TICKETS.map(t=>(
              <button key={t.id} onClick={()=>setSelected(t.id)} className={`${t.color} rounded-[1.5rem] p-5 text-left border-2 transition ${selected===t.id?"border-black scale-[1.02] shadow-xl":"border-transparent"} ${t.id==="vvip"?"text-white":"text-black"}`}>
                {t.popular && <div className="bg-black text-white text-[8px] font-black px-3 py-1 rounded-full inline-block mb-3">MOST POPULAR • 64 YEARS FANS FAVE</div>}
                <div className="font-black text-[13px] leading-tight">{t.name}</div>
                <div className="text-[10px] opacity-70 mt-1 leading-tight">{t.desc}</div>
                <div className="mt-4"><span className="font-black text-2xl">UGX {(t.price/1000)}K</span><span className="text-[10px] opacity-60 ml-2">per ticket</span></div>
                <div className="mt-4 space-y-1.5">{t.perks.map((p,i)=><div key={i} className={`text-[10px] flex gap-2 ${t.id==="vvip"?"":""}`}><span>✓</span><span>{p}</span></div>)}</div>
                <div className={`mt-4 text-[10px] font-black py-2 rounded-full text-center ${selected===t.id?"bg-black text-white":"bg-white/20 border"}`}>{selected===t.id?"SELECTED":"SELECT"}</div>
              </button>
            ))}
          </div>

          <div className="mt-8 bg-white border-2 rounded-[1.5rem] p-6">
            <h3 className="font-black text-lg">YOUR ORDER • EST. 1960 • BAKHEBI ARMY</h3>
            <div className="mt-5 grid md:grid-cols-2 gap-6">
              <div>
                <div className="text-[11px] opacity-60">Selected Ticket</div>
                <div className="font-black mt-1">{currentTicket.name} • UGX {(currentTicket.price/1000)}K</div>
                <div className="mt-4 flex items-center gap-4"><span className="text-[11px] font-bold">Quantity</span><div className="flex items-center gap-2 bg-[#f8f9fb] rounded-full p-1"><button onClick={()=>setQty(Math.max(1,qty-1))} className="w-8 h-8 bg-white border rounded-full font-black">-</button><span className="w-8 text-center font-black">{qty}</span><button onClick={()=>setQty(qty+1)} className="w-8 h-8 bg-black text-white rounded-full font-black">+</button></div><span className="text-[10px] opacity-60">Max 10 • Kadodi stand</span></div>
                <div className="mt-4 bg-[#f8f9fb] rounded-xl p-4"><div className="flex justify-between text-[12px]"><span>Subtotal ({qty} x UGX {(currentTicket.price/1000)}K)</span><b>UGX {(total/1000)}K</b></div><div className="flex justify-between text-[12px] mt-2"><span>Booking fee</span><b>FREE • 64 years</b></div><div className="border-t mt-3 pt-3 flex justify-between font-black text-sm"><span>TOTAL • UGX</span><span style={{color: LOGO_BLUE}}>UGX {(total/1000)}K • {qty} tickets</span></div></div>
              </div>
              <div>
                <div className="text-[11px] opacity-60">How to Pay & Collect — 10,000 capacity since 1975</div>
                <div className="mt-3 space-y-2 text-[11px]"><div className="bg-[#facc15] border-2 border-black rounded-xl p-3"><b>1. WhatsApp Booking (Fastest)</b><br/>Click below • Send ticket type • Momo Pay • Get e-ticket QR • 5,000+ fans use it</div><div className="bg-[#f8f9fb] border rounded-xl p-3"><b>2. At Gate — Mbale Municipal</b><br/>Open 12:00 on matchday • Cash • Come early Kadodi starts 14:00 • Since 1975</div><div className="bg-[#f8f9fb] border rounded-xl p-3"><b>3. Club Offices</b><br/>Mbale City, Republic Street • Mon-Sat 9am-5pm • 51% community owned</div></div>
                <a href={`https://wa.me/256700568634?text=Hello%20Mbale%20Heroes%20I%20want%20${qty}x%20${currentTicket.name}%20for%20KCCA%20game%2018%20OCT%20Total%20UGX%20${total}%20-%20Bakhebi%20Est%201960`} target="_blank" className="mt-5 block bg-black text-white text-center py-4 rounded-full font-black text-sm">BOOK ON WHATSAPP • +256700568634 →<br/><span className="text-[10px] opacity-70">MTN MoMo • Airtel Money • Instant QR • Kadodi</span></a>
                <div className="mt-3 text-[9px] opacity-50 text-center">Secure • 1,200+ WhatsApp Bakhebi • 1976 & 1999 cup memories • Est. 1960 • Pride of the East</div>
              </div>
            </div>
          </div>

          <div className="mt-8 grid md:grid-cols-3 gap-4">
            <div className="bg-[#114b8d] text-white rounded-[1.5rem] p-5"><h4 className="font-black text-sm">🏟️ MBALE MUNICIPAL STADIUM • 10K</h4><div className="mt-3 text-[11px] leading-6 opacity-80">Capacity: 10,000 • Renovated 2024<br/>Since: 1975 • 50 years home<br/>Hardest place: Micho 2002<br/>Atmosphere: Kadodi drums 90 mins<br/>Home record 2025/26: 4W 1D 0L unbeaten<br/>Promotion 2024: 10,000 vs Onduparaka 2-1</div></div>
            <div className="bg-white border-2 rounded-[1.5rem] p-5"><h4 className="font-black text-sm">📍 HOW TO GET THERE • BUGISU</h4><div className="mt-3 text-[11px] leading-6"><b>From Mbale Town:</b> 5 mins boda UGX 3K<br/><b>From Kampala:</b> 4 hrs bus UGX 40K<br/><b>From Tororo:</b> 1 hr<br/><b>Parking:</b> VVIP only • Come early<br/><b>Gates open:</b> 12:00 • Kadodi 14:00<br/><b>Altitude:</b> 1,150m Mt. Elgon foot</div></div>
            <div className="bg-[#facc15] border-2 border-black rounded-[1.5rem] p-5"><h4 className="font-black text-sm">🎒 WHAT TO BRING • BAKHEBI</h4><div className="mt-3 text-[11px] leading-6"><b>Bring:</b> Flag blue white, scarf 1976 & 1999, cap, water<br/><b>Wear:</b> Blue white #114b8d kit — 1,000 sold in 3 days<br/><b>Don't bring:</b> Bottles, weapons<br/><b>Chant:</b> Bakhebi! Surgeons! Pride of East!<br/><b>Kadodi:</b> Dance at halftime • Bamasaba culture</div><Link href="/shop" className="mt-4 block bg-black text-white text-center py-2 rounded-full font-black text-[10px]">BUY KIT & SCARF →</Link></div>
          </div>
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="space-y-6">
          <div style={{background: LOGO_BLUE}} className="text-white rounded-[1.5rem] p-5"><h4 className="font-black text-sm">🏆 64 YEARS • 2x UGANDA CUP • EST. 1960</h4><div className="mt-4 bg-white text-black rounded-xl p-4"><div className="font-black text-center">MBALE HEROES HONOURS</div><div className="mt-3 space-y-2 text-[11px]"><div className="flex justify-between bg-[#facc15] p-2 rounded-lg font-black"><span>Uganda Cup Winners</span><span>1976 & 1999</span></div><div className="flex justify-between bg-[#f8f9fb] p-2 rounded-lg"><span>Runners-up</span><span>1993</span></div><div className="flex justify-between bg-[#f8f9fb] p-2 rounded-lg"><span>Africa Cup Winners Cup</span><span>1977 & 2000</span></div><div className="flex justify-between bg-black text-white p-2 rounded-lg"><span>Promotion after 19y</span><span>2024</span></div></div></div><Link href="/club" className="mt-4 block bg-[#facc15] text-black text-center py-2.5 rounded-full font-black text-[11px]">FULL HISTORY 1960-2025 →</Link></div>

          <div className="bg-white border-2 rounded-[1.5rem] p-5"><h4 className="font-black text-sm">📊 SEASON STATS 2025/26 • TOP OF TABLE</h4><div className="mt-4 space-y-2 text-[11px]"><div className="flex justify-between bg-[#facc15] p-3 rounded-xl font-black"><span>Position</span><span>1st • 18 pts</span></div><div className="flex justify-between bg-[#f8f9fb] p-3 rounded-xl"><span>Unbeaten</span><span>8 games</span></div><div className="flex justify-between bg-[#f8f9fb] p-3 rounded-xl"><span>Home Record</span><span>4W 1D 0L</span></div><div className="flex justify-between bg-[#f8f9fb] p-3 rounded-xl"><span>Top Scorer</span><span>Kyomuhangi 8 goals</span></div><div className="flex justify-between bg-[#f8f9fb] p-3 rounded-xl"><span>Captain</span><span>Ochan 5 clean sheets</span></div></div><Link href="/team" className="mt-4 block bg-black text-white text-center py-2.5 rounded-full font-black text-[11px]">MEET SQUAD →</Link></div>

          <div className="bg-black text-white rounded-[1.5rem] p-5"><h4 className="font-black text-sm">💬 1,200+ BAKHEBI ON WHATSAPP • JOIN</h4><div className="mt-3 text-[11px] opacity-70 leading-5">Instant ticket alerts, lineup 1 hr before, goal alerts, Kadodi videos, 1976 & 1999 memories, 64 years stories. Surgeons Army.</div><div className="mt-3 bg-white/10 rounded-xl p-3 text-[10px]">✅ Ticket giveaways • 1976 & 1999 stories<br/>✅ 1-0 vs Villa memorable<br/>✅ Kadodi drums videos<br/>✅ Meet players</div><a href="https://wa.me/256700568634" target="_blank" className="mt-4 block bg-[#facc15] text-black text-center py-3 rounded-full font-black text-[11px]">JOIN WHATSAPP • +256700568634 →</a></div>

          <div className="bg-[#f8f9fb] border rounded-[1.5rem] p-5"><h4 className="font-black text-sm">❓ FAQ • TICKETS • 10K STADIUM</h4><div className="mt-4 space-y-3 text-[11px]"><div><b>Can I pay at gate?</b><br/><span className="opacity-60">Yes cash, but book WhatsApp to guarantee — 5,000 expected vs KCCA, sells out.</span></div><div><b>Kids ticket?</b><br/><span className="opacity-60">Under 8 free with adult, under 14 half price regular — Future Bakhebi.</span></div><div><b>What is Kadodi?</b><br/><span className="opacity-60">Traditional Bamasaba dance drums — heartbeat of Mbale Municipal since 1975 — 90 mins non-stop.</span></div><div><b>Why 2 cups?</b><br/><span className="opacity-60">1976 first upcountry winner ever, 1999 beating Villa 3-1 — only Eastern team with 2 cups.</span></div></div></div>
        </div>
      </section>
    </div>
  )
}