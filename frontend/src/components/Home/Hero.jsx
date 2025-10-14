import React from "react";

function Hero() {
	const scrollToSection = (sectionId) => {
		const section = document.getElementById(sectionId);
		section.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<section
			id="home"
			className="pt-32 pb-16 md:pt-36 md:pb-24 bg-gradient-to-br from-blue-50 to-blue-100"
		>
			<div className="container mx-auto px-4">
				<div className="flex flex-col md:flex-row items-center">
					<div className="md:w-1/2 mb-8 md:mb-0">
						<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
							Your Smile, Our Passion
						</h1>
						<p className="text-lg text-gray-600 mb-6">
							Experience exceptional dental care with our dedicated team of
							professionals using the latest technology for your perfect smile.
						</p>
					</div>
					<div className="md:w-1/2 p-4">
						<div className="bg-white p-2 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
							<img
								src="src/assets/dentistOne.jpeg"
								alt="Dental care"
								className="rounded w-full h-auto"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Hero;
