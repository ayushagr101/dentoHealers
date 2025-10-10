// src/components/DentalServices/ServiceList.jsx
import React from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const ServiceCard = ({ service, expandedId, toggleExpand }) => {
	const isExpanded = expandedId === service.id;

	return (
		<div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
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
					{isExpanded ? (
						<ChevronUp className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
					) : (
						<ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
					)}
				</div>
			</button>

			{isExpanded && (
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

const ServiceList = ({ services, expandedId, toggleExpand }) => {
	return (
		<div className="space-y-4">
			{services.map((service) => (
				<ServiceCard
					key={service.id}
					service={service}
					expandedId={expandedId}
					toggleExpand={toggleExpand}
				/>
			))}
		</div>
	);
};

export default ServiceList;
