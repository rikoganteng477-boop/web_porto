import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path;
  
  // Halaman selain Home akan menggunakan navbar solid (tidak transparan) agar lebih terbaca
  const isSolid = scrolled || location.pathname !== '/';

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isSolid ? 'nav-scrolled' : 'bg-[#0A192F]/40 border-transparent glassmorphism-blur shadow-none'}`}>
      <div className="flex justify-between items-center max-w-7xl mx-auto px-8 h-20">
        <Link to="/" className="text-xl font-bold tracking-tight text-white font-headline hover:scale-[1.02] transition-transform duration-200">
          Naufal Hisyam
        </Link>
        
        <div className="hidden md:flex space-x-8 items-center">
          <Link to="/" className={`font-label font-medium text-sm hover:scale-[1.02] transition-all duration-200 ${isActive('/') ? 'text-[#10B981] border-b-2 border-[#10B981] pb-1' : 'text-slate-300 hover:text-white'}`}>
            Home
          </Link>
          <Link to="/portfolio" className={`font-label font-medium text-sm hover:scale-[1.02] transition-all duration-200 ${isActive('/portfolio') ? 'text-[#10B981] border-b-2 border-[#10B981] pb-1' : 'text-slate-300 hover:text-white'}`}>
            Portfolio
          </Link>
          <Link to="/about" className={`font-label font-medium text-sm hover:scale-[1.02] transition-all duration-200 ${isActive('/about') ? 'text-[#10B981] border-b-2 border-[#10B981] pb-1' : 'text-slate-300 hover:text-white'}`}>
            About
          </Link>
          <Link to="/contact" className={`font-label font-medium text-sm hover:scale-[1.02] transition-all duration-200 ${isActive('/contact') ? 'text-[#10B981] border-b-2 border-[#10B981] pb-1' : 'text-slate-300 hover:text-white'}`}>
            Contact
          </Link>
        </div>
        
        <div className="flex items-center space-x-6">
          <div className="hidden lg:flex space-x-4">
            <button aria-label="Notifications" className="text-slate-300 hover:text-white transition-colors hover:scale-[1.02] duration-200">
              <span className="material-symbols-outlined">notifications</span>
            </button>
            <button aria-label="Account" className="text-slate-300 hover:text-white transition-colors hover:scale-[1.02] duration-200">
              <span className="material-symbols-outlined">account_circle</span>
            </button>
          </div>
          <button className="bg-[#10B981] text-white px-5 py-2.5 rounded-lg font-label text-sm font-semibold hover:scale-[1.02] transition-transform duration-200 shadow-none hidden md:block">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
