const Philosophy = () => {
  return (
    <section className="max-w-5xl mx-auto px-6 md:px-8 mb-24 relative">
      <div className="absolute inset-0 bg-primary-container rounded-xl transform -skew-y-2 opacity-5 scale-105 -z-10"></div>
      <div className="bg-surface-container-lowest rounded-xl p-12 lg:p-16 text-center shadow-[0_20px_40px_rgba(10,25,47,0.04)]">
        <span className="material-symbols-outlined text-secondary text-5xl mb-6 opacity-80">psychology</span>
        <h2 className="font-headline text-4xl lg:text-5xl font-bold tracking-tighter text-on-surface mb-6">
          "Tidak Ada yang Tidak Mungkin di Saat Matahari Terbit"
        </h2>
        <div className="max-w-3xl mx-auto font-body text-lg text-on-surface-variant leading-relaxed">
          <p className="mb-4">
            Itu adalah filosofi utama saya. Membangun kekayaan hingga mampu membeli Ferrari tidaklah mudah, namun dengan investasi rutin pada Bitcoin dan Saham, serta terus membaca dan belajar tentang pasar modal, hal tersebut sangat mungkin terjadi.
          </p>
          <p>
            Literasi investasi adalah kunci utamanya. Karena itulah saya selalu menyempatkan waktu untuk membaca dan memperdalam ilmu finansial saya.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
