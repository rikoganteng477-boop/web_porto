const CaseStudyCard = ({ title, description, icon }) => {
  return (
    <div className="bg-surface-container-lowest rounded-xl p-8 hover:bg-surface-bright transition-all duration-300 shadow-[0_20px_40px_rgba(10,25,47,0.06)] group relative overflow-hidden">
      <div className="absolute top-0 right-0 w-24 h-24 bg-secondary/5 rounded-bl-full -z-10 group-hover:scale-110 transition-transform"></div>
      <div className="w-12 h-12 bg-surface-container-high rounded-lg flex items-center justify-center mb-6 text-primary-container">
        <span className="material-symbols-outlined">{icon}</span>
      </div>
      <h3 className="font-headline font-bold text-xl text-primary-container mb-3">{title}</h3>
      <p className="font-body text-sm text-on-surface-variant leading-[1.6] mb-6">{description}</p>
      <a className="inline-flex items-center text-secondary font-medium text-sm group-hover:text-primary-container transition-colors" href="#">
        Read Analysis <span className="material-symbols-outlined text-sm ml-1 group-hover:translate-x-1 transition-transform">arrow_right_alt</span>
      </a>
    </div>
  );
};

export default CaseStudyCard;
