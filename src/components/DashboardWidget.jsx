const DashboardWidget = () => {
  return (
    <div className="bg-surface-container-lowest rounded-xl p-8 relative z-20 shadow-[0_20px_40px_rgba(10,25,47,0.06)] backdrop-blur-xl border border-white/10 hover:bg-surface-bright transition-colors duration-300">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h3 className="font-headline font-bold text-lg text-primary-container">Portfolio Alpha</h3>
          <p className="text-sm text-on-surface-variant font-body">Real-time Performance Metrics</p>
        </div>
        <span className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-primary-container">more_horiz</span>
      </div>
      
      <div className="grid grid-cols-2 gap-4 mb-8">
        <div>
          <p className="text-xs text-on-surface-variant font-medium mb-1">Total Value</p>
          <p className="font-headline text-3xl font-extrabold tracking-tight text-primary-container">$1.24M</p>
        </div>
        <div>
          <p className="text-xs text-on-surface-variant font-medium mb-1">24h Change</p>
          <div className="flex items-center text-secondary">
            <span className="material-symbols-outlined text-sm mr-1">trending_up</span>
            <p className="font-headline text-xl font-bold">+4.2%</p>
          </div>
        </div>
      </div>
      
      <div className="relative h-48 w-full rounded-lg overflow-hidden border border-outline-variant/15 group cursor-crosshair">
        <svg className="absolute bottom-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
          <path className="fill-secondary/10 aura-effect" d="M0,100 L0,50 C20,60 30,30 50,40 C70,50 80,10 100,20 L100,100 Z"></path>
          <path d="M0,50 C20,60 30,30 50,40 C70,50 80,10 100,20" fill="none" stroke="#006c49" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path>
        </svg>
        <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-surface-variant/80 backdrop-blur-md px-3 py-2 rounded shadow-lg pointer-events-none">
          <p className="text-xs font-bold text-on-surface">$1.22M</p>
          <p className="text-[10px] text-on-surface-variant">14:30 EST</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardWidget;
