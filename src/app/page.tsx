"use client"
// MBALE HEROES FC - HOME PAGE - FULL LENGTH - NO HEADER/FOOTER
import Image from "next/image"
import Link from "next/link"

const LOGO_BLUE = "#114b8d"
const GOLD = "#facc15"

const PLAYERS = [
  {n:"D. KYOMUHANGI", pos:"Forward", num:"10", img:"/players/player-10.png", stat:"8 Goals", tag:"Top Scorer"},
  {n:"P. OCHAN", pos:"Goalkeeper", num:"1", img:"/players/player-1.png", stat:"5 Clean Sheets", tag:"Captain"},
  {n:"R. WANYAMA", pos:"Midfielder", num:"8", img:"/players/player-10.png", stat:"6 Assists", tag:"Vice Captain"},
  {n:"S. MUKASA", pos:"Defender", num:"4", img:"/players/player-10.png", stat:"28 Tackles", tag:""},
  {n:"J. KAWOOYA", pos:"Midfielder", num:"6", stat:"3 Goals"},
  {n:"M. OKELLO", pos:"Winger", num:"7", stat:"4 Goals"},
  {n:"I. WASSWA", pos:"Defender", num:"5", stat:"22 Clear"},
  {n:"F. SSENTAMU", pos:"Forward", num:"9", stat:"5 Goals"},
  {n:"A. KAKOOZA", pos:"Midfielder", num:"11", stat:"2 Goals"},
  {n:"B. MULUMBA", pos:"Defender", num:"3", stat:"19 Tackles"},
  {n:"H. KIPROTICH", pos:"Goalkeeper", num:"13", stat:"1 CS"},
  {n:"E. WANDERA", pos:"Defender", num:"2", stat:"15 Blocks"},
]

export default function Home() {
  return (
    <div className="bg-[#f8f9fb] text-[#0a1f44] font-sans">
      {/* HERO - FULL SQUAD */}
      <section className="relative h-[620px] md:h-[760px] overflow-hidden bg-black">
        <div className="absolute inset-0">
          <Image src="/team/full-squad-hero.jpg" alt="Mbale Heroes FC Full Squad 2025/26 - Blue White Kit" fill className="object-cover object-center" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-[#114b8d]/10"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a1931]/90 via-transparent to-transparent"></div>
        </div>
        <div className="relative max-w-[1300px] mx-auto px-4 h-full flex flex-col justify-between py-8">
          <div className="text-[10px] font-bold tracking-widest text-white/70 uppercase flex items-center gap-2"><span className="w-8 h-px bg-[#facc15]"></span> UGANDA PREMIER LEAGUE • 2025/26 • FULL SQUAD • MBALE MUNICIPAL STADIUM</div>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
            <div className="max-w-[620px]">
              <h1 className="font-black leading-[0.85] tracking-tighter"><span className="block text-white text-5xl md:text-[86px]">THE</span><span className="block text-transparent text-5xl md:text-[86px]" style={{WebkitTextStroke: '1.5px white'}}>HEROES</span><span className="block text-[#facc15] text-5xl md:text-[86px]">OF MBALE</span></h1>
              <p className="mt-6 text-white/80 text-[15px] leading-relaxed max-w-[480px]">14 men. One badge. Blue white stripes. 64 seasons of pride — founded early 1960s as Gangama United, 2x Uganda Cup 1976 & 1999, top of the table, unbeaten in 8, backed by 5,000+ Bakhebi at home.</p>
              <div className="mt-8 flex gap-3 flex-wrap">
                <Link href="/team" style={{background: GOLD}} className="text-black font-black text-xs px-7 py-3.5 rounded-full">MEET THE SQUAD →</Link>
                <Link href="/shop" className="text-white border border-white/30 font-black text-xs px-7 py-3.5 rounded-full backdrop-blur">BUY BLUE WHITE KIT</Link>
                <Link href="/club" className="text-white/70 font-black text-[10px] px-2 py-3 tracking-widest">OUR HISTORY SINCE 1960 →</Link>
              </div>
            </div>
            <div className="bg-white/95 backdrop-blur rounded-2xl p-3 flex gap-3 shadow-2xl">
              <div className="text-center px-3 border-r"><div className="font-black text-xl">1st</div><div className="text-[9px] opacity-60">POSITION</div></div>
              <div className="text-center px-3 border-r"><div className="font-black text-xl">18</div><div className="text-[9px] opacity-60">POINTS</div></div>
              <div className="text-center px-3"><div className="font-black text-xl">8</div><div className="text-[9px] opacity-60">UNBEATEN</div></div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 w-full border-t border-white/10 bg-black/50 backdrop-blur">
          <div className="max-w-[1300px] mx-auto px-4 py-3 flex flex-wrap justify-between gap-4 text-[10px] font-bold tracking-widest uppercase text-white/60">
            <span>EST. 1960 • 2 TITLES • 1 UGANDA CUP • MBALE MUNICIPAL STADIUM • 10,000 CAPACITY</span>
            <span className="flex gap-6"><span>FACEBOOK 45K</span><span>INSTAGRAM 18K</span><span className="text-[#facc15]">TIKTOK 22K</span></span>
          </div>
        </div>
      </section>

      {/* NEXT + LAST */}
      <section className="max-w-[1300px] mx-auto px-4 py-6 grid md:grid-cols-2 gap-4">
        <div className="bg-white shadow-lg rounded-[1.5rem] p-5 border"><div className="text-[10px] font-black opacity-60">UP NEXT • UPL 2025/26</div><div className="flex justify-between items-center mt-3 font-black"><span className="flex items-center gap-2"><span className="w-10 h-10 bg-purple-700 text-white grid place-items-center rounded-full">K</span> KCCA FC</span><span className="bg-[#facc15] px-4 py-1.5 rounded-full text-sm">VS</span><span className="flex items-center gap-2"><span className="w-10 h-10 relative"><Image src="/logo.png" alt="" fill className="object-contain" /></span> MBALE HEROES</span></div><div className="text-[10px] opacity-60 mt-2">Kadodi drums • 5,000 expected • Mt Elgon derby</div><Link href="/tickets" style={{background: LOGO_BLUE}} className="mt-4 block text-white text-xs text-center py-3 rounded-full font-bold">SAT 18 OCT • 16:00 • Mbale Municipal Stadium • BUY TICKETS →</Link></div>
        <div className="bg-white shadow-lg rounded-[1.5rem] p-5 border-l-8" style={{borderColor: LOGO_BLUE}}><div className="text-[11px] font-black flex gap-2">LAST RESULT <span className="bg-green-600 text-white px-2.5 rounded-full">WON 2-1</span><span className="bg-black text-white px-2.5 rounded-full text-[9px]">UNBEATEN 8</span></div><div className="font-black text-lg mt-2">MBALE HEROES 2 — 1 SC VIPERS</div><div className="text-[11px] opacity-60">12 OCT • D. Kyomuhangi 23&apos; • P. Ochan 67&apos; • 5,200 fans</div><Link href="/fixtures" className="text-[11px] font-black mt-3 inline-block" style={{color: LOGO_BLUE}}>VIEW MATCH REPORT + HIGHLIGHTS →</Link></div>
      </section>

      {/* FIRST TEAM + SIDEBAR */}
      <section className="max-w-[1300px] mx-auto px-4 py-6 grid md:grid-cols-[1.8fr_0.9fr] gap-6">
        <div className="space-y-10">
          <div>
            <div className="flex justify-between items-end"><h3 className="font-black text-2xl uppercase leading-none">First Team 2025/26<br/><span className="text-[11px] opacity-60">HUMAN PREVIEWS • BLUE WHITE KIT • #114B8D • 12 PLAYERS</span></h3><Link href="/team" style={{background: LOGO_BLUE}} className="text-white text-[11px] font-black px-5 py-2.5 rounded-full">VIEW ALL 12 →</Link></div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-5">
              {PLAYERS.slice(0,4).map((pl,i)=>(
                <Link href="/team" key={i} className="bg-white border rounded-[1.2rem] overflow-hidden shadow-sm hover:shadow-xl transition group">
                  <div className="h-[380px] relative bg-[#eef2ff]">
                    {pl.img ? <Image src={pl.img} alt={pl.n} fill className="object-cover object-top group-hover:scale-105 transition duration-500" /> : <div className="grid place-items-center h-full text-5xl">🧑‍🦱</div>}
                    <div className="absolute top-3 left-3 bg-[#facc15] text-black text-[11px] font-black px-3 py-1 rounded-full">#{pl.num}</div>
                    <div className="absolute top-3 right-3 bg-black/70 text-white text-[8px] px-2 py-1 rounded-full">{pl.tag || pl.pos}</div>
                    <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                    <div className="absolute bottom-2 left-3 right-3 text-white"><div className="font-black text-[13px]">{pl.n}</div><div className="text-[10px] opacity-80">{pl.pos} • {pl.stat}</div><div className="mt-1 flex gap-1"><span className="text-[7px] bg-white/20 px-2 py-0.5 rounded-full">UG</span><span className="text-[7px] bg-[#114b8d] px-2 py-0.5 rounded-full">FIRST TEAM</span></div></div>
                  </div>
                </Link>
              ))}
            </div>
            <div className="grid grid-cols-4 md:grid-cols-8 gap-3 mt-4">
              {PLAYERS.slice(4,12).map((pl,i)=><Link href="/team" key={i} className="bg-white border rounded-xl text-center p-2 hover:shadow-md transition"><div style={{background: LOGO_BLUE}} className="w-12 h-12 rounded-full mx-auto grid place-items-center text-white font-black">{pl.num}</div><div className="font-black text-[9px] mt-2 leading-tight">{pl.n}</div><div className="text-[8px] opacity-60">{pl.pos}</div><div className="text-[7px] mt-1 bg-zinc-100 rounded-full py-0.5">{pl.stat}</div></Link>)}
            </div>
          </div>

          {/* KITS - EXPANDED */}
          <div>
            <div className="flex justify-between items-end"><h3 className="font-black text-2xl">OFFICIAL KITS 2025/26 • BLUE WHITE</h3><Link href="/shop" className="text-[11px] font-bold" style={{color: LOGO_BLUE}}>SHOP ALL 26 ITEMS →</Link></div>
            <p className="text-[11px] opacity-60 mt-1">Human model preview • Shirt + Short + Socks • #114b8d • Gofere partnership Oct 2024</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-5">
              {[
                {name:"HOME KIT", desc:"Blue White Stripes", img:"/kits/home-kit.png", price:"UGX 180K", badge:"BEST SELLER"},
                {name:"AWAY KIT", desc:"White Blue Trim", img:"/kits/away-kit.png", price:"UGX 180K", badge:"AWAY"},
                {name:"THIRD KIT", desc:"All Royal Blue", img:"/kits/third-kit.png", price:"UGX 185K", badge:"THIRD"},
                {name:"KEEPER KIT", desc:"Orange Keeper", img:"/kits/keeper-kit.png", price:"UGX 175K", badge:"KEEPER"},
              ].map((kit,i)=>(
                <div key={i} className="bg-white border-2 rounded-[1.2rem] p-3 text-center shadow-sm hover:shadow-lg transition">
                  <Link href="/shop" className="bg-[#f8f9fb] rounded-xl h-[220px] relative overflow-hidden border block"><Image src={kit.img} alt={kit.name} fill className="object-contain p-2" /><div className="absolute top-2 left-2 bg-black text-white text-[7px] font-black px-2 py-1 rounded-full">{kit.badge}</div><div className="absolute bottom-2 right-2 bg-[#facc15] text-black text-[7px] font-black px-2 py-1 rounded-full">{kit.price}</div></Link>
                  <div className="mt-3"><div className="font-black text-xs">{kit.name}</div><div className="text-[9px] opacity-60">{kit.desc}</div><div className="text-[9px] opacity-50 mt-1">Full kit • Gofere brand</div><div className="text-sm font-black mt-1" style={{color: LOGO_BLUE}}>{kit.price}</div></div>
                  <Link href="/shop" style={{background: LOGO_BLUE}} className="mt-3 w-full text-white text-[10px] font-black py-3 rounded-full grid place-items-center">ADD FULL KIT</Link>
                </div>
              ))}
            </div>
            <div className="mt-4 bg-[#114b8d] text-white rounded-xl p-3 flex justify-between items-center text-[11px]"><span>🎉 Home Kit sold 1,000 units in 3 days • Restocked!</span><Link href="/shop" className="bg-[#facc15] text-black px-4 py-1.5 rounded-full font-black text-[10px]">SHOP NOW</Link></div>
          </div>

          {/* NEWS - EXPANDED 6 ITEMS */}
          <div><div className="flex justify-between"><h3 className="font-black text-xl">LATEST NEWS • 6 STORIES</h3><Link href="/news" className="text-[11px] font-bold" style={{color: LOGO_BLUE}}>VIEW ALL →</Link></div><div className="grid md:grid-cols-3 gap-4 mt-4">{[{t:"Academy trials attract 200+ talents from Bugisu", cat:"ACADEMY"},{t:"New partnership with Mbale schools to grow talent", cat:"CLUB NEWS"},{t:"Heroes secure 2-1 victory vs Vipers, unbeaten 8", cat:"MATCH REPORT"},{t:"Home Kit sold 1,000 in 3 days, fans queue", cat:"SHOP"},{t:"P. Ochan: 5 clean sheets, best GK in league", cat:"PLAYER"},{t:"Kadodi drums return to stadium after 19 years", cat:"FAN CULTURE"}].map((a,i)=><Link href="/news" key={i} className="bg-[#0f172a] text-white rounded-2xl p-4 flex gap-4 h-28 hover:bg-black transition"><div className="flex-1"><div className="text-[8px] bg-[#facc15] text-black inline-block px-2.5 py-1 rounded-full font-black">{a.cat}</div><div className="text-[12px] font-bold mt-2 line-clamp-2 leading-tight">{a.t}</div></div><div className="w-16 bg-white/10 rounded-xl grid place-items-center text-lg">📰</div></Link>)}</div></div>

          {/* HISTORY TIMELINE - NEW BIG CONTENT */}
          <div className="bg-white border rounded-[1.5rem] p-6">
            <h3 className="font-black text-xl">64 YEARS OF HISTORY • 1960 → 2025</h3>
            <p className="text-[11px] opacity-60 mt-1">From Gangama United to The Surgeons • 2x Uganda Cup</p>
            <div className="mt-6 grid md:grid-cols-4 gap-4 text-[11px]">
              <div className="bg-[#f8f9fb] rounded-xl p-4 border-l-4 border-[#facc15]"><b>1960s</b><br/>Founded as Gangama United in Mbale, schools: Mbale SS, Nkoma SS, Nabumali</div>
              <div className="bg-[#facc15] rounded-xl p-4 border-2 border-black"><b>1976 🏆</b><br/>First Uganda Cup • Beat Coffee FC 4-2 penalties • First upcountry winner • 1977 Africa Cup</div>
              <div className="bg-[#114b8d] text-white rounded-xl p-4"><b>1999 🏆</b><br/>Second Uganda Cup • Beat SC Villa 3-1 semi • Beat Lyantonde final • 2000 Africa</div>
              <div className="bg-black text-white rounded-xl p-4"><b>2024</b><br/>Promotion after 19 years • Beat Onduparaka 2-1 • Kadodi drums • 2-1 vs Villa memorable</div>
            </div>
            <Link href="/club" style={{background: LOGO_BLUE}} className="mt-5 inline-block text-white text-[11px] font-black px-6 py-3 rounded-full">READ FULL HISTORY 1960-2025 →</Link>
          </div>

          {/* VIDEO + ACADEMY */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-black text-white rounded-[1.5rem] p-5 relative overflow-hidden h-[280px]">
              <div className="absolute inset-0 opacity-30"><Image src="/team/full-squad-hero.jpg" alt="" fill className="object-cover" /></div>
              <div className="relative"><div className="text-[10px] bg-[#facc15] text-black inline-block px-3 py-1 rounded-full font-black">LATEST HIGHLIGHTS</div><h4 className="font-black text-xl mt-3">2-1 WIN VS VIPERS<br/>FULL HIGHLIGHTS</h4><div className="mt-6 w-14 h-14 bg-white text-black rounded-full grid place-items-center text-2xl">▶</div><div className="mt-6 text-[11px] opacity-70">12 Oct 2025 • 5,200 fans • Kyomuhangi 23&apos; Ochan 67&apos;</div></div>
            </div>
            <div className="bg-[#facc15] rounded-[1.5rem] p-5 border-2 border-black">
              <h4 className="font-black">ACADEMY • 200+ TRIALS</h4><div className="mt-3 bg-white rounded-xl p-4"><div className="font-black text-sm">Bugisu Talent Search</div><div className="text-[11px] opacity-60 mt-1">Mbale SS, Nkoma SS, Nabumali High • Age 14-19 • 14 players promoted to first team since 2020</div><div className="mt-3 grid grid-cols-3 gap-2 text-center"><div className="bg-[#f8f9fb] rounded-lg p-2"><div className="font-black">200+</div><div className="text-[8px] opacity-60">TRIALS</div></div><div className="bg-[#114b8d] text-white rounded-lg p-2"><div className="font-black">14</div><div className="text-[8px]">PROMOTED</div></div><div className="bg-black text-white rounded-lg p-2"><div className="font-black">5</div><div className="text-[8px]">SCHOOLS</div></div></div></div><Link href="/club" className="mt-4 block bg-black text-white text-center py-3 rounded-full font-black text-[11px]">JOIN ACADEMY →</Link>
            </div>
          </div>
        </div>

        {/* SIDEBAR - MORE CONTENT */}
        <div className="space-y-6">
          <div style={{background: LOGO_BLUE}} className="text-white rounded-[1.5rem] p-4"><div className="text-center font-black">LEAGUE TABLE • UPL 2025/26</div><div className="mt-3 bg-white text-black text-[11px] rounded-xl overflow-hidden"><div className="grid grid-cols-12 bg-black/5 p-2.5 font-black text-[10px]"><span className="col-span-1">#</span><span className="col-span-6">CLUB</span><span>P</span><span>W</span><span>PTS</span></div><div className="grid grid-cols-12 p-2.5 font-black bg-[#facc15]"><span className="col-span-1">1</span><span className="col-span-6 flex gap-1 items-center"><span className="w-4 h-4 relative"><Image src="/logo.png" alt="" fill className="object-contain" /></span>Mbale Heroes</span><span>8</span><span>5</span><span>18</span></div><div className="grid grid-cols-12 p-2.5 text-[10px] border-t"><span className="col-span-1">2</span><span className="col-span-6">KCCA</span><span>8</span><span>4</span><span>16</span></div><div className="grid grid-cols-12 p-2.5 text-[10px] border-t"><span className="col-span-1">3</span><span className="col-span-6">Vipers</span><span>8</span><span>4</span><span>15</span></div></div><Link href="/fixtures" className="mt-3 block text-center text-[10px] font-black bg-white/10 py-2 rounded-full">VIEW FULL TABLE →</Link></div>
          
          <div className="bg-orange-50 border rounded-[1.5rem] p-5"><h4 className="font-black">OUR LEGACY • STADIUM</h4><div className="mt-2 h-32 bg-[#114b8d]/10 rounded-xl grid place-items-center text-3xl relative overflow-hidden"><Image src="/team/full-squad-hero.jpg" alt="" fill className="object-cover opacity-40" /><span className="relative">🏟️</span></div><div className="text-[12px] font-bold mt-3">Mbale Municipal Stadium</div><div className="text-[10px] opacity-70 leading-5">10,000 Capacity • Since 1975 • Renovated 2024 for UPL • Hardest place to visit - Micho said 2002 • Kadodi drums</div><Link href="/club" style={{background: LOGO_BLUE}} className="mt-3 block text-white text-[10px] font-black py-2.5 rounded-full text-center">EXPLORE CLUB HISTORY →</Link></div>

          <div className="bg-[#facc15] rounded-[1.5rem] p-5 border-2 border-black"><h4 className="font-black text-sm">🏆 PLAYER OF MONTH</h4><div className="mt-3 bg-white rounded-xl p-3 flex gap-3 items-center"><div className="w-14 h-14 relative rounded-full overflow-hidden"><Image src="/players/player-10.png" alt="" fill className="object-cover" /></div><div><div className="font-black text-sm">D. Kyomuhangi</div><div className="text-[10px] opacity-60">8 Goals • Sept 2025 • Top scorer</div><div className="text-[9px] bg-[#f8f9fb] rounded-full px-2 py-1 mt-1 inline-block">6 MOTM awards</div><Link href="/team" className="text-[9px] font-black mt-1 block" style={{color: LOGO_BLUE}}>VIEW PROFILE →</Link></div></div><div className="mt-3 grid grid-cols-3 gap-2 text-center text-[10px]"><div className="bg-white rounded-lg p-2"><b>8</b><br/>Goals</div><div className="bg-black text-white rounded-lg p-2"><b>2</b><br/>Assists</div><div className="bg-[#114b8d] text-white rounded-lg p-2"><b>8</b><br/>Apps</div></div></div>

          <div className="bg-white border rounded-[1.5rem] p-5"><h4 className="font-black text-sm">📅 NEXT 5 FIXTURES • UPL</h4><div className="mt-3 space-y-2.5 text-[11px]"><div className="flex justify-between border-b pb-2"><span><b>18 Oct</b> vs KCCA (H) • 16:00</span><span className="text-[9px] bg-[#facc15] px-2 py-0.5 rounded-full">HOME</span></div><div className="flex justify-between border-b pb-2"><span><b>25 Oct</b> vs BUL (A) • 15:00</span><span className="text-[9px] bg-zinc-100 px-2 py-0.5 rounded">AWAY</span></div><div className="flex justify-between border-b pb-2"><span><b>01 Nov</b> vs Express (H)</span><span className="text-[9px] bg-[#facc15] px-2 py-0.5 rounded-full">HOME</span></div><div className="flex justify-between border-b pb-2"><span><b>08 Nov</b> vs SC Villa (A)</span><span className="text-[9px] bg-zinc-100 px-2 py-0.5 rounded">AWAY</span></div><div className="flex justify-between"><span><b>15 Nov</b> vs Kitara (H)</span><span className="text-[9px] bg-[#facc15] px-2 py-0.5 rounded-full">HOME</span></div></div><Link href="/fixtures" style={{background: LOGO_BLUE}} className="mt-3 block text-white text-[10px] font-black py-2.5 rounded-full text-center">VIEW ALL FIXTURES →</Link></div>

          <div className="bg-blue-50 border rounded-[1.5rem] p-5"><h4 className="font-black text-center">FAN ZONE • 5,000+ BAKHEBI</h4><div className="mt-4 space-y-3"><div className="bg-white p-3 rounded-xl shadow-sm"><div className="text-[11px] font-black">SUPPORTERS CLUB - SURGEONS ARMY</div><div className="text-[10px] opacity-60 mt-1">Kadodi drums, T-shirts, travel to away games</div><Link href="/club" style={{background: LOGO_BLUE}} className="mt-2 block text-white text-[9px] font-black py-2 rounded-full text-center">JOIN 5,000+ NOW</Link></div><div className="bg-white p-3 rounded-xl shadow-sm"><div className="text-[11px] font-black">PHOTO GALLERY • 19 YEARS WAIT</div><div className="text-[10px] opacity-60 mt-1">Promotion 2024 vs Onduparaka 2-1, packed stadium</div><Link href="/club" style={{background: LOGO_BLUE}} className="mt-2 block text-white text-[9px] font-black py-2 rounded-full text-center">EXPLORE 200+ PHOTOS</Link></div></div></div>

          <div style={{background: LOGO_BLUE}} className="text-white rounded-[1.5rem] p-5"><h4 className="font-black text-sm">💬 WHATSAPP CHANNEL • 1,200+ FANS</h4><div className="text-[11px] opacity-80 mt-2">Live updates, lineups, goals, Kadodi videos. Join Surgeons Army.</div><div className="mt-3 bg-white/10 rounded-xl p-3 text-[10px]">✅ Instant goal alerts<br/>✅ Exclusive interviews<br/>✅ Ticket giveaways</div><a href="https://wa.me/256700568634" target="_blank" style={{background: GOLD}} className="mt-3 block text-black text-[11px] font-black py-2.5 rounded-full text-center">JOIN CHANNEL →</a></div>

          <div className="bg-black text-white rounded-[1.5rem] p-5"><h4 className="font-black text-sm">📱 FOLLOW • 85K FANS</h4><div className="mt-3 grid grid-cols-3 gap-2 text-center"><div className="bg-white/10 rounded-xl p-2"><div className="font-black">45K</div><div className="text-[8px] opacity-60">FACEBOOK</div></div><div className="bg-white/10 rounded-xl p-2"><div className="font-black">22K</div><div className="text-[8px] opacity-60">TIKTOK</div></div><div className="bg-white/10 rounded-xl p-2"><div className="font-black">18K</div><div className="text-[8px] opacity-60">INSTA</div></div></div><Link href="/club" className="mt-3 block bg-[#facc15] text-black text-[10px] font-black py-2.5 rounded-full text-center">FOLLOW ALL →</Link></div>
        </div>
      </section>

      <section className="max-w-[1300px] mx-auto px-4 py-6">
        <div className="bg-white border-2 rounded-[1.5rem] p-6 grid md:grid-cols-4 gap-6">
          <div className="text-center"><div className="text-3xl font-black" style={{color: LOGO_BLUE}}>64</div><div className="text-[10px] font-bold opacity-60 tracking-widest">YEARS SINCE 1960</div><div className="text-[11px] mt-1 opacity-70">Gangama United to Mbale Heroes</div></div>
          <div className="text-center"><div className="text-3xl font-black" style={{color: LOGO_BLUE}}>2</div><div className="text-[10px] font-bold opacity-60 tracking-widest">UGANDA CUPS</div><div className="text-[11px] mt-1 opacity-70">1976 & 1999 - First upcountry winner</div></div>
          <div className="text-center"><div className="text-3xl font-black" style={{color: LOGO_BLUE}}>19</div><div className="text-[10px] font-bold opacity-60 tracking-widest">YEARS AWAY</div><div className="text-[11px] mt-1 opacity-70">2005-2024 in lower divisions</div></div>
          <div className="text-center"><div className="text-3xl font-black" style={{color: LOGO_BLUE}}>10K</div><div className="text-[10px] font-bold opacity-60 tracking-widest">STADIUM CAPACITY</div><div className="text-[11px] mt-1 opacity-70">Mbale Municipal Stadium</div></div>
        </div>
      </section>

      <section className="w-full bg-white border-y-2 border-zinc-100 mt-6"><div className="max-w-[1300px] mx-auto px-4 py-8"><h4 className="font-black text-[11px] tracking-[0.25em] text-center opacity-40">OFFICIAL PARTNERS • BLUE WHITE ARMY • GOFERE KIT PARTNER SINCE OCT 2024</h4><div className="grid grid-cols-3 md:grid-cols-6 gap-4 mt-6">{["MTN UGANDA","NILE BREWERIES","MBALE CITY","GOFERE","STANBIC BANK","STARTIMES"].map(s=><Link href="/club" key={s} className="bg-[#f8f9fb] border rounded-xl h-20 grid place-items-center hover:bg-zinc-100 transition"><div className="font-black text-[11px] text-center leading-tight">{s}</div></Link>)}</div></div></section>
    </div>
  )
}