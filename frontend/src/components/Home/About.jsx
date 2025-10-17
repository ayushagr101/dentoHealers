import React from "react";

function About() {
	const features = [
		{ id: 1, text: "Experienced Team" },
		{ id: 2, text: "Modern Equipment" },
		{ id: 3, text: "Personalized Care" },
		{ id: 4, text: "Comfortable Setting" },
		{ id: 5, text: "Family-Friendly" },
		{ id: 6, text: "Insurance Accepted" },
	];

	return (
		<section id="about" className="py-16 bg-gray-50">
			<div className="container mx-auto px-4">
				<div className="flex flex-col md:flex-row items-center">
					<div className="md:w-1/2 mb-8 md:mb-0">
						<img
							src="/api/placeholder/500/300"
							alt="Dental office"
							className="rounded-lg shadow-md w-full h-auto object-cover transform transition duration-300 hover:scale-105"
						/>
					</div>
					<div className="md:w-1/2 md:pl-12">
						<h2 className="text-3xl font-bold mb-4">About Our Practice</h2>
						<p className="text-gray-600 mb-4">
							At Dento Healers, we've been serving our community for over
							15 years with compassionate, personalized dental care. Our modern
							facility is equipped with the latest technology to ensure
							effective and comfortable treatments.
						</p>
						<p className="text-gray-600 mb-6">
							Our mission is to provide exceptional dental care in a comfortable
							and welcoming environment. We believe in educating our patients
							about their oral health and working together to achieve lasting
							results.
						</p>
						<div className="grid grid-cols-2 gap-4">
							{features.map((feature) => (
								<div key={feature.id} className="flex items-center">
									<svg
										className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M5 13l4 4L19 7"
										/>
									</svg>
									<span>{feature.text}</span>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default About;
