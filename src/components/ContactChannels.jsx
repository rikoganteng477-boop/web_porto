const ContactChannels = () => {
  return (
    <div className="lg:w-1/3 flex flex-col gap-6 pt-16 lg:pt-0">
      <h3 className="font-headline text-lg font-bold text-on-surface tracking-tight mb-2">Direct Channels</h3>
      
      <a className="group flex items-start gap-4 p-6 bg-surface-container-lowest rounded-xl ambient-shadow hover:bg-surface-bright transition-colors" href="mailto:hisnaufal2@gmail.com">
        <div className="p-3 bg-surface-container rounded-lg text-primary-container group-hover:bg-[#10B981]/10 group-hover:text-[#10B981] transition-colors">
          <span className="material-symbols-outlined">mail</span>
        </div>
        <div>
          <h4 className="font-label font-bold text-sm text-on-surface mb-1">Email</h4>
          <p className="font-body text-[0.875rem] text-on-surface-variant leading-[1.6]">hisnaufal2@gmail.com</p>
        </div>
      </a>
      
      <a className="group flex items-start gap-4 p-6 bg-surface-container-lowest rounded-xl ambient-shadow hover:bg-surface-bright transition-colors" href="https://instagram.com/nouvalhisyam10" target="_blank" rel="noopener noreferrer">
        <div className="p-3 bg-surface-container rounded-lg text-primary-container group-hover:bg-[#10B981]/10 group-hover:text-[#10B981] transition-colors">
          <span className="material-symbols-outlined">alternate_email</span>
        </div>
        <div>
          <h4 className="font-label font-bold text-sm text-on-surface mb-1">Instagram</h4>
          <p className="font-body text-[0.875rem] text-on-surface-variant leading-[1.6]">@nouvalhisyam10</p>
        </div>
      </a>
      
      <div className="group flex items-start gap-4 p-6 bg-surface-container-lowest rounded-xl ambient-shadow hover:bg-surface-bright transition-colors cursor-default">
        <div className="p-3 bg-surface-container rounded-lg text-primary-container group-hover:bg-[#10B981]/10 group-hover:text-[#10B981] transition-colors">
          <span className="material-symbols-outlined">location_on</span>
        </div>
        <div>
          <h4 className="font-label font-bold text-sm text-on-surface mb-1">Alamat</h4>
          <p className="font-body text-[0.875rem] text-on-surface-variant leading-[1.6]">Semarang, Jawa Tengah</p>
        </div>
      </div>
    </div>
  );
};

export default ContactChannels;
