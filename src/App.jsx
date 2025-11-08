import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Collections from './components/Collections';
import BestSellers from './components/BestSellers';
import Craft from './components/Craft';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main>
        <Hero />
        <Collections />
        <BestSellers />
        <Craft />
        <section id="contact" className="bg-black py-20 border-t border-white/10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div>
                <h3 className="text-2xl font-semibold">Join the Court</h3>
                <p className="mt-3 text-white/70">Be first to access limited releases and private tastings with our artisans.</p>
              </div>
              <form className="w-full">
                <div className="flex gap-3">
                  <input
                    type="email"
                    required
                    placeholder="your@email.com"
                    className="w-full rounded-full bg-white/5 border border-white/10 px-5 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/30"
                  />
                  <button className="shrink-0 rounded-full bg-white text-black px-6 py-3 font-medium hover:bg-white/90 transition">
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t border-white/10 bg-black/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between text-white/60 text-sm">
          <p>© {new Date().getFullYear()} Queen Porcelain. All rights reserved.</p>
          <div className="mt-3 sm:mt-0 flex items-center gap-6">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Instagram</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
