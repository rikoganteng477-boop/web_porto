const PortfolioHero = () => {
  return (
    <section className="max-w-7xl mx-auto px-8 mb-20">
      <div className="hero-gradient rounded-xl p-12 text-on-primary relative overflow-hidden flex flex-col md:flex-row items-center justify-between">
        <div className="relative z-10 md:w-2/3">
          <h1 className="font-headline text-5xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight text-on-primary">
            Perjalanan <span className="text-secondary">Investasi Saya</span>.
          </h1>
          <p className="font-body text-lg text-primary-fixed-dim leading-relaxed max-w-2xl mb-8">
            Sebuah galeri dari pencapaian, portofolio aset kripto, serta analisis pergerakan saham Indonesia yang sedang saya pelajari dan kembangkan.
          </p>
          <div className="flex flex-wrap gap-4 mt-8">
            <button className="bg-surface-container-lowest text-primary px-6 py-2 rounded-full font-label text-sm font-semibold shadow-sm hover:bg-surface-bright transition-colors border border-outline-variant/20">All Works</button>
            <button className="bg-transparent text-primary-fixed-dim border border-primary-fixed-dim/30 px-6 py-2 rounded-full font-label text-sm font-medium hover:text-white hover:border-white transition-colors">Technology</button>
            <button className="bg-transparent text-primary-fixed-dim border border-primary-fixed-dim/30 px-6 py-2 rounded-full font-label text-sm font-medium hover:text-white hover:border-white transition-colors">Finance</button>
            <button className="bg-transparent text-primary-fixed-dim border border-primary-fixed-dim/30 px-6 py-2 rounded-full font-label text-sm font-medium hover:text-white hover:border-white transition-colors">AI Models</button>
          </div>
        </div>
        <div className="hidden md:block w-1/3 opacity-20 absolute right-0 top-0 h-full">
          <img 
            alt="Abstract data visualization with network nodes" 
            className="w-full h-full object-cover mix-blend-screen" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDwQLk0eZohBUwKYA-YprCKZN0t46D6wPZ8Plbx7OxUeCJ6fu4DDyO-YY3-5eg5EXVrVvFC4UPv9Wf1eTod5iDB2Yp-ZAsnf5BMMctJ41sB7FFlQ-aqESqhsZ4z0_N8t50kk_RY9q_4jOUEXkEfXHNGC-cE1mFumKblUYvGD49-pfePAxvuNcyCqi-GsOVvf4HXYf2CCnHh4CmEZf8SHmxmfAoj4xy5QhW8vxG5vcVwFnvo6bfvx8YhE4D7zsBVkbJ93scPU89VcUwV"
          />
        </div>
      </div>
    </section>
  );
};

export default PortfolioHero;
