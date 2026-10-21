"use client"
// MBALE HEROES FC - SHOP PAGE - CLEANED - NO HEADER/FOOTER - 26 PRODUCTS
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

const LOGO_BLUE = "#114b8d"

const CATEGORIES = ["ALL", "KITS", "TRAINING", "FAN WEAR", "ACCESSORIES", "KIDS"]

const PRODUCTS = [
  { id: 1, cat: "KITS", name: "HOME KIT 2025/26", desc: "Blue White Stripes • Shirt + Short + Socks • Est. 1960 • 2x Cup", price: 180000, img: "/kits/home-kit.png", badge: "BEST SELLER", sizes: ["S","M","L","XL","2XL"] },
  { id: 2, cat: "KITS", name: "AWAY KIT 2025/26", desc: "White Blue Trim • Shirt + Short + Socks", price: 180000, img: "/kits/away-kit.png", badge: "NEW" },
  { id: 3, cat: "KITS", name: "THIRD KIT 2025/26", desc: "All Royal Blue #114b8d • Shirt + Short + Socks", price: 185000, img: "/kits/third-kit.png", badge: "THIRD" },
  { id: 4, cat: "KITS", name: "KEEPER KIT 2025/26", desc: "Orange Keeper • Full Kit • P. Ochan #1", price: 175000, img: "/kits/keeper-kit.png", badge: "KEEPER" },
  { id: 5, cat: "KITS", name: "HOME SHIRT ONLY", desc: "Player Version • Blue White Army", price: 120000, img: "/kits/home-kit.png", badge: "SHIRT" },
  { id: 6, cat: "KITS", name: "AWAY SHIRT ONLY", desc: "Fan Version • Pride of the East", price: 115000, img: "/kits/away-kit.png", badge: "SHIRT" },
  { id: 7, cat: "TRAINING", name: "TRAINING JERSEY", desc: "Blue Training Top • Gofere partner Oct 2024", price: 75000, img: "/shop/training-jersey.png", badge: "TRAINING" },
  { id: 8, cat: "TRAINING", name: "TRAINING SHORTS", desc: "Navy Blue • #114b8d", price: 35000, img: "/shop/training-shorts.png", badge: "" },
  { id: 9, cat: "TRAINING", name: "TRACKSUIT TOP", desc: "Full Zip • Bakhebi", price: 120000, img: "/shop/tracksuit.png", badge: "PRO" },
  { id: 10, cat: "TRAINING", name: "TRACKSUIT BOTTOM", desc: "Slim Fit • 64 years", price: 80000, img: "/shop/tracksuit.png", badge: "" },
  { id: 11, cat: "FAN WEAR", name: "BAKHEBI T-SHIRT", desc: "Black Cotton • Bakhebi Print • Surgeons", price: 40000, img: "/shop/fan-tee.png", badge: "FAN FAVE" },
  { id: 12, cat: "FAN WEAR", name: "POLO SHIRT", desc: "Navy Blue • Embroidered Logo • Est. 1960", price: 60000, img: "/shop/polo.png", badge: "" },
  { id: 13, cat: "FAN WEAR", name: "HOODIE", desc: "Blue • Mbale Heroes Front • Kadodi", price: 95000, img: "/shop/hoodie.png", badge: "WINTER" },
  { id: 14, cat: "FAN WEAR", name: "JACKET", desc: "Bomber Jacket • Pride of the East", price: 130000, img: "/shop/jacket.png", badge: "" },
  { id: 15, cat: "FAN WEAR", name: "PANTS", desc: "Casual Pants • Black", price: 70000, img: "/shop/pants.png", badge: "" },
  { id: 16, cat: "ACCESSORIES", name: "SCARF", desc: "Blue White Stripes • 1976 & 1999", price: 30000, img: "/shop/scarf.png", badge: "ACCESSORY" },
  { id: 17, cat: "ACCESSORIES", name: "CAP", desc: "Snapback • Logo #114b8d", price: 35000, img: "/shop/cap.png", badge: "" },
  { id: 18, cat: "ACCESSORIES", name: "BEANIE", desc: "Knitted • Winter • Mbale", price: 25000, img: "/shop/beanie.png", badge: "" },
  { id: 19, cat: "ACCESSORIES", name: "WATER BOTTLE", desc: "750ml • Steel • Heroes", price: 25000, img: "/shop/bottle.png", badge: "" },
  { id: 20, cat: "ACCESSORIES", name: "BACKPACK", desc: "Club Backpack • Bakhebi", price: 65000, img: "/shop/backpack.png", badge: "" },
  { id: 21, cat: "ACCESSORIES", name: "FLAG", desc: "Large Flag 150x90 • Blue White", price: 40000, img: "/shop/flag.png", badge: "" },
  { id: 22, cat: "ACCESSORIES", name: "WRISTBAND", desc: "Silicone • 2 Pack • Est. 1960", price: 10000, img: "/shop/wristband.png", badge: "" },
  { id: 23, cat: "ACCESSORIES", name: "KEY HOLDER", desc: "Metal Logo • Surgeons", price: 15000, img: "/shop/key.png", badge: "" },
  { id: 24, cat: "KIDS", name: "KIDS HOME KIT", desc: "Ages 5-14 • Full Kit • Future Bakhebi", price: 130000, img: "/kits/home-kit.png", badge: "KIDS" },
  { id: 25, cat: "KIDS", name: "KIDS HOODIE", desc: "Mini Bakhebi • 64 years pride", price: 65000, img: "/shop/hoodie.png", badge: "KIDS" },
  { id: 26, cat: "KIDS", name: "KIDS CAP", desc: "Youth Size • Pride of the East", price: 25000, img: "/shop/cap.png", badge: "KIDS" },
]

export default function ShopPage() {
  const [filter, setFilter] = useState("ALL")
  const [cart, setCart] = useState<number[]>([])

  const filtered = filter === "ALL" ? PRODUCTS : PRODUCTS.filter(p => p.cat === filter)
  const total = cart.reduce((sum, id) => sum + (PRODUCTS.find(p=>p.id===id)?.price || 0), 0)

  const addToCart = (id: number) => setCart([...cart, id])

  return (
    <div className="bg-[#f8f9fb] text-[#0a1f44] font-sans min-h-screen">
      <section className="bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0"><Image src="/team/full-squad-hero.jpg" alt="" fill className="object-cover opacity-20" /><div className="absolute inset-0 bg-gradient-to-r from-[#114b8d] to-black opacity-80"></div></div>
        <div className="relative max-w-[1300px] mx-auto px-4 py-12 md:py-16 grid md:grid-cols-[1.2fr_0.8fr] gap-8 items-center">
          <div>
            <div className="text-[10px] font-bold tracking-widest text-[#facc15] uppercase">OFFICIAL STORE • 26 PRODUCTS • WORLDWIDE SHIPPING • EST. 1960 • 2x UGANDA CUP • GOFERE KIT PARTNER</div>
            <h1 className="font-black text-5xl md:text-[64px] leading-[0.85] tracking-tighter mt-3">SHOP<br/><span className="text-[#facc15]">BAKHEBI</span><br/>GEAR</h1>
            <p className="mt-4 text-white/60 text-sm max-w-[460px]">Every purchase supports the club — 64 years Pride of the East. Full kits, training, fan wear for men, women & kids. Delivery Mbale same day, Kampala 24hrs. 1,000 home kits sold in 3 days 2025.</p>
            <div className="mt-6 flex flex-wrap gap-2">{CATEGORIES.map(c => <button key={c} onClick={()=>setFilter(c)} className={`px-5 py-2.5 rounded-full font-black text-[10px] tracking-widest ${filter===c ? "bg-[#facc15] text-black" : "bg-white/10 text-white border border-white/20"}`}>{c} ({c==="ALL"?PRODUCTS.length:PRODUCTS.filter(p=>p.cat===c).length})</button>)}</div>
          </div>
          <div className="bg-white rounded-[1.5rem] p-5 text-black shadow-2xl">
            <div className="font-black text-sm flex justify-between"><span>🛒 YOUR CART • BAKHEBI ARMY</span><span className="bg-[#114b8d] text-white px-3 py-1 rounded-full text-[10px]">{cart.length} ITEMS</span></div>
            {cart.length===0 ? <div className="text-[11px] opacity-60 mt-3">No items yet. Add some Bakhebi gear! Support 64 years legacy.</div> :
              <div className="mt-3 space-y-2 max-h-[180px] overflow-auto">{cart.map((id,i)=>{const p=PRODUCTS.find(x=>x.id===id)!; return <div key={i} className="flex justify-between text-[11px] bg-[#f8f9fb] p-2 rounded-lg"><span>{p.name}</span><b>UGX {(p.price/1000)}K</b></div>})}</div>
            }
            <div className="border-t mt-3 pt-3 flex justify-between font-black"><span>TOTAL • EST. 1960</span><span>UGX {(total/1000)}K</span></div>
            <a href={`https://wa.me/256700568634?text=Hello%20Mbale%20Heroes%20Shop%20I%20want%20${cart.length}%20items%20total%20UGX%20${total}`} target="_blank" className="mt-3 w-full bg-[#114b8d] text-white py-3 rounded-full font-black text-xs text-center block">CHECKOUT ON WHATSAPP • +256700568634 →</a>
            <div className="mt-2 text-[9px] opacity-50 text-center">MTN MoMo • Airtel Money • Cash on Delivery • 2 Cups 1976 & 1999</div>
          </div>
        </div>
      </section>

      <section className="max-w-[1300px] mx-auto px-4 py-8">
        <div className="flex justify-between items-end mb-6"><h3 className="font-black text-xl">{filter} COLLECTION • {filtered.length} ITEMS • BLUE WHITE #114B8D</h3><div className="text-[11px] opacity-60">Free delivery over UGX 200K • 1,000 kits sold in 3 days</div></div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {filtered.map(p=>(
            <div key={p.id} className="bg-white border-2 rounded-[1.2rem] p-3 text-center shadow-sm hover:shadow-xl transition group">
              <div className="bg-[#f8f9fb] rounded-xl h-[220px] relative overflow-hidden border"><Image src={p.img} alt={p.name} fill className="object-contain p-4 group-hover:scale-105 transition duration-500" />{p.badge && <div className="absolute top-2 left-2 bg-black text-white text-[7px] font-black px-2.5 py-1 rounded-full">{p.badge}</div>}<div className="absolute top-2 right-2 bg-white border text-[8px] font-black px-2 py-1 rounded-full">{p.cat}</div><div className="absolute bottom-2 left-2 bg-[#114b8d] text-white text-[7px] px-2 py-1 rounded-full">EST. 1960</div></div>
              <div className="mt-3 text-left"><div className="font-black text-xs leading-tight">{p.name}</div><div className="text-[9px] opacity-60 mt-1 leading-tight line-clamp-2">{p.desc}</div><div className="text-[10px] opacity-40 mt-1">{p.sizes ? `Sizes: ${p.sizes.join(" ")}` : "One Size • Blue White"}</div><div className="flex justify-between items-center mt-2"><div className="text-sm font-black" style={{color: LOGO_BLUE}}>UGX {(p.price/1000)}K</div><div className="text-[8px] bg-[#facc15] text-black px-2 py-0.5 rounded-full font-black">IN STOCK • 2 CUPS</div></div></div>
              <button onClick={()=>addToCart(p.id)} className="mt-3 w-full bg-black text-white text-[10px] font-black py-3 rounded-full hover:bg-[#114b8d] transition">ADD TO CART • SUPPORT 64 YEARS</button>
              <Link href="/club" className="mt-2 w-full border text-[9px] font-bold py-2 rounded-full block text-center">BUY FULL KIT + NAME PRINTING • BAKHEBI</Link>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-[#114b8d] text-white rounded-[1.5rem] p-6 grid md:grid-cols-3 gap-6">
          <div><h4 className="font-black">GOFERE KIT PARTNER SINCE OCT 2024</h4><p className="text-[11px] opacity-70 mt-2">Blue White #114b8d • Home stripes fastest selling 1,000 in 3 days • Away white, Third royal blue, Keeper orange</p></div>
          <div><h4 className="font-black">64 YEARS PRIDE • BAKHEBI</h4><p className="text-[11px] opacity-70 mt-2">Surgeons in Lumasaba • First upcountry Uganda Cup winner 1976 • Second 1999 • 2 Africa campaigns 1977 & 2000</p></div>
          <div><h4 className="font-black">EVERY PURCHASE SUPPORTS ACADEMY</h4><p className="text-[11px] opacity-70 mt-2">14 promoted since 2020 • 200+ trials Sept 2025 • Mbale SS, Nkoma, Nabumali • Future Heroes</p><Link href="/club" className="mt-3 inline-block bg-[#facc15] text-black px-4 py-2 rounded-full text-[10px] font-black">CLUB HISTORY 1960 →</Link></div>
        </div>
      </section>

      <section className="bg-white border-y mt-8"><div className="max-w-[1300px] mx-auto px-4 py-10 grid md:grid-cols-4 gap-6 text-center"><div><div className="text-2xl">🚚</div><div className="font-black text-xs mt-2">SAME DAY DELIVERY MBALE</div><div className="text-[10px] opacity-60">Kampala 24hrs • Upcountry 2 days • 64 years delivery</div></div><div><div className="text-2xl">🔒</div><div className="font-black text-xs mt-2">SECURE PAYMENT</div><div className="text-[10px] opacity-60">MoMo, Airtel, Card, Cash • WhatsApp +256700568634</div></div><div><div className="text-2xl">↩️</div><div className="font-black text-xs mt-2">FREE EXCHANGE</div><div className="text-[10px] opacity-60">14 days if size wrong • Bakhebi guarantee</div></div><div><div className="text-2xl">⭐</div><div className="font-black text-xs mt-2">OFFICIAL LICENSED • 2 CUPS</div><div className="text-[10px] opacity-60">Gofere Authentic • #114b8d • Est. 1960 • 1976 & 1999</div></div></div></section>
    </div>
  )
}