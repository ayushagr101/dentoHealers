import React from 'react';
import { Award, GraduationCap, Heart, Star } from 'lucide-react';

const Team = () => {
  return (
    <section id="team" className="py-12 md:py-20 px-4 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-3 md:mb-4">
            Meet Your Dentist
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            Dedicated to providing exceptional dental care with a gentle touch
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Image Section */}
          <div className="order-1 lg:order-1">
            <div className="relative max-w-md mx-auto lg:max-w-none">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&h=700&fit=crop"
                  alt="Dr. Sarah Mitchell"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-900/90 to-transparent p-6 md:p-8">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">
                    Dr. Ritee Agarwal
                  </h3>
                  <p className="text-blue-100 text-base md:text-lg">
                    BDS, General & Cosmetic Dentistry
                  </p>
                </div>
              </div>
              
              {/* Decorative Element */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-500 rounded-full opacity-20 blur-3xl -z-10"></div>
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-teal-500 rounded-full opacity-20 blur-3xl -z-10"></div>
            </div>
          </div>

          {/* Info Section */}
          <div className="order-2 lg:order-2 px-4 lg:px-0">
            <div className="space-y-4 md:space-y-6">
              {/* About Text */}
              <div>
                <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-3 md:mb-4">
                  About Dr. Agarwal
                </h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-3 md:mb-4">
                  With over 15 years of experience, Dr. Sarah Mitchell is committed to providing personalized, 
                  comprehensive dental care in a comfortable and welcoming environment. Her gentle approach 
                  and attention to detail have helped countless patients achieve healthy, beautiful smiles.
                </p>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  Dr. Mitchell believes in educating patients about their oral health and working together 
                  to create customized treatment plans that meet individual needs and goals.
                </p>
              </div>

              {/* Credentials Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 pt-2">
                <div className="bg-white rounded-xl p-4 md:p-5 shadow-md border border-gray-100">
                  <div className="flex items-start gap-3">
                    <div className="bg-blue-100 rounded-lg p-2 md:p-2.5">
                      <GraduationCap className="text-blue-600 w-5 h-5 md:w-6 md:h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 text-sm md:text-base mb-1">Education</h4>
                      <p className="text-xs md:text-sm text-gray-600">Harvard School of Dental Medicine</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-4 md:p-5 shadow-md border border-gray-100">
                  <div className="flex items-start gap-3">
                    <div className="bg-teal-100 rounded-lg p-2 md:p-2.5">
                      <Award className="text-teal-600 w-5 h-5 md:w-6 md:h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 text-sm md:text-base mb-1">Experience</h4>
                      <p className="text-xs md:text-sm text-gray-600">15+ Years in Practice</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-4 md:p-5 shadow-md border border-gray-100">
                  <div className="flex items-start gap-3">
                    <div className="bg-purple-100 rounded-lg p-2 md:p-2.5">
                      <Star className="text-purple-600 w-5 h-5 md:w-6 md:h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 text-sm md:text-base mb-1">Specializations</h4>
                      <p className="text-xs md:text-sm text-gray-600">Cosmetic & Restorative</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-4 md:p-5 shadow-md border border-gray-100">
                  <div className="flex items-start gap-3">
                    <div className="bg-pink-100 rounded-lg p-2 md:p-2.5">
                      <Heart className="text-pink-600 w-5 h-5 md:w-6 md:h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 text-sm md:text-base mb-1">Patient Care</h4>
                      <p className="text-xs md:text-sm text-gray-600">5000+ Happy Patients</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;