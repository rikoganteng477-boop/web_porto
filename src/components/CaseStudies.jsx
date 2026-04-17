import CaseStudyCard from './CaseStudyCard';

const CaseStudies = () => {
  const studies = [
    {
      title: "High-Frequency Arbitrage",
      description: "Analyzing latency discrepancies across global exchanges to identify micro-second arbitrage opportunities.",
      icon: "data_exploration"
    },
    {
      title: "Sentiment Modeling",
      description: "Utilizing NLP to quantify market sentiment from alternative data sources and correlate with price action.",
      icon: "bubble_chart"
    },
    {
      title: "Risk-Parity Allocation",
      description: "Designing dynamic asset allocation algorithms that optimize for volatility rather than absolute return.",
      icon: "candlestick_chart"
    }
  ];

  return (
    <section className="py-24 bg-surface-container-low relative">
      <div className="max-w-7xl mx-auto px-8">
        <div className="mb-16 max-w-2xl">
          <h2 className="font-headline text-3xl font-extrabold text-primary-container tracking-tight mb-4">Algorithmic Strategies & Case Studies</h2>
          <p className="font-body text-on-surface-variant leading-[1.6]">Deconstructing complex market data into actionable insights. A curated selection of technical analyses and predictive models.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {studies.map((study, index) => (
            <CaseStudyCard 
              key={index}
              title={study.title}
              description={study.description}
              icon={study.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
