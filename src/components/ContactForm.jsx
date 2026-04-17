const ContactForm = () => {
  return (
    <div className="flex-1 bg-surface-container-lowest rounded-xl p-8 md:p-12 ambient-shadow border-none">
      <h2 className="font-headline text-[1.75rem] text-on-surface font-bold tracking-tight mb-8">Send a Message</h2>
      <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
        <div className="relative group">
          <label className="font-label text-sm font-bold text-on-surface-variant block mb-2" htmlFor="name">Name</label>
          <input className="w-full bg-transparent border border-outline-variant/30 rounded-md focus:border-[#10B981] focus:ring-1 focus:ring-[#10B981] px-4 py-3 font-body text-on-surface transition-colors" id="name" placeholder="Jane Doe" type="text" />
        </div>
        
        <div className="relative group">
          <label className="font-label text-sm font-bold text-on-surface-variant block mb-2" htmlFor="email">Institutional Email</label>
          <input className="w-full bg-transparent border border-outline-variant/30 rounded-md focus:border-[#10B981] focus:ring-1 focus:ring-[#10B981] px-4 py-3 font-body text-on-surface transition-colors" id="email" placeholder="jane@institution.com" type="email" />
        </div>
        
        <div className="relative group">
          <label className="font-label text-sm font-bold text-on-surface-variant block mb-2" htmlFor="message">Inquiry</label>
          <textarea className="w-full bg-transparent border border-outline-variant/30 rounded-md focus:border-[#10B981] focus:ring-1 focus:ring-[#10B981] px-4 py-3 font-body text-on-surface transition-colors resize-none" id="message" placeholder="Detail your proposition or requirement..." rows="4"></textarea>
        </div>
        
        <div className="pt-4">
          <button className="bg-[#10B981] text-white px-8 py-3 rounded-md font-label font-bold text-sm hover:scale-[1.02] transition-transform duration-200 flex items-center gap-2 shadow-sm" type="submit">
            Initialize Contact
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
