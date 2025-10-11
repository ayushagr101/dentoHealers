import React from "react";
import { MapPin } from "lucide-react";

function Map() {
	return (
		<div className="w-full max-w-4xl mx-auto p-4">
			<div className="bg-white rounded-lg shadow-lg overflow-hidden">
				<div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-4">
					<h2 className="text-2xl font-bold">Our Location</h2>
					<p className="text-blue-100 mt-1">Visit us at our office</p>
				</div>

				<div className="relative w-full h-96">
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.851857496737!2d80.976078!3d26.876447400000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfdf69348901f%3A0xa733d44443811f62!2sDento%20Healers%20dental%20clinic%20%26%20Implant%20center!5e0!3m2!1sen!2sin!4v1760100547041!5m2!1sen!2sin"
						width="100%"
						height="100%"
						style={{ border: 0 }}
						allowFullScreen=""
						loading="lazy"
						referrerPolicy="no-referrer-when-downgrade"
						title="Location Map"
					/>
				</div>

				<div className="bg-gray-50 p-4 border-t">
					<div className="space-y-2">
						<div className="flex items-start">
							<MapPin className="text-blue-400 w-7 h-7 flex-shrink-0 mt-0.5 mr-2" />
							<div>
								<p className="font-semibold text-xl text-gray-900">Address</p>
								<p className="text-gray-600 text-lg">
									A-925/1, near Meena Market, Block A, Indira Nagar, Lucknow,
									Uttar Pradesh - 226016
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Map;
