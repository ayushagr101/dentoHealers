import React, { useState, useEffect } from "react";

function Navigation() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [activeSection, setActiveSection] = useState("home");

	useEffect(() => {
		const handleScroll = () => {
			const sections = ["home", "services", "about"];
			const scrollPosition = window.scrollY + 100;

			for (const section of sections) {
				const element = document.getElementById(section);
				if (element) {
					const offsetTop = element.offsetTop;
					const offsetBottom = offsetTop + element.offsetHeight;

					if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
						setActiveSection(section);
						break;
					}
				}
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const scrollToSection = (sectionId) => {
		setActiveSection(sectionId);
		const section = document.getElementById(sectionId);
		section.scrollIntoView({ behavior: "smooth" });
		setIsMenuOpen(false);
	};

	return (
		<>
			{/* Desktop Navigation */}
			<nav className="hidden md:flex space-x-8">
				{["home", "services", "about"].map((section) => (
					<button
						key={section}
						onClick={() => scrollToSection(section)}
						className={`${
							activeSection === section ? "text-blue-600" : "text-gray-600"
						} hover:text-blue-500 transition-colors duration-300`}
					>
						{section.charAt(0).toUpperCase() + section.slice(1)}
					</button>
				))}
			</nav>

			{/* Mobile menu button */}
			<div className="md:hidden">
				<button
					onClick={() => setIsMenuOpen(!isMenuOpen)}
					className="text-gray-500 hover:text-blue-600 focus:outline-none"
					aria-label="Toggle menu"
				>
					{isMenuOpen ? (
						<svg
							className="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M6 18L18 6M6 6l12 12"
							/>
						</svg>
					) : (
						<svg
							className="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h16M4 18h16"
							/>
						</svg>
					)}
				</button>
			</div>

			{/* Mobile Navigation */}
			{isMenuOpen && (
				<div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md py-4 mt-2">
					<div className="container mx-auto px-4">
						<div className="flex flex-col space-y-3">
							{["home", "services", "about"].map((section) => (
								<button
									key={section}
									onClick={() => scrollToSection(section)}
									className={`${
										activeSection === section
											? "text-blue-600"
											: "text-gray-600"
									} hover:text-blue-500 py-2 text-left`}
								>
									{section.charAt(0).toUpperCase() + section.slice(1)}
								</button>
							))}
						</div>
					</div>
				</div>
			)}
		</>
	);
}

export default Navigation;
