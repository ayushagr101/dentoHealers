import React from 'react';
import ServiceCard from '../common/ServiceCard';

function Services() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
  };
  
  const services = [
    {
      id: 1,
      title: 'Preventive Care',
      description: 'Regular checkups, cleanings, and X-rays to maintain your oral health and prevent dental issues.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      id: 2,
      title: 'Cosmetic Dentistry',
      description: 'Teeth whitening, veneers, and other services to enhance your smile and boost your confidence.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      id: 3,
      title: 'Restorative Dentistry',
      description: 'Fillings, crowns, bridges, and implants to restore function and appearance of damaged teeth.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    },
    {
      id: 4,
      title: 'Pediatric Dentistry',
      description: 'Specialized dental care for children to ensure healthy oral habits from an early age.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
      )
    },
    {
      id: 5,
      title: 'Orthodontics',
      description: 'Braces, clear aligners, and other treatments to correct misaligned teeth and jaws.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      )
    },
    {
      id: 6,
      title: 'Emergency Care',
      description: 'Prompt dental care for accidents, injuries, and severe toothaches when you need it most.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];
  
  return (
    <section id="services" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Our Services</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">We provide comprehensive dental care for your entire family, focusing on preventive care and maintaining your beautiful smile.</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.slice(0, 3).map(service => (
            <ServiceCard 
              key={service.id}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
        
        <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-8">
          {services.slice(3).map(service => (
            <ServiceCard 
              key={service.id}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <button 
            onClick={() => scrollToSection('contact')}
            className="text-blue-600 font-medium hover:text-blue-700 transition duration-300"
          >
            Schedule Your Appointment →
          </button>
        </div>
      </div>
    </section>
  );
}

export default Services;