import DashboardWidget from './DashboardWidget';

const Hero = () => {
  return (
    <section className="bg-gradient-hero min-h-[921px] flex items-center relative overflow-hidden pt-20">
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-20 right-10 w-96 h-96 bg-secondary-container rounded-full mix-blend-screen filter blur-[100px]"></div>
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-primary-container rounded-full mix-blend-screen filter blur-[80px]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-8 w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6 space-y-8">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-secondary mr-2 animate-pulse"></span>
            <span className="text-xs font-medium text-slate-300 tracking-wider uppercase">Mahasiswa & Calon Investor Muda</span>
          </div>
          <h1 className="font-headline text-[3.5rem] leading-[1.1] tracking-[-0.02em] font-extrabold text-white">
            Naufal Hisyam <span className="text-[#10B981]">Ramdani</span>.
          </h1>
          <p className="font-body text-[1.125rem] leading-[1.6] text-slate-300 max-w-xl">
            Fokus membangun kekayaan melalui investasi <span className="text-white font-semibold">Crypto, Bitcoin, dan Saham Indonesia</span>. Saya percaya kesuksesan finansial dan mobil impian seperti Ferrari bisa diraih melalui literasi dan konsistensi.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button className="bg-secondary text-on-secondary px-8 py-3 rounded-md font-medium hover:scale-[1.02] transition-transform duration-200 shadow-[0_20px_40px_rgba(10,25,47,0.06)] flex items-center justify-center group">
              View My Work
              <span className="material-symbols-outlined ml-2 group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </button>
            <button className="text-secondary px-8 py-3 rounded-md font-medium relative overflow-hidden group">
              <span className="relative z-10">Get in Touch</span>
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
            </button>
          </div>
        </div>

        <div className="lg:col-span-6 relative">
          <DashboardWidget />
          <div className="absolute -top-6 -right-6 w-32 h-32 bg-surface-container-lowest/50 backdrop-blur-lg rounded-xl z-10 border border-white/5 animate-pulse"></div>
          <div className="absolute -bottom-8 -left-8 w-48 h-24 bg-surface-container-lowest/40 backdrop-blur-lg rounded-xl z-10 border border-white/5"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
