const ContactHero = () => {
  return (
    <header className="hero-gradient text-white py-24 px-8 w-full">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-end justify-between">
        <div className="max-w-2xl">
          <h1 className="font-headline text-[3.5rem] leading-none tracking-tighter font-extrabold mb-6">Mari berdiskusi<br/>seputar investasi.</h1>
          <p className="font-body text-slate-300 text-[0.875rem] leading-[1.6] max-w-lg">
            Terbuka untuk bertukar pikiran seputar prospek Saham Indonesia, pergerakan Bitcoin, atau strategi membangun kekayaan. Hubungi saya melalui salah satu kanal di bawah ini.
          </p>
        </div>
      </div>
    </header>
  );
};

export default ContactHero;
