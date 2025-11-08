import { Sparkles } from 'lucide-react';

const items = [
  {
    title: 'Lunar Set',
    subtitle: 'Matte white with chrome rim',
    image:
      'https://images.unsplash.com/photo-1610366398518-1cec07f24640?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Aurora Cups',
    subtitle: 'Iridescent sheen, thin lip',
    image:
      'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Crown Platter',
    subtitle: 'Wide plate with pearl glaze',
    image:
      'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=1600&auto=format&fit=crop',
  },
];

export default function Collections() {
  return (
    <section id="collections" className="relative bg-black py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-white">Signature Collections</h2>
            <p className="text-white/60 mt-2 max-w-xl">Minimal geometry, celestial glazes, and uncompromising silhouette. Designed for modern palaces.</p>
          </div>
          <span className="hidden sm:inline-flex items-center gap-2 text-white/70">
            <Sparkles className="h-4 w-4" /> Limited production
          </span>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <article key={item.title} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <h3 className="text-white font-medium tracking-wide">{item.title}</h3>
                <p className="text-white/60 text-sm mt-1">{item.subtitle}</p>
                <button className="mt-4 inline-flex rounded-full bg-white text-black px-4 py-2 text-xs font-medium hover:bg-white/90 transition">View Details</button>
              </div>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
