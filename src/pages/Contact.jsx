import ContactHero from '../components/ContactHero';
import ContactForm from '../components/ContactForm';
import ContactChannels from '../components/ContactChannels';

const Contact = () => {
  return (
    <div className="flex-grow flex flex-col relative z-10 w-full pt-20">
      <ContactHero />
      <div className="max-w-7xl mx-auto px-8 py-16 w-full flex flex-col lg:flex-row gap-12 -mt-16 z-20">
        <ContactForm />
        <ContactChannels />
      </div>
    </div>
  );
};

export default Contact;
