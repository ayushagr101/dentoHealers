// src/components/DentalServices/DentalServices.jsx
import React, { useState } from "react";
import { serviceData } from "./serviceData";
import ServiceList from "./ServiceList";

const Services = () => {
	const [expandedId, setExpandedId] = useState(null);

	const toggleExpand = (id) => {
		setExpandedId(expandedId === id ? null : id);
	};

	return (
		<section id="services" className="py-16 bg-gray-50">
			<div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-8 px-4 sm:px-6 lg:px-8">
				<div className="max-w-4xl mx-auto">
					<h1 className="text-3xl sm:text-4xl font-bold text-blue-900 text-center mb-8">
						Our Dental Services
					</h1>

					<ServiceList
						services={serviceData}
						expandedId={expandedId}
						toggleExpand={toggleExpand}
					/>
				</div>
			</div>
		</section>
	);
};

export default Services;
