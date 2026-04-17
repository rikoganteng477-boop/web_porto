const Competencies = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-8">
      <div className="flex items-center justify-between mb-12">
        <h3 className="font-headline text-3xl font-extrabold tracking-tight text-on-surface">
          Fokus & Pembelajaran
        </h3>
        <span className="hidden md:block text-sm font-label text-on-surface-variant font-medium">Portofolio Skill</span>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        <div className="bg-surface-container-lowest rounded-xl p-8 hover:bg-surface-bright transition-colors duration-300 shadow-[0_10px_30px_rgba(10,25,47,0.03)] hover:shadow-[0_20px_40px_rgba(10,25,47,0.08)] group border-0 flex flex-col h-full">
          <div className="w-14 h-14 rounded-lg bg-surface-container-low flex items-center justify-center mb-6 group-hover:bg-secondary/10 transition-colors">
            <span className="material-symbols-outlined text-on-surface-variant group-hover:text-secondary text-2xl transition-colors">account_balance</span>
          </div>
          <h4 className="font-headline font-bold text-xl text-on-surface mb-3">Pasar Saham Indonesia</h4>
          <p className="font-body text-sm text-on-surface-variant leading-relaxed flex-grow">
            Mempelajari analisis fundamental dan teknikal pada emiten-emiten di Bursa Efek Indonesia untuk strategi investasi jangka panjang.
          </p>
          <div className="mt-6 pt-6 border-t border-outline-variant/10">
            <span className="text-xs font-label font-semibold text-secondary uppercase tracking-wider">Investor Pemula</span>
          </div>
        </div>

        <div className="bg-surface-container-lowest rounded-xl p-8 hover:bg-surface-bright transition-colors duration-300 shadow-[0_10px_30px_rgba(10,25,47,0.03)] hover:shadow-[0_20px_40px_rgba(10,25,47,0.08)] group border-0 flex flex-col h-full">
          <div className="w-14 h-14 rounded-lg bg-surface-container-low flex items-center justify-center mb-6 group-hover:bg-secondary/10 transition-colors">
            <span className="material-symbols-outlined text-on-surface-variant group-hover:text-secondary text-2xl transition-colors">currency_bitcoin</span>
          </div>
          <h4 className="font-headline font-bold text-xl text-on-surface mb-3">Crypto & Bitcoin</h4>
          <p className="font-body text-sm text-on-surface-variant leading-relaxed flex-grow">
            Menabung secara konsisten pada Bitcoin sebagai penyimpan nilai digital (Digital Gold) untuk melawan inflasi mata uang.
          </p>
          <div className="mt-6 pt-6 border-t border-outline-variant/10">
            <span className="text-xs font-label font-semibold text-secondary uppercase tracking-wider">HODLer</span>
          </div>
        </div>

        <div className="bg-primary-container text-on-primary rounded-xl p-8 shadow-[0_20px_40px_rgba(10,25,47,0.12)] border-0 flex flex-col h-full relative overflow-hidden">
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-secondary/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="w-14 h-14 rounded-lg bg-white/5 flex items-center justify-center mb-6">
            <span className="material-symbols-outlined text-secondary text-2xl">polyline</span>
          </div>
          <h4 className="font-headline font-bold text-xl mb-3">Algorithmic Modeling</h4>
          <p className="font-body text-sm text-surface-variant leading-relaxed flex-grow relative z-10">
            Designing quantitative models to execute structural trades. Utilizing machine learning concepts to identify non-linear relationships in market data.
          </p>
          <div className="mt-6 pt-6 border-t border-white/10 relative z-10">
            <span className="text-xs font-label font-semibold text-secondary uppercase tracking-wider">Proprietary Systems Builder</span>
          </div>
        </div>

        <div className="lg:col-span-2 bg-surface-container-lowest rounded-xl p-8 hover:bg-surface-bright transition-colors duration-300 shadow-[0_10px_30px_rgba(10,25,47,0.03)] hover:shadow-[0_20px_40px_rgba(10,25,47,0.08)] group border-0 flex flex-col md:flex-row gap-8 items-start md:items-center">
          <div className="flex-shrink-0 w-16 h-16 rounded-lg bg-surface-container-low flex items-center justify-center group-hover:bg-secondary/10 transition-colors">
            <span className="material-symbols-outlined text-on-surface-variant group-hover:text-secondary text-3xl transition-colors">shield_person</span>
          </div>
          <div>
            <h4 className="font-headline font-bold text-xl text-on-surface mb-2">Risk Management Frameworks</h4>
            <p className="font-body text-sm text-on-surface-variant leading-relaxed max-w-2xl">
              Implementation of Basel III principles and internal capital adequacy assessment processes. Ensuring institutional-grade protection protocols are active across all digital and traditional asset portfolios.
            </p>
          </div>
        </div>

        <div className="bg-surface-container-lowest rounded-xl p-8 hover:bg-surface-bright transition-colors duration-300 shadow-[0_10px_30px_rgba(10,25,47,0.03)] hover:shadow-[0_20px_40px_rgba(10,25,47,0.08)] group border-0 flex flex-col h-full">
          <div className="w-14 h-14 rounded-lg bg-surface-container-low flex items-center justify-center mb-6 group-hover:bg-secondary/10 transition-colors">
            <span className="material-symbols-outlined text-on-surface-variant group-hover:text-secondary text-2xl transition-colors">integration_instructions</span>
          </div>
          <h4 className="font-headline font-bold text-xl text-on-surface mb-3">Systems Integration</h4>
          <p className="font-body text-sm text-on-surface-variant leading-relaxed flex-grow">
            Seamlessly connecting legacy financial systems with modern API-driven architectures to ensure zero-latency data flow.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Competencies;
