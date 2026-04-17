const PortfolioGrid = () => {
  return (
    <section className="max-w-7xl mx-auto px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Project Card 1: Finance / Web App */}
        <article className="bg-surface-container-lowest rounded-xl overflow-hidden hover-scale ambient-shadow group flex flex-col h-full border-0">
          <div className="h-48 relative overflow-hidden bg-surface-container-low">
            <img 
              alt="Financial dashboard showing market trends" 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDKqdw6JOd3M5__f8FTDTTvYCMJpqSD90_aWqxbjw8sbhla51T3hsdRo3zkLKHPQL_IpPWrIEGlaUjU3xWAXzA6TFp6-9a2-K6praOhsHBFQRjHu3U6vYW75lhGcnTrApC4EaReIrsm5-_QUFNOiV85BjQdEsKPg8KJ_jKdcd5vbOOjj0K12tCGLQpoPZygBgW4W73kc0kMMzzFIInnB2llM5wsM6r8DjQ80FEoSFu9jKcJbAyHP-jAjI-R42sAFbXuY_6J-qmuwU7F"
            />
            <div className="absolute top-4 left-4 flex gap-2">
              <span className="bg-primary/80 backdrop-blur-sm text-white text-xs font-label px-2.5 py-1 rounded-sm">Finance</span>
              <span className="bg-primary/80 backdrop-blur-sm text-white text-xs font-label px-2.5 py-1 rounded-sm">Web App</span>
            </div>
          </div>
          <div className="p-8 flex-grow flex flex-col">
            <h3 className="font-headline text-xl font-bold text-on-surface mb-3">AlphaStream Equities</h3>
            <p className="font-body text-sm text-on-surface-variant leading-relaxed mb-6 flex-grow">
              Real-time institutional stock analysis platform aggregating high-frequency trading data into actionable visual insights.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="text-xs font-label text-on-surface-variant bg-surface-container-low px-2 py-1 rounded-sm">React</span>
              <span className="text-xs font-label text-on-surface-variant bg-surface-container-low px-2 py-1 rounded-sm">TypeScript</span>
              <span className="text-xs font-label text-on-surface-variant bg-surface-container-low px-2 py-1 rounded-sm">D3.js</span>
            </div>
            <div className="flex justify-between items-center mt-auto pt-4 border-t border-outline-variant/15">
              <a className="text-sm font-label font-semibold text-secondary ghost-button-hover flex items-center gap-1" href="#">
                View Case Study <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </a>
              <a className="text-on-surface-variant hover:text-primary transition-colors" href="#" title="View Source">
                <span className="material-symbols-outlined">code</span>
              </a>
            </div>
          </div>
        </article>

        {/* Project Card 2: AI / Tech */}
        <article className="bg-surface-container-lowest rounded-xl overflow-hidden hover-scale ambient-shadow group flex flex-col h-full border-0">
          <div className="h-48 relative overflow-hidden bg-surface-container-low">
            <img 
              alt="Abstract representation of artificial intelligence" 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB8cCmyRUlfYFAU5HWIYNcxDkPrCwtyxj5DmJbFax1wByg4ymJOr7GARL4EA2-btoY1l3u6PkuFsZQocDNuAcOHsotwDrQ8uIOjDtmsPCTrFkM__PipdNNOuN7MOCMG9IbKItvktT_9wUiw063MgNLYGxjqNyme_-nc7eCsCOXayAeXUG0biQVf3jMZgXyUnWgywNx3f5X3mqX0p3ae6c68UQroedDEQBlVRGVXgGpTMhWNWSJPrHOb0asV8R-WMQ7pz3nHpYKrlM_6"
            />
            <div className="absolute top-4 left-4 flex gap-2">
              <span className="bg-primary/80 backdrop-blur-sm text-white text-xs font-label px-2.5 py-1 rounded-sm">Tech</span>
              <span className="bg-primary/80 backdrop-blur-sm text-white text-xs font-label px-2.5 py-1 rounded-sm">AI Model</span>
            </div>
          </div>
          <div className="p-8 flex-grow flex flex-col">
            <h3 className="font-headline text-xl font-bold text-on-surface mb-3">Nexus Predictive Engine</h3>
            <p className="font-body text-sm text-on-surface-variant leading-relaxed mb-6 flex-grow">
              Machine learning model designed to forecast market volatility based on sentiment analysis of global financial news feeds.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="text-xs font-label text-on-surface-variant bg-surface-container-low px-2 py-1 rounded-sm">Python</span>
              <span className="text-xs font-label text-on-surface-variant bg-surface-container-low px-2 py-1 rounded-sm">TensorFlow</span>
              <span className="text-xs font-label text-on-surface-variant bg-surface-container-low px-2 py-1 rounded-sm">NLP</span>
            </div>
            <div className="flex justify-between items-center mt-auto pt-4 border-t border-outline-variant/15">
              <a className="text-sm font-label font-semibold text-secondary ghost-button-hover flex items-center gap-1" href="#">
                View Case Study <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </a>
              <a className="text-on-surface-variant hover:text-primary transition-colors" href="#" title="View Source">
                <span className="material-symbols-outlined">code</span>
              </a>
            </div>
          </div>
        </article>

        {/* Project Card 3: Interactive Feature (Bento Style Span) */}
        <article className="md:col-span-2 lg:col-span-1 bg-primary-container rounded-xl overflow-hidden hover-scale ambient-shadow group flex flex-col h-full border-0 relative">
          <div className="p-8 flex-grow flex flex-col z-10 relative">
            <div className="mb-4">
              <span className="bg-secondary/20 text-secondary-container text-xs font-label font-semibold px-2.5 py-1 rounded-sm border border-secondary/30">Interactive Widget</span>
            </div>
            <h3 className="font-headline text-2xl font-bold text-white mb-2">Compound Growth Engine</h3>
            <p className="font-body text-sm text-primary-fixed-dim leading-relaxed mb-8">
              A high-performance calculator demonstrating the power of time and consistent capital allocation.
            </p>
            {/* Mini Interactive Mockup inside Card */}
            <div className="bg-surface-container-lowest/10 backdrop-blur-md rounded-lg p-5 border border-white/10 mt-auto">
              <div className="flex justify-between items-end mb-4 border-b border-white/10 pb-4">
                <div>
                  <span className="text-xs text-primary-fixed-dim font-label block mb-1">Projected Value</span>
                  <span className="font-headline text-2xl text-white font-bold">$1,245,000</span>
                </div>
                <div className="text-right">
                  <span className="text-xs text-secondary-fixed font-label flex items-center gap-1">
                    <span className="material-symbols-outlined text-xs">trending_up</span> +8.5% APY
                  </span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between text-xs font-body text-primary-fixed-dim">
                  <span>Initial Principal</span>
                  <span className="text-white">$50,000</span>
                </div>
                <div className="flex justify-between text-xs font-body text-primary-fixed-dim">
                  <span>Monthly Contribution</span>
                  <span className="text-white">$1,500</span>
                </div>
              </div>
              <button className="w-full mt-5 bg-secondary text-white py-2 rounded-md font-label text-sm font-medium hover:bg-secondary/90 transition-colors">
                Try Calculator
              </button>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
        </article>
      </div>
    </section>
  );
};

export default PortfolioGrid;
