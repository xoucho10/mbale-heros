"use client"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { usePathname } from "next/navigation"

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "Team", href: "/team" },
  { name: "Fixtures", href: "/fixtures" },
  { name: "News", href: "/news" },
  { name: "Shop", href: "/shop" },
  { name: "Club", href: "/club" },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  return (
    <header className="sticky top-0 z-50 bg-black text-white border-b-4 border-[#114b8d]">
      <div className="bg-[#114b8d] text-white text-[10px] py-1.5 text-center tracking-[0.2em] uppercase font-bold">THE PRIDE OF THE EAST • BAKHEBI • MBALE • EST. 1960</div>
      <nav className="max-w-[1300px] mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" onClick={()=>setOpen(false)} className="flex items-center gap-3 font-black text-xl tracking-tighter">
          <div className="w-10 h-10 relative bg-white rounded-full p-1">
            <Image src="/logo.png" alt="Mbale Heroes Club Logo" fill className="object-contain" />
          </div>
          <span>MBALE <span className="text-[#facc15]">HEROES</span></span>
        </Link>
        <div className="hidden md:flex items-center gap-6 font-black text-[11px] uppercase tracking-widest">
          {NAV_LINKS.map(l => {
            const active = pathname === l.href
            return <Link key={l.name} href={l.href} className={active ? "text-[#facc15] border-b-2 border-[#facc15] pb-1" : "opacity-70 hover:text-[#facc15]"}>{l.name}</Link>
          })}
        </div>
        <div className="flex items-center gap-3">
          <Link href="/tickets" className="hidden md:block bg-[#facc15] text-black px-5 py-2.5 rounded-full font-black text-[11px]">Buy Tickets</Link>
          <button onClick={()=>setOpen(!open)} className="md:hidden text-2xl">{open ? "✕" : "☰"}</button>
        </div>
      </nav>
      {open && (
        <div className="md:hidden bg-zinc-900 p-4 flex flex-col gap-1 font-black uppercase text-sm">
          {NAV_LINKS.map(l => <Link key={l.name} href={l.href} onClick={()=>setOpen(false)} className={`py-3 border-b border-zinc-800 ${pathname===l.href ? "text-[#facc15]" : "text-white"}`}>{l.name}</Link>)}
          <Link href="/tickets" onClick={()=>setOpen(false)} className="mt-4 bg-[#facc15] text-black text-center py-3 rounded-full">Buy Tickets</Link>
        </div>
      )}
    </header>
  )
}