import { Star } from 'lucide-react';

const products = [
  {
    name: 'Regalia Cup',
    price: 89,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1633434370256-48f1748d8ed6?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxSZWdhbGlhJTIwQ3VwfGVufDB8MHx8fDE3NjI2NDI1MjF8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
  {
    name: 'Orbital Bowl',
    price: 120,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?q=80&w=1600&auto=format&fit=crop',
  },
  {
    name: 'Crown Dinner Plate',
    price: 140,
    rating: 5.0,
    image: 'https://images.unsplash.com/photo-1631030960702-5c6db58fbd0d?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxDcm93biUyMERpbm5lciUyMFBsYXRlfGVufDB8MHx8fDE3NjI2NDI1MjF8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
];

export default function BestSellers() {
  return (
    <section id="best" className="relative bg-black py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-semibold text-white">Best Sellers</h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p) => (
            <div key={p.name} className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="aspect-square overflow-hidden rounded-xl">
                <img src={p.image} alt={p.name} className="h-full w-full object-cover" loading="lazy" />
              </div>
              <div className="mt-4 flex items-start justify-between">
                <div>
                  <h3 className="text-white font-medium">{p.name}</h3>
                  <div className="mt-1 flex items-center gap-1 text-amber-400 text-sm">
                    <Star className="h-4 w-4 fill-amber-400" />
                    <span>{p.rating}</span>
                  </div>
                </div>
                <span className="text-white">${p.price}</span>
              </div>
              <button className="mt-4 w-full rounded-full bg-white text-black py-2 text-sm font-medium hover:bg-white/90 transition">Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
