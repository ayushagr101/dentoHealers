import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const DentalServices = () => {
  const [expandedId, setExpandedId] = useState(null);

  const services = [
    {
      id: 1,
      name: "Root Canal Treatment",
      description: "Advanced endodontic therapy to save infected or damaged teeth. Our specialists use modern techniques and equipment to ensure pain-free treatment. We preserve your natural tooth structure while eliminating infection. Recovery is quick with proper aftercare and follow-up.",
      image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&q=80"
    },
    {
      id: 2,
      name: "Teeth Cleaning / Scaling",
      description: "Professional dental cleaning removes plaque and tartar buildup from teeth surfaces. Regular scaling prevents gum disease and maintains oral hygiene. Our hygienists use ultrasonic scalers for thorough and comfortable cleaning. Recommended every six months for optimal dental health.",
      image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&q=80"
    },
    {
      id: 3,
      name: "Tooth Color Filling / Laser Filling",
      description: "Aesthetic composite and GIC fillings that match your natural tooth color. Laser technology ensures precise cavity preparation with minimal discomfort. These fillings bond directly to tooth structure for long-lasting results. Perfect solution for cavities while maintaining your smile's appearance.",
      image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=800&q=80"
    },
    {
      id: 4,
      name: "Teeth Whitening / Bleaching",
      description: "Professional whitening treatments for a brighter, more confident smile. Safe and effective procedures that remove years of stains and discoloration. Choose from in-office treatments or take-home kits customized for you. Results can lighten teeth several shades in just one session.",
      image: "https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=800&q=80"
    },
    {
      id: 5,
      name: "Painless Tooth Extraction",
      description: "Gentle tooth removal using advanced anesthesia and extraction techniques. Our experienced dentists ensure minimal discomfort throughout the procedure. We provide detailed aftercare instructions for smooth healing. Same-day extractions available for emergency situations.",
      image: "https://images.unsplash.com/photo-1629909615957-be38ce2af4c0?w=800&q=80"
    },
    {
      id: 6,
      name: "Dental Implant",
      description: "Permanent tooth replacement solution that looks and functions like natural teeth. Titanium implants fuse with jawbone to provide stable foundation. State-of-the-art surgery with high success rates and minimal recovery time. Restores your ability to eat, speak, and smile with confidence.",
      image: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=800&q=80"
    },
    {
      id: 7,
      name: "Dental Crown & Bridges",
      description: "Custom-made prosthetics to restore damaged teeth or replace missing ones. Crowns protect weakened teeth while bridges fill gaps permanently. High-quality materials ensure durability and natural appearance. Precision-fitted for comfort and optimal function.",
      image: "https://images.unsplash.com/photo-1588776814546-daab30f310ce?w=800&q=80"
    },
    {
      id: 8,
      name: "Orthodontic Treatment / Clear Aligners",
      description: "Straighten your teeth with traditional braces or discreet clear aligners. Customized treatment plans address crowding, gaps, and bite issues. Clear aligners offer nearly invisible correction for adults and teens. Achieve a perfectly aligned smile with our expert orthodontic care.",
      image: "https://images.unsplash.com/photo-1612538498456-e861df91d4d0?w=800&q=80"
    },
    {
      id: 9,
      name: "Cavity Protection",
      description: "Preventive treatments including fluoride applications and dental sealants. Protective barriers shield teeth from decay-causing bacteria and acids. Especially beneficial for children and those prone to cavities. Simple procedures that provide long-term protection for your teeth.",
      image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&q=80"
    },
    {
      id: 10,
      name: "Periodontal Treatment",
      description: "Specialized care for gum disease and periodontal conditions. Deep cleaning procedures remove bacteria below the gum line. Advanced treatments help regenerate lost bone and tissue. Maintain healthy gums to support your teeth for a lifetime.",
      image: "https://images.unsplash.com/photo-1588776813513-0df1f1c78349?w=800&q=80"
    },
    {
      id: 11,
      name: "Porcelain Veneers",
      description: "Ultra-thin shells bonded to front teeth for a flawless smile makeover. Correct chips, stains, gaps, and minor misalignment instantly. Custom-designed veneers match your desired shade and shape. Durable and stain-resistant for years of beautiful smiles.",
      image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&q=80"
    },
    {
      id: 12,
      name: "Kids Dentistry",
      description: "Gentle and friendly dental care specially designed for children. We create positive experiences to establish lifelong oral health habits. Preventive services, education, and treatments in a comfortable environment. Our team makes every visit fun and stress-free for young patients.",
      image: "https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=800&q=80"
    },
    {
      id: 13,
      name: "Painless Dentistry",
      description: "Anxiety-free dental care using sedation options and modern techniques. We prioritize your comfort with gentle approaches and pain management. Multiple sedation levels available based on your needs and procedure. Experience dentistry without fear or discomfort.",
      image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=800&q=80"
    },
    {
      id: 14,
      name: "Dental Tourism",
      description: "Premium dental care combined with travel arrangements for international patients. Significant cost savings without compromising on quality or technology. We assist with accommodations, travel plans, and treatment coordination. Experience world-class dentistry while exploring a new destination.",
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80"
    },
    {
      id: 15,
      name: "Dental Membership Plan",
      description: "Affordable preventive care packages with exclusive discounts on treatments. Annual plans include regular cleanings, exams, and X-rays. Members enjoy priority scheduling and special pricing benefits. Invest in your oral health with convenient payment options.",
      image: "https://images.unsplash.com/photo-1554224311-beee460c201f?w=800&q=80"
    }
  ];

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-blue-900 text-center mb-8">
          Our Dental Services
        </h1>
        
        <div className="space-y-4">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg"
            >
              <button
                onClick={() => toggleExpand(service.id)}
                className="w-full p-4 sm:p-6 flex items-center justify-between text-left focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <div className="flex items-center space-x-4 flex-1">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg sm:text-xl">
                      {service.id}
                    </span>
                  </div>
                  <h2 className="text-lg sm:text-xl font-semibold text-blue-900">
                    {service.name}
                  </h2>
                </div>
                <div className="ml-4">
                  {expandedId === service.id ? (
                    <ChevronUp className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                  ) : (
                    <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                  )}
                </div>
              </button>
              
              {expandedId === service.id && (
                <div className="px-4 sm:px-6 pb-6 animate-fadeIn">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <img
                      src={service.image}
                      alt={service.name}
                      className="w-full sm:w-48 h-48 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default DentalServices;