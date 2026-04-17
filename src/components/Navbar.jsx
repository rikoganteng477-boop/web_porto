import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Tutup menu mobile saat berpindah halaman
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const isActive = (path) => location.pathname === path;
  
  // Halaman selain Home akan menggunakan navbar solid (tidak transparan) agar lebih terbaca
  const isSolid = scrolled || location.pathname !== '/';

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/portfolio', label: 'Portfolio' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isSolid ? 'nav-scrolled' : 'bg-[#0A192F]/40 border-transparent glassmorphism-blur shadow-none'}`}>
      <div className="flex justify-between items-center max-w-7xl mx-auto px-6 md:px-8 h-20">
        <Link to="/" className="text-xl font-bold tracking-tight text-white font-headline hover:scale-[1.02] transition-transform duration-200">
          Naufal Hisyam
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`font-label font-medium text-sm hover:scale-[1.02] transition-all duration-200 ${isActive(link.path) ? 'text-[#10B981] border-b-2 border-[#10B981] pb-1' : 'text-slate-300 hover:text-white'}`}
            >
              {link.label}
            </Link>
          ))}
        </div>
        
        <div className="flex items-center space-x-4">
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

          {/* Hamburger Button (Mobile) */}
          <button
            className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined text-2xl">
              {mobileOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${mobileOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'}`}
        style={{ backgroundColor: 'rgba(10, 25, 47, 0.95)', backdropFilter: 'blur(16px)' }}
      >
        <div className="flex flex-col px-6 py-4 space-y-1 border-t border-white/10">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`py-3 px-4 rounded-lg font-label font-medium text-sm transition-all duration-200 ${isActive(link.path) ? 'text-[#10B981] bg-[#10B981]/10' : 'text-slate-300 hover:text-white hover:bg-white/5'}`}
            >
              {link.label}
            </Link>
          ))}
          <button className="mt-2 bg-[#10B981] text-white w-full py-3 rounded-lg font-label text-sm font-semibold hover:bg-[#10B981]/90 transition-colors">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
