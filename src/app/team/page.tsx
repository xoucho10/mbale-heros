"use client"
// MBALE HEROES FC - TEAM PAGE - FULL CONTENT + STAFF + MORE - NO HEADER/FOOTER
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

const GOALKEEPERS = [
  { n: "P. OCHAN", num: "1", age: 26, nat: "UG", img: "/players/player-1.png", stat: "5 Clean Sheets", tag: "Captain", apps: 8, saves: 22, height: "1.85m", weight: "82kg", joined: "2022", prev: "Mbarara City" },
  { n: "H. KIPROTICH", num: "13", age: 22, nat: "UG", img: "/players/player-1.png", stat: "1 Clean Sheet", tag: "Young", apps: 1, saves: 4, height: "1.82m", weight: "78kg", joined: "2024", prev: "Academy" },
]

const DEFENDERS = [
  { n: "S. MUKASA", num: "4", age: 24, nat: "UG", img: "/players/player-10.png", stat: "28 Tackles", pos: "CB", apps: 8, tackles: 28, goals: 0, joined: "2023", prev: "BUL FC" },
  { n: "I. WASSWA", num: "5", age: 27, nat: "UG", stat: "22 Clearances", pos: "CB", apps: 7, tackles: 18, goals: 0, joined: "2021", prev: "Express" },
  { n: "B. MULUMBA", num: "3", age: 23, nat: "UG", stat: "19 Tackles", pos: "LB", apps: 8, tackles: 19, goals: 0, joined: "2022", prev: "UPDF" },
  { n: "E. WANDERA", num: "2", age: 25, nat: "UG", stat: "15 Blocks", pos: "RB", apps: 6, tackles: 15, goals: 0, joined: "2023", prev: "Gaddafi" },
  { n: "J. NAMANDA", num: "15", age: 20, nat: "UG", stat: "Academy", pos: "CB", apps: 2, tackles: 5, goals: 0, joined: "2025", prev: "Mbale SS" },
]

const MIDFIELDERS = [
  { n: "R. WANYAMA", num: "8", age: 26, nat: "UG", img: "/players/player-10.png", stat: "6 Assists", tag: "Vice Captain", pos: "CM", apps: 8, goals: 1, assists: 6, joined: "2020", prev: "Vipers" },
  { n: "J. KAWOOYA", num: "6", age: 24, nat: "UG", stat: "3 Goals", pos: "CDM", apps: 8, goals: 3, assists: 1, joined: "2022", prev: "Wakiso Giants" },
  { n: "A. KAKOOZA", num: "11", age: 22, nat: "UG", stat: "2 Goals", pos: "CM", apps: 7, goals: 2, assists: 1, joined: "2023", prev: "KCCA" },
  { n: "M. OKELLO", num: "7", age: 23, nat: "UG", stat: "4 Goals", pos: "RW", apps: 8, goals: 4, assists: 2, joined: "2021", prev: "Maroons" },
  { n: "S. OPIO", num: "14", age: 19, nat: "UG", stat: "Debut", pos: "CAM", apps: 1, goals: 0, assists: 0, joined: "2025", prev: "Nabumali High" },
]

const FORWARDS = [
  { n: "D. KYOMUHANGI", num: "10", age: 25, nat: "UG", img: "/players/player-10.png", stat: "8 Goals", tag: "Top Scorer", pos: "ST", apps: 8, goals: 8, assists: 2, joined: "2023", prev: "Arua Hill" },
  { n: "F. SSENTAMU", num: "9", age: 27, nat: "UG", stat: "5 Goals", pos: "ST", apps: 8, goals: 5, assists: 0, joined: "2022", prev: "Busoga United" },
  { n: "K. MUSOBYA", num: "17", age: 21, nat: "UG", stat: "2 Goals", pos: "LW", apps: 5, goals: 2, assists: 1, joined: "2024", prev: "Mbale Heroes Academy" },
]

const STAFF = [
  { name: "Asaph Mwebaze", role: "Head Coach", nat: "UG", exp: "10 Years", img: "", prev: "Maroons, Mbale Heroes", license: "CAF A", age: 42 },
  { name: "Fred Kajoba", role: "Assistant Coach", nat: "UG", exp: "8 Years", prev: "Vipers", license: "CAF B", age: 38 },
  { name: "D. Mubiru", role: "Goalkeeper Coach", nat: "UG", exp: "5 Years", prev: "SC Villa", license: "CAF C", age: 35 },
  { name: "Dr. J. Wabwire", role: "Team Doctor", nat: "UG", exp: "12 Years", prev: "Mbale Hospital", license: "Medical Degree", age: 45 },
  { name: "M. Chemutai", role: "Physio", nat: "UG", exp: "6 Years", prev: "UPDF FC", license: "Diploma", age: 32 },
  { name: "S. Wadada", role: "Kit Manager", nat: "UG", exp: "15 Years", prev: "Mbale Heroes Since 2010", license: "-", age: 50 },
]

function PlayerCard({ pl, large }: { pl: any, large?: boolean }) {
  return (
    <div className={`bg-white border rounded-[1.2rem] overflow-hidden shadow-sm hover:shadow-xl transition group ${large ? "col-span-2 md:col-span-1" : ""}`}>
      <div className={`${large ? "h-[440px]" : "h-[360px]"} relative bg-[#eef2ff]`}>
        {pl.img ? <Image src={pl.img} alt={pl.n} fill className="object-cover object-top group-hover:scale-105 transition duration-500" /> : <div className="grid place-items-center h-full text-6xl bg-gradient-to-br from-[#114b8d]/20 to-[#facc15]/20">🧑‍🦱</div>}
        <div className="absolute top-3 left-3 bg-[#facc15] text-black text-[11px] font-black px-3 py-1 rounded-full">#{pl.num}</div>
        <div className="absolute top-3 right-3 bg-black/70 text-white text-[8px] px-2.5 py-1 rounded-full">{pl.tag || pl.pos}</div>
        <div className="absolute bottom-0 w-full h-28 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
        <div className="absolute bottom-3 left-3 right-3 text-white">
          <div className="font-black text-[15px]">{pl.n}</div>
          <div className="text-[10px] opacity-80 flex gap-2 mt-1"><span>{pl.pos || "GK"}</span><span>•</span><span>{pl.stat}</span><span>•</span><span>{pl.age}y • {pl.nat}</span></div>
          <div className="mt-2 flex gap-2 flex-wrap"><span className="text-[7px] bg-white/20 px-2 py-1 rounded-full">{pl.apps} APPS</span>{pl.goals !== undefined && <span className="text-[7px] bg-[#facc15] text-black px-2 py-1 rounded-full font-black">{pl.goals} GOALS</span>}<span className="text-[7px] bg-[#114b8d] px-2 py-1 rounded-full">{pl.joined ? `Since ${pl.joined}` : "UG"}</span></div>
        </div>
      </div>
      <div className="p-3 flex justify-between text-[10px]"><span className="opacity-60">{pl.height || ""} {pl.prev ? `• ${pl.prev}` : ""}</span><span className="font-bold" style={{color:"#114b8d"}}>VIEW PROFILE →</span></div>
    </div>
  )
}

export default function TeamPage() {
  const [pos, setPos] = useState("ALL")

  const allPlayers = [...GOALKEEPERS, ...DEFENDERS, ...MIDFIELDERS, ...FORWARDS]
  const filtered = pos === "ALL" ? allPlayers : pos === "GK" ? GOALKEEPERS : pos === "DEF" ? DEFENDERS : pos === "MID" ? MIDFIELDERS : FORWARDS

  return (
    <div className="bg-[#f8f9fb] text-[#0a1f44] font-sans">
      <section className="bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0"><Image src="/team/full-squad-hero.jpg" alt="Full Squad" fill className="object-cover opacity-40" /><div className="absolute inset-0 bg-gradient-to-r from-[#114b8d]/90 to-black/70"></div></div>
        <div className="relative max-w-[1300px] mx-auto px-4 py-12 md:py-20 grid md:grid-cols-[1.3fr_0.7fr] gap-8 items-end">
          <div><div className="text-[10px] font-bold tracking-widest text-[#facc15] uppercase">FIRST TEAM 2025/26 • {allPlayers.length} PLAYERS • BLUE WHITE KIT #114B8D • EST. 1960 • BAKHEBI</div><h1 className="font-black text-5xl md:text-[72px] leading-[0.85] tracking-tighter mt-3">OUR<br/>HEROES</h1><p className="mt-4 text-white/70 text-sm max-w-[520px]">16 Ugandan talents, one badge. Average age 23.5 years. Top scorer D. Kyomuhangi 8 goals, 6 assists R. Wanyama, 5 clean sheets P. Ochan. Unbeaten in 8 games. 2x Uganda Cup 1976 & 1999. From Gangama United 1960s.</p><div className="mt-6 flex gap-2 flex-wrap">{["ALL","GK","DEF","MID","FW"].map(p=><button key={p} onClick={()=>setPos(p)} className={`px-5 py-2.5 rounded-full font-black text-[11px] ${pos===p?"bg-[#facc15] text-black":"bg-white/10 border border-white/20 text-white"}`}>{p} {p==="ALL"?`(${allPlayers.length})`:p==="GK"?`(${GOALKEEPERS.length})`:p==="DEF"?`(${DEFENDERS.length})`:p==="MID"?`(${MIDFIELDERS.length})`:`(${FORWARDS.length})`}</button>)}</div></div>
          <div className="bg-white text-black rounded-[1.5rem] p-5 shadow-2xl"><div className="font-black text-center text-sm">SQUAD STATS 2025/26 • TOP OF TABLE</div><div className="mt-4 grid grid-cols-3 gap-3 text-center"><div className="bg-[#f8f9fb] rounded-xl p-3"><div className="font-black text-xl">{allPlayers.length}</div><div className="text-[9px] opacity-60">PLAYERS</div></div><div className="bg-[#facc15] rounded-xl p-3"><div className="font-black text-xl">8</div><div className="text-[9px] opacity-60">UNBEATEN</div></div><div className="bg-[#114b8d] text-white rounded-xl p-3"><div className="font-black text-xl">18</div><div className="text-[9px] opacity-80">POINTS • 1ST</div></div></div><div className="mt-3 text-[11px] space-y-2"><div className="flex justify-between bg-[#f8f9fb] p-2 rounded-lg"><span>Top Scorer</span><b>D. Kyomuhangi 8 Goals</b></div><div className="flex justify-between bg-[#f8f9fb] p-2 rounded-lg"><span>Top Assist</span><b>R. Wanyama 6 Assists</b></div><div className="flex justify-between bg-[#f8f9fb] p-2 rounded-lg"><span>Clean Sheets</span><b>P. Ochan 5 CS</b></div><div className="flex justify-between bg-[#f8f9fb] p-2 rounded-lg"><span>Avg Age</span><b>23.5 Years</b></div><div className="flex justify-between bg-black text-white p-2 rounded-lg"><span>Est.</span><b>1960 Gangama United</b></div></div></div>
        </div>
      </section>

      <section className="max-w-[1300px] mx-auto px-4 py-8">
        <div className="flex justify-between items-end mb-6"><h2 className="font-black text-2xl">{pos} • {filtered.length} PLAYERS • BLUE WHITE ARMY</h2><Link href="/fixtures" className="text-[11px] font-black px-4 py-2 rounded-full bg-black text-white">FORMATION 4-3-3 • EST. 1960 →</Link></div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">{filtered.map((pl,i)=><PlayerCard key={i} pl={pl} large={i<2 && pos==="ALL"} />)}</div>

        {pos==="ALL" && (
          <>
            <h2 className="font-black text-3xl mt-14 mb-2">TECHNICAL STAFF • 6 MEMBERS • EST. 1960 LEGACY</h2>
            <p className="text-[11px] opacity-60 mb-6">Led by Asaph Mwebaze • 10 years experience • CAF A License • 64 years pride</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {STAFF.map((s,i)=><div key={i} className={`rounded-[1.2rem] p-5 text-center ${i===0?"bg-[#114b8d] text-white border-2 border-[#114b8d] md:col-span-2":"bg-white border"}`}><div className={`w-20 h-20 rounded-full mx-auto grid place-items-center text-2xl ${i===0?"bg-[#facc15] text-black":"bg-[#114b8d]/10"}`}>👔</div><div className="font-black text-sm mt-3">{s.name}</div><div className={`text-[10px] mt-1 ${i===0?"text-[#facc15]":"opacity-60"}`}>{s.role} • {s.license}</div><div className="text-[9px] bg-zinc-100 text-black rounded-full mt-2 py-1.5 px-2 inline-block">{s.exp} • {s.age}y • {s.prev}</div>{i===0 && <div className="mt-3 text-[10px] opacity-80">Head Coach since 2023 • Promotion 2024 vs Onduparaka 2-1 • 2-1 vs SC Villa memorable • Leads Surgeons Army</div>}</div>)}
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="bg-[#114b8d] text-white rounded-[1.5rem] p-6"><h3 className="font-black text-lg">FORMATION 4-3-3 • BLUE WHITE</h3><div className="mt-4 bg-white/10 rounded-xl p-4 font-mono text-[11px] leading-7">4-3-3 ATTACKING<br/><br/>GK: Ochan #1 - Captain<br/>DEF: Wandera #2 - Mukasa #4 - Wasswa #5 - Mulumba #3<br/>MID: Kawooya #6 (CDM) - Wanyama #8 (VC) - Kakoosa #11<br/>FW: Okello #7 - Kyomuhangi #10 - Ssentamu #9<br/><br/>Subs: Kiprotich, Namanda, Musobya, Opio</div><div className="mt-4 text-[10px] opacity-70">Unbeaten 8 games • Top of table 18 points • 5,000+ Bakhebi • Kadodi drums</div><Link href="/fixtures" className="mt-4 block bg-[#facc15] text-black text-center py-2.5 rounded-full font-black text-[11px]">VIEW FIXTURES →</Link></div>

              <div className="bg-[#facc15] rounded-[1.5rem] p-6 border-2 border-black"><h3 className="font-black text-lg">CAPTAINS • BAKHEBI LEADERS</h3><div className="mt-4 space-y-3"><div className="bg-white rounded-xl p-4 flex gap-3 items-center"><div className="w-12 h-12 bg-black text-white grid place-items-center rounded-full font-black text-lg">C</div><div><div className="font-black text-sm">P. OCHAN #1 • CAPTAIN</div><div className="text-[10px] opacity-60">Goalkeeper • 26y • 5 Clean Sheets • Since 2022 • Mbarara City • 1.85m</div><div className="mt-1 text-[8px] bg-[#f8f9fb] rounded-full px-2 py-1 inline-block">22 SAVES • 8 APPS • LEADER</div></div></div><div className="bg-white rounded-xl p-4 flex gap-3 items-center"><div className="w-12 h-12 bg-[#114b8d] text-white grid place-items-center rounded-full font-black text-lg">VC</div><div><div className="font-black text-sm">R. WANYAMA #8 • VICE CAPTAIN</div><div className="text-[10px] opacity-60">Midfielder • 26y • 6 Assists • Since 2020 • Vipers • CM</div><div className="mt-1 text-[8px] bg-[#114b8d] text-white rounded-full px-2 py-1 inline-block">1 GOAL • 6 ASSISTS • 8 APPS</div></div></div><div className="bg-black text-white rounded-xl p-4 text-[11px]">Leaders of The Surgeons • 64 years pride • Est. 1960 • 2x Uganda Cup • Kadodi • 10,000 stadium • 5,000+ fans</div></div><Link href="/club" className="mt-4 block bg-black text-white text-center py-2.5 rounded-full font-black text-[11px]">CLUB HISTORY 1960 →</Link></div>

              <div className="bg-white border-2 rounded-[1.5rem] p-6"><h3 className="font-black text-lg">STATS LEADERS 2025/26 • UPL</h3><div className="mt-4 space-y-2.5 text-[12px]"><div className="flex justify-between bg-[#f8f9fb] p-3 rounded-xl"><span>⚽ Goals</span><b>D. Kyomuhangi (8)</b></div><div className="flex justify-between bg-[#f8f9fb] p-3 rounded-xl"><span>🎯 Assists</span><b>R. Wanyama (6)</b></div><div className="flex justify-between bg-[#f8f9fb] p-3 rounded-xl"><span>🛡️ Tackles</span><b>S. Mukasa (28)</b></div><div className="flex justify-between bg-[#f8f9fb] p-3 rounded-xl"><span>🧤 Clean Sheets</span><b>P. Ochan (5)</b></div><div className="flex justify-between bg-[#f8f9fb] p-3 rounded-xl"><span>📅 Apps</span><b>5 players (8 apps)</b></div><div className="flex justify-between bg-[#114b8d] text-white p-3 rounded-xl"><span>🏆 Points</span><b>18 Points (1st) • Unbeaten 8</b></div></div><div className="mt-4 grid grid-cols-2 gap-2 text-[10px]"><div className="bg-[#facc15] rounded-lg p-2 text-center"><b>8</b><br/>Goals Kyomuhangi</div><div className="bg-black text-white rounded-lg p-2 text-center"><b>5</b><br/>Clean Sheets Ochan</div></div><Link href="/fixtures" className="mt-4 block text-center text-[10px] font-black bg-black text-white py-2.5 rounded-full">VIEW LEAGUE TABLE →</Link></div>
            </div>

            <div className="mt-12 grid md:grid-cols-2 gap-6">
              <div className="bg-white border-2 rounded-[1.5rem] p-6">
                <h3 className="font-black text-xl">FROM ACADEMY TO FIRST TEAM • 14 PROMOTED SINCE 2020 • PRIDE OF THE EAST</h3>
                <p className="text-[11px] opacity-60 mt-2">Mbale SS, Nkoma SS, Nabumali High • Bugisu region • Trials 200+ in Sept 2025 • Est. early 1960s as Gangama United</p>
                <div className="mt-5 grid md:grid-cols-2 gap-3">
                  <div className="bg-[#f8f9fb] rounded-xl p-4 border"><b>J. Namanda #15 • 20y</b><div className="text-[11px] opacity-60 mt-1">Academy CB • 2 apps • 5 tackles • Promoted 2025 from Mbale SS • 1.84m • Bugisu talent</div><div className="mt-2 text-[8px] bg-[#114b8d] text-white px-2 py-1 rounded-full inline-block">ACADEMY → FIRST TEAM</div></div>
                  <div className="bg-[#f8f9fb] rounded-xl p-4 border"><b>S. Opio #14 • 19y</b><div className="text-[11px] opacity-60 mt-1">CAM • Debut 2025 • Youngest in squad • 1 app • Nabumali High • Future star • 200+ trials</div><div className="mt-2 text-[8px] bg-[#facc15] text-black px-2 py-1 rounded-full inline-block font-black">YOUNGEST 19y</div></div>
                  <div className="bg-[#114b8d] text-white rounded-xl p-4"><b>14 Players Promoted</b><div className="text-[11px] opacity-80 mt-1">Since 2020 • Pride of the East • Schools: Mbale SS, Nkoma, Nabumali • Bugisu region talent search • 200+ trials Sept 2025</div><div className="mt-2 text-[9px] bg-[#facc15] text-black px-3 py-1 rounded-full inline-block font-black">64 YEARS LEGACY</div></div>
                  <div className="bg-black text-white rounded-xl p-4"><b>200+ Trials Sept 2025</b><div className="text-[11px] opacity-70 mt-1">Academy trials attract talents from Bugisu, Sironko, Kapchorwa, Bududa • 5 schools partnership • Next: Jan 2026</div><Link href="/club" className="mt-3 block bg-[#facc15] text-black text-center py-2 rounded-full text-[10px] font-black">JOIN ACADEMY →</Link></div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-black text-white rounded-[1.5rem] p-6"><h3 className="font-black">LEGACY • 2x UGANDA CUP</h3><div className="mt-4 grid grid-cols-2 gap-3"><div className="bg-[#facc15] text-black rounded-xl p-4"><div className="font-black">1976 🏆</div><div className="text-[10px] mt-1">First Uganda Cup • Beat Coffee FC 4-2 pens • First upcountry winner • 1977 Africa Cup Winners Cup vs Rangers Int</div></div><div className="bg-[#114b8d] text-white rounded-xl p-4"><div className="font-black">1999 🏆</div><div className="text-[10px] mt-1">Second Cup • Beat SC Villa 3-1 semi • Beat Lyantonde final • 2000 Africa Cup vs Saint-Louis</div></div></div><Link href="/club" className="mt-4 block bg-white text-black text-center py-2.5 rounded-full font-black text-[11px]">FULL HISTORY 1960-2025 →</Link></div>
                <div className="bg-[#f8f9fb] border rounded-[1.5rem] p-5"><h4 className="font-black text-sm">📱 FOLLOW THE HEROES</h4><div className="mt-3 grid grid-cols-3 gap-2 text-center"><div className="bg-white border rounded-xl p-3"><div className="font-black">45K</div><div className="text-[8px] opacity-60">FACEBOOK</div></div><div className="bg-white border rounded-xl p-3"><div className="font-black">18K</div><div className="text-[8px] opacity-60">INSTAGRAM</div></div><div className="bg-white border rounded-xl p-3"><div className="font-black">22K</div><div className="text-[8px] opacity-60">TIKTOK</div></div></div><a href="https://wa.me/256700568634" target="_blank" className="mt-4 block bg-black text-white text-center py-2.5 rounded-full font-black text-[10px]">JOIN WHATSAPP 1,200+ →</a></div>
              </div>
            </div>
          </>
        )}
      </section>
    </div>
  )
}