import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-black" id="hero">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/8GDmF1UDFb4hQW1f/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/80" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-40 pb-24 text-center">
        <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
          Queen Porcelain
        </h1>
        <p className="mt-4 text-white/70 max-w-2xl mx-auto">
          Futuristic, premium tableware crafted with regal precision. Elevate your rituals with luminous porcelain.
        </p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <a href="#collections" className="inline-flex items-center rounded-full bg-white text-black px-6 py-3 text-sm font-medium hover:bg-white/90 transition">
            Explore Collections
          </a>
          <a href="#best" className="inline-flex items-center rounded-full bg-white/10 text-white px-6 py-3 text-sm font-medium hover:bg-white/20 transition border border-white/10">
            Best Sellers
          </a>
        </div>
      </div>
    </section>
  );
}
