const AboutHero = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-8 mt-12 mb-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center bg-gradient-to-br from-primary to-primary-container text-on-primary rounded-xl overflow-hidden shadow-[0_20px_40px_rgba(10,25,47,0.12)]">
        <div className="lg:col-span-5 h-full min-h-[400px] lg:min-h-[600px] relative">
          <img 
            alt="Naufal Hisyam Ramdani Portrait" 
            className="absolute inset-0 w-full h-full object-cover object-center" 
            src="/profil.jpeg"
          />
        </div>
        
        <div className="lg:col-span-7 p-10 lg:p-16 flex flex-col justify-center">
          <span className="text-secondary font-label font-bold tracking-widest text-sm uppercase mb-4 block">Universitas PGRI Semarang</span>
          <h1 className="font-headline text-5xl lg:text-6xl font-extrabold tracking-tighter mb-8 leading-tight">
            Naufal Hisyam Ramdani
          </h1>
          <div className="space-y-6 font-body text-base text-surface-variant leading-relaxed">
            <p>
              Halo, nama saya Naufal Hisyam Ramdani. Saya adalah seorang mahasiswa di Universitas PGRI Semarang yang bercita-cita besar menjadi seorang <strong>Investor Muda</strong>. Saya memiliki minat yang sangat mendalam terhadap dunia finansial, khususnya pada instrumen investasi <strong>Crypto, Bitcoin, dan Saham Indonesia</strong>.
            </p>
            <p>
              Saya rutin membaca tentang investasi dan menabung dalam bentuk Bitcoin untuk membangun kekayaan masa depan. Mimpi saya adalah memiliki sebuah mobil Ferrari. Saya tahu itu tidaklah mudah, tapi saya percaya tidak ada yang tidak mungkin di saat matahari masih terbit. Dengan literasi dan konsistensi, semuanya bisa dicapai.
            </p>
          </div>
          <div className="mt-12 flex items-center space-x-6">
            <div className="flex items-center space-x-3">
              <span className="material-symbols-outlined text-secondary text-3xl">terminal</span>
              <span className="font-headline font-bold text-lg">Informatics Base</span>
            </div>
            <div className="w-12 h-[2px] bg-outline-variant/30"></div>
            <div className="flex items-center space-x-3">
              <span className="material-symbols-outlined text-secondary text-3xl">candlestick_chart</span>
              <span className="font-headline font-bold text-lg">Market Execution</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
