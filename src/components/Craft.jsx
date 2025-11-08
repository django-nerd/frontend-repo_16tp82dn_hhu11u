import { Diamond } from 'lucide-react';

export default function Craft() {
  return (
    <section id="craft" className="relative bg-gradient-to-b from-black to-[#0a0a0a] py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-2xl sm:text-3xl font-semibold text-white">The Craft</h2>
            <p className="mt-4 text-white/70">Each Queen piece is forged from ultra-refined kaolin and fired twice for strength and translucency. Nanoglaze technology produces a radiant finish that resists scratches while preserving the delicate feel of porcelain.</p>
            <ul className="mt-6 space-y-3 text-white/80 text-sm">
              <li className="flex items-center gap-2"><span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/10"><Diamond className="h-3 w-3" /></span> Hand finished rims with platinum microline</li>
              <li className="flex items-center gap-2"><span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/10"><Diamond className="h-3 w-3" /></span> Lead-free, food-safe, dishwasher compatible</li>
              <li className="flex items-center gap-2"><span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/10"><Diamond className="h-3 w-3" /></span> Lifetime brilliance guarantee</li>
            </ul>
          </div>

          <div className="order-1 md:order-2 relative overflow-hidden rounded-2xl border border-white/10 bg-white/5">
            <img src="https://images.unsplash.com/photo-1610701596061-2ecf227e85b2?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxQb3JjZWxhaW4lMjBjcmFmdHxlbnwwfDB8fHwxNzYyNjQyNTIyfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Porcelain craft" className="h-full w-full object-cover" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
