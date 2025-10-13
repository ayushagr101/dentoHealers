import React from "react";
import Hero from "./components/Home/Hero";
import Services from "./components/Home/DentalServices/Services";
import About from "./components/Home/About";
import Footer from "./components/Layouts/Footer";
import Header from "./components/Header";
import Team from "./components/Home/Team";
import Map from "./components/Home/Map";
import AutoScrollingReviews from "./components/Home/AutoScrollingReviews";

function App() {
	return (
		<div className="min-h-screen font-sans">
			<Header />
			<main>
				<Hero />
				<Services />
				<About />
				<Team />
				<Map />
				<AutoScrollingReviews />
			</main>
			<Footer />
		</div>
	);
}

export default App;
