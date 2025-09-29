import React, { useState, useEffect } from "react";
import Navigation from "./Navigation";

function Header() {
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 10) {
				setIsScrolled(true);
			} else {
				setIsScrolled(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<header
			className={`fixed w-full z-10 transition-all duration-300 ${
				isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
			}`}
		>
			<div className="container mx-auto px-4">
				<div className="flex justify-between items-center">
					<div className="flex items-center">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-8 w-8 text-blue-600"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M13 10V3L4 14h7v7l9-11h-7z"
							/>
						</svg>
						<span className="ml-2 text-xl font-bold text-gray-800">
							Dento Healers
						</span>
					</div>
					<Navigation />
				</div>
			</div>
		</header>
	);
}

export default Header;
