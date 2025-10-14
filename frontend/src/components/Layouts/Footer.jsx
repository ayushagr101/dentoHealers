import React from "react";
import {
	MapPin,
	Phone,
	Mail,
	Clock,
	Facebook,
	Instagram,
	Twitter,
} from "lucide-react";

const Footer = () => {
	return (
		<footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-gray-300">
			{/* Main Footer Content */}
			<div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
					{/* About Section */}
					<div className="space-y-4">
						{/* Social Media */}
						<div className="flex gap-4 pt-2 justify-center">
							<a
								href="https://www.facebook.com/dentohealers/"
								className="group relative w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/50 active:scale-95"
								aria-label="Facebook"
							>
								<Facebook
									size={20}
									className="text-white transition-transform duration-300 group-hover:scale-110"
								/>
							</a>

							<a
								href="https://www.instagram.com/dentohealers/"
								className="group relative w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-pink-500/50 active:scale-95"
								aria-label="Instagram"
							>
								<Instagram
									size={20}
									className="text-white transition-transform duration-300 group-hover:scale-110"
								/>
							</a>
						</div>
					</div>
					{/* Contact Info */}
					<div>
						<h4 className="text-2xl font-semibold text-white mb-4">
							Contact Us
						</h4>
						<ul className="space-y-5 md:space-y-7">
							<li className="flex items-start gap-3">
								<MapPin className="text-blue-400 w-7 h-7 flex-shrink-0 mt-0.5" />
								<span className="text-lg md:text-xl text-gray-400">
									A-925/1, near Meena Market, Block A, Indira Nagar, Lucknow,
									Uttar Pradesh - 226016
									<br />
								</span>
							</li>
							<li className="flex items-center gap-3">
								<Phone className="text-blue-400 w-7 h-7 flex-shrink-0" />
								<a
									href="tel:+918004727186"
									className="text-lg md:text-xl text-gray-400 hover:text-blue-400 transition-colors"
								>
									+91 800-472-7186
								</a>
							</li>
							<li className="flex items-center gap-3">
								<Mail className="text-blue-400 w-7 h-7 flex-shrink-0" />
								<a
									href="mailto:dentohealers@gmail.com"
									className="text-lg md:text-xl text-gray-400 hover:text-blue-400 transition-colors"
								>
									dentohealers@gmail.com
								</a>
							</li>
							<li className="flex items-start gap-3">
								<Clock className="text-blue-400 w-7 h-7 flex-shrink-0 mt-0.5" />
								<div className="text-lg md:text-xl text-gray-400">
									<p>Monday - Saturday: 11am - 3pm </p>
									<p>Monday - Saturday: 5pm - 8pm</p>
									<p>Sunday: 12pm - 5pm</p>
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
							© 2025 DentoHealers
						</p>
						<p className="text-sm text-gray-500 text-center md:text-left">
							All rights reserved.
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
