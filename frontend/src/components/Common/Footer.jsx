import React from 'react';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-gray-300">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
              Bright Smile Dental
            </h3>
            <p className="text-sm md:text-base text-gray-400 leading-relaxed">
              Providing exceptional dental care with a gentle touch. Your smile is our priority.
            </p>
            {/* Social Media */}
            <div className="flex gap-3 pt-2">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-pink-600 transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-400 transition-colors duration-300"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg md:text-xl font-semibold text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 md:space-y-3">
              <li>
                <a href="#home" className="text-sm md:text-base text-gray-400 hover:text-blue-400 transition-colors duration-300">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="text-sm md:text-base text-gray-400 hover:text-blue-400 transition-colors duration-300">
                  Services
                </a>
              </li>
              <li>
                <a href="#about" className="text-sm md:text-base text-gray-400 hover:text-blue-400 transition-colors duration-300">
                  About Us
                </a>
              </li>
              <li>
                <a href="#team" className="text-sm md:text-base text-gray-400 hover:text-blue-400 transition-colors duration-300">
                  Our Team
                </a>
              </li>
              <li>
                <a href="#contact" className="text-sm md:text-base text-gray-400 hover:text-blue-400 transition-colors duration-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg md:text-xl font-semibold text-white mb-4">
              Our Services
            </h4>
            <ul className="space-y-2 md:space-y-3">
              <li className="text-sm md:text-base text-gray-400">
                General Dentistry
              </li>
              <li className="text-sm md:text-base text-gray-400">
                Cosmetic Dentistry
              </li>
              <li className="text-sm md:text-base text-gray-400">
                Teeth Whitening
              </li>
              <li className="text-sm md:text-base text-gray-400">
                Dental Implants
              </li>
              <li className="text-sm md:text-base text-gray-400">
                Emergency Care
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg md:text-xl font-semibold text-white mb-4">
              Contact Us
            </h4>
            <ul className="space-y-3 md:space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-blue-400 w-5 h-5 flex-shrink-0 mt-0.5" />
                <span className="text-sm md:text-base text-gray-400">
                  123 Dental Street<br />
                  New York, NY 10001
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-blue-400 w-5 h-5 flex-shrink-0" />
                <a href="tel:+11234567890" className="text-sm md:text-base text-gray-400 hover:text-blue-400 transition-colors">
                  (123) 456-7890
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-blue-400 w-5 h-5 flex-shrink-0" />
                <a href="mailto:info@brightsmile.com" className="text-sm md:text-base text-gray-400 hover:text-blue-400 transition-colors">
                  info@brightsmile.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="text-blue-400 w-5 h-5 flex-shrink-0 mt-0.5" />
                <div className="text-sm md:text-base text-gray-400">
                  <p>Mon - Fri: 9am - 6pm</p>
                  <p>Sat: 9am - 2pm</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500 text-center md:text-left">
              © 2025 Bright Smile Dental. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-500 hover:text-blue-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-400 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;