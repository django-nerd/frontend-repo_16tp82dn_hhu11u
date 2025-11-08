import { Crown, ShoppingCart } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-black/30 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-rose-400 to-fuchsia-600 text-white shadow-lg shadow-fuchsia-600/30">
              <Crown className="h-5 w-5" />
            </span>
            <span className="text-xl font-semibold tracking-wider text-white">Queen</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
            <a href="#collections" className="hover:text-white transition">Collections</a>
            <a href="#best" className="hover:text-white transition">Best Sellers</a>
            <a href="#craft" className="hover:text-white transition">Craft</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </nav>

          <button className="inline-flex items-center gap-2 rounded-full bg-white/10 hover:bg-white/20 text-white px-4 py-2 text-sm transition border border-white/10">
            <ShoppingCart className="h-4 w-4" />
            Cart
          </button>
        </div>
      </div>
    </header>
  );
}
