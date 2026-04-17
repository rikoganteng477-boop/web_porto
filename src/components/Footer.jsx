const Footer = () => {
  return (
    <footer className="bg-[#0A192F] w-full py-12 border-t border-white/5">
      <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto px-8 gap-6">
        <div className="flex flex-col md:flex-row items-center gap-4">
          <div className="text-lg font-black text-white font-headline">
            Naufal Hisyam Ramdani
          </div>
          <div className="hidden md:block w-px h-4 bg-white/20"></div>
          <p className="font-body text-[0.875rem] leading-[1.6] text-slate-400 text-center md:text-left">
            © 2024 Naufal Hisyam Ramdani. Universitas PGRI Semarang.
          </p>
        </div>
        
        <div className="flex space-x-6">
          <a className="font-body text-[0.875rem] leading-[1.6] text-slate-400 hover:text-[#10B981] transition-colors relative group" href="mailto:hisnaufal2@gmail.com">
            Email
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#10B981] transition-all group-hover:w-full"></span>
          </a>
          <a className="font-body text-[0.875rem] leading-[1.6] text-slate-400 hover:text-[#10B981] transition-colors relative group" href="https://instagram.com/nouvalhisyam10" target="_blank" rel="noopener noreferrer">
            Instagram
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#10B981] transition-all group-hover:w-full"></span>
          </a>
          <span className="font-body text-[0.875rem] leading-[1.6] text-slate-400">
            📍 Semarang
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
